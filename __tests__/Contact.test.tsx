import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../app/components/Contact'
import { LanguageProvider } from '../app/contexts/LanguageContext'

const renderContact = (isDarkMode = false) => {
  return render(
    <LanguageProvider>
      <Contact isDarkMode={isDarkMode} />
    </LanguageProvider>
  )
}

describe('Contact Component', () => {
  it('should render contact form with all fields', () => {
    renderContact()
    
    expect(screen.getByLabelText(/nama/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pesan/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /kirim pesan/i })).toBeInTheDocument()
  })

  it('should show validation errors for empty fields', async () => {
    const user = userEvent.setup()
    renderContact()
    
    const submitButton = screen.getByRole('button', { name: /kirim pesan/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/nama harus diisi/i)).toBeInTheDocument()
      expect(screen.getByText(/email harus diisi/i)).toBeInTheDocument()
      expect(screen.getByText(/pesan harus diisi/i)).toBeInTheDocument()
    })
  })

  it('should show validation error for invalid email', async () => {
    const user = userEvent.setup()
    renderContact()
    
    const nameInput = screen.getByLabelText(/nama/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/pesan/i)
    const submitButton = screen.getByRole('button', { name: /kirim pesan/i })
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'invalid-email')
    await user.type(messageInput, 'Test message')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/email tidak valid/i)).toBeInTheDocument()
    })
  })

  it('should submit form with valid data', async () => {
    const user = userEvent.setup()
    renderContact()
    
    const nameInput = screen.getByLabelText(/nama/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/pesan/i)
    const submitButton = screen.getByRole('button', { name: /kirim pesan/i })
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/terima kasih atas pesan anda/i)).toBeInTheDocument()
    })
  })

  it('should apply dark mode styling', () => {
    const { container } = renderContact(true)
    
    // Check for dark mode classes in the container
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gray-800')
  })

  it('should clear form after successful submission', async () => {
    const user = userEvent.setup()
    renderContact()
    
    const nameInput = screen.getByLabelText(/nama/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/pesan/i) as HTMLTextAreaElement
    const submitButton = screen.getByRole('button', { name: /kirim pesan/i })
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(nameInput.value).toBe('')
      expect(emailInput.value).toBe('')
      expect(messageInput.value).toBe('')
    })
  })
})
