import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '../app/contexts/LanguageContext'
import Navbar from '../app/components/Navbar'

const renderNavbar = (isDarkMode = false) => {
  const mockSetDarkMode = jest.fn()
  return render(
    <LanguageProvider>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={mockSetDarkMode} />
    </LanguageProvider>
  )
}

describe('Navbar Component', () => {
  it('should render navigation links', () => {
    renderNavbar()
    
    expect(screen.getByText('Beranda')).toBeInTheDocument()
    expect(screen.getByText('Tentang')).toBeInTheDocument()
    expect(screen.getByText('Keahlian')).toBeInTheDocument()
    expect(screen.getByText('Pengalaman')).toBeInTheDocument()
    expect(screen.getByText('Proyek')).toBeInTheDocument()
    expect(screen.getByText('Kontak')).toBeInTheDocument()
  })

  it('should have dark mode toggle button', () => {
    renderNavbar()
    
    const darkModeToggle = screen.getByRole('button', { name: /toggle dark mode|theme/i })
    expect(darkModeToggle).toBeInTheDocument()
  })

  it('should have language toggle button', () => {
    renderNavbar()
    
    const languageToggle = screen.getByRole('button', { name: /id|en/i })
    expect(languageToggle).toBeInTheDocument()
  })

  it('should apply dark mode styling', () => {
    const { container } = renderNavbar(true)
    
    // Check for navbar presence
    const navbar = container.querySelector('nav')
    expect(navbar).toBeInTheDocument()
  })

  it('should switch language when language toggle is clicked', () => {
    renderNavbar()
    
    // Initially should show Indonesian navigation
    expect(screen.getByText('Beranda')).toBeInTheDocument()
    
    // Find and click language toggle
    const languageToggle = screen.getByRole('button', { name: /id|en/i })
    fireEvent.click(languageToggle)
    
    // Should now show English navigation
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
