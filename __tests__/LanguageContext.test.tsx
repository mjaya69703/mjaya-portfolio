import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from '../app/contexts/LanguageContext'

// Test component to use the context
const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage()
  
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <span data-testid="greeting">{t('hero.greeting')}</span>
      <button 
        data-testid="toggle-language" 
        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      >
        Toggle Language
      </button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('should provide default language as Indonesian', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('id')
  })

  it('should switch language when setLanguage is called', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    const toggleButton = screen.getByTestId('toggle-language')
    const languageDisplay = screen.getByTestId('current-language')
    
    expect(languageDisplay).toHaveTextContent('id')
    
    fireEvent.click(toggleButton)
    expect(languageDisplay).toHaveTextContent('en')
    
    fireEvent.click(toggleButton)
    expect(languageDisplay).toHaveTextContent('id')
  })

  it('should translate text correctly for Indonesian', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    expect(screen.getByTestId('greeting')).toHaveTextContent('Halo, saya')
  })

  it('should translate text correctly for English', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    
    const toggleButton = screen.getByTestId('toggle-language')
    fireEvent.click(toggleButton)
    
    expect(screen.getByTestId('greeting')).toHaveTextContent("Hello, I'm")
  })

  it('should return key if translation not found', () => {
    const TestMissingKey = () => {
      const { t } = useLanguage()
      return <span data-testid="missing">{t('missing.key')}</span>
    }

    render(
      <LanguageProvider>
        <TestMissingKey />
      </LanguageProvider>
    )
    
    expect(screen.getByTestId('missing')).toHaveTextContent('missing.key')
  })
})
