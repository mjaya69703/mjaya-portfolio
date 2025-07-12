'use client'

import { useLanguage } from '../contexts/LanguageContext'

interface AboutProps {
  isDarkMode: boolean
}

export default function About({ isDarkMode }: AboutProps) {
  const { t } = useLanguage()
  
  const stats = [
    { label: t('about.stats.years'), value: '3+' },
    { label: t('about.stats.companies'), value: '2+' },
    { label: t('about.stats.certifications'), value: '4+' },
    { label: t('about.stats.technologies'), value: '25+' }
  ]

  const highlights = [
    {
      icon: '🖥️',
      title: t('about.highlights.serverAdmin'),
      description: t('about.highlights.serverAdminDesc')
    },
    {
      icon: '🌐',
      title: t('about.highlights.networkManagement'),
      description: t('about.highlights.networkManagementDesc')
    },
    {
      icon: '🔧',
      title: t('about.highlights.technicalSupport'),
      description: t('about.highlights.technicalSupportDesc')
    },
    {
      icon: '🚀',
      title: t('about.highlights.devOps'),
      description: t('about.highlights.devOpsDesc')
    }
  ]

  return (
    <section id="about" className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')} <span className="gradient-text">{t('about.subtitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Technical Support Professional
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('about.description')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('about.expertise')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10' 
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{highlight.icon}</div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {highlight.title}
                    </h4>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              What Drives Me
            </h4>
            <p className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('about.quote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 