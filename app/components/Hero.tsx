'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface HeroProps {
  isDarkMode: boolean
}

export default function Hero({ isDarkMode }: HeroProps) {
  const [currentText, setCurrentText] = useState(0)
  const { t } = useLanguage()
  
  const texts = [
    t('hero.role.technical'),
    t('hero.role.devops'),
    t('hero.role.network'),
    t('hero.role.system')
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h2 className={`text-lg md:text-2xl font-medium mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('hero.greeting')}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Muhamad Jaya Kusuma</span>
          </h1>
        </div>

        {/* Animated Role */}
        <div className="mb-8 h-12 md:h-16 flex items-center justify-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {texts[currentText]}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.viewWork')}
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'border-white/30 text-white hover:bg-white/10' 
                : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {t('hero.getInTouch')}
          </button>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-8 md:mt-16">
          <p className={`text-sm mb-4 md:mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {t('hero.techStack')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              'Docker', 'Linux', 'Windows Server', 'Zabbix', 'Wazuh', 
              'Mikrotik', 'Cisco', 'cPanel', 'Git', 'Python'
            ].map((tech, index) => (
              <div
                key={tech}
                className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          isDarkMode ? 'border-white/30' : 'border-gray-800'
        }`}>
          <div className={`w-1 h-3 bg-current rounded-full mt-2 animate-pulse ${
            isDarkMode ? 'text-white/50' : 'text-gray-600'
          }`}></div>
        </div>
      </div>
    </section>
  )
} 