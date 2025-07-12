'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface NavbarProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode 
          ? 'backdrop-blur-md bg-gray-900/80 border-b border-white/20 shadow-lg' 
          : 'backdrop-blur-md bg-white/80 border-b border-gray-200/30 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold gradient-text`}>
              MJK<span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Portfolio</span>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-10 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-gray-800/50 text-gray-700 hover:bg-gray-800/70'
              }`}
            >
              {language === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
                  : 'bg-gray-800/50 text-gray-600 hover:bg-gray-800/70'
              }`}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            isDarkMode 
              ? 'backdrop-blur-md bg-gray-900/80 border-t border-white/20' 
              : 'backdrop-blur-md bg-white/80 border-t border-gray-200/30'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Toggle in Mobile Menu */}
              <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
                <button
                  onClick={toggleLanguage}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {language === 'id' ? '🇮🇩 Bahasa Indonesia' : '🇺🇸 English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 