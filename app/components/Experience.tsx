'use client'

import { useLanguage } from '../contexts/LanguageContext'

interface ExperienceProps {
  isDarkMode: boolean
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const { t } = useLanguage()
  
  const experiences = [
    {
      company: 'PT QWORDS COMPANY INTERNATIONAL',
      position: 'Staff Technical Support',
      period: 'November 2023 – Sekarang',
      location: 'Jakarta, Indonesia',
      achievements: [
        t('experience.jobDesc.qwords.1'),
        t('experience.jobDesc.qwords.2'),
        t('experience.jobDesc.qwords.3'),
        t('experience.jobDesc.qwords.4'),
        t('experience.jobDesc.qwords.5'),
        t('experience.jobDesc.qwords.6')
      ],
      technologies: ['cPanel', 'WHM', 'Linux', 'Windows Server', 'Zabbix', 'Wazuh', 'Mikrotik', 'Cloudflare', 'Docker']
    },
    {
      company: 'STMIK IKMI CIREBON',
      position: 'Staff Laboratorium Komputer',
      period: 'September 2021 – Agustus 2023',
      location: 'Cirebon, Indonesia',
      achievements: [
        t('experience.jobDesc.stmik.1'),
        t('experience.jobDesc.stmik.2'),
        t('experience.jobDesc.stmik.3'),
        t('experience.jobDesc.stmik.4')
      ],
      technologies: ['LAN Management', 'Hardware Support', 'Software Installation', 'Network Troubleshooting', 'Windows', 'Linux']
    }
  ]

  return (
    <section id="experience" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('experience.title')} <span className="gradient-text">{t('experience.subtitle')}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('experience.description')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className={`absolute left-9 top-12 w-0.5 h-full ${
                  isDarkMode ? 'bg-white/20' : 'bg-gray-300'
                }`}></div>
              )}

              <div className="ml-12">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {exp.position}
                    </h3>
                    <div className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className={`text-xl font-semibold gradient-text`}>
                      {exp.company}
                    </h4>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      📍 {exp.location}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {t('experience.achievements')}
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                        <span className={`${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {t('experience.technologies')}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-white/10 text-white' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <div className={`p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {t('experience.education')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h4 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t('experience.educationTitle')}
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Universitas Cakrawala
                    </h5>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Sistem & Teknologi Informasi • 2024 - Sekarang
                    </p>
                  </div>
                  <div>
                    <h5 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      SMK Veteran Cirebon
                    </h5>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Teknik Komputer dan Jaringan • 2018 - 2021
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t('experience.certificationsTitle')}
                </h4>
                <div className="space-y-3">
                  {[
                    'cPanel Professional Certification (CPP) - cPanel University',
                    'Docker for the Absolute Beginner - Udemy',
                    'CCNA v7: Enterprise Networking, Security and Automation - Cisco',
                    'NDG: Linux Essentials - Net Dev Group'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"></div>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 