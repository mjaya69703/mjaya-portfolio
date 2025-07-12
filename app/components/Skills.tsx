'use client'

import { useLanguage } from '../contexts/LanguageContext'

interface SkillsProps {
  isDarkMode: boolean
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.serverAdmin'),
      icon: '🖥️',
      skills: [
        { name: 'Windows Server', level: 90 },
        { name: 'Linux (Ubuntu, AlmaLinux)', level: 85 },
        { name: 'VPS Management', level: 88 },
        { name: 'cPanel/WHM', level: 92 },
        { name: 'Server Optimization', level: 85 },
        { name: 'Backup & Recovery', level: 80 }
      ]
    },
    {
      title: t('skills.networkManagement'),
      icon: '🌐',
      skills: [
        { name: 'Mikrotik Configuration', level: 85 },
        { name: 'Cisco Networking', level: 75 },
        { name: 'LAN/WAN Setup', level: 90 },
        { name: 'Network Security', level: 80 },
        { name: 'DNS Management', level: 85 },
        { name: 'VPN Configuration', level: 75 }
      ]
    },
    {
      title: t('skills.devOps'),
      icon: '🚀',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'CI/CD Pipelines', level: 65 },
        { name: 'Bash Scripting', level: 80 },
        { name: 'Python Scripting', level: 75 },
        { name: 'Git Version Control', level: 85 },
        { name: 'Automation Tools', level: 70 }
      ]
    },
    {
      title: t('skills.monitoring'),
      icon: '📊',
      skills: [
        { name: 'Zabbix Monitoring', level: 85 },
        { name: 'Wazuh Security', level: 80 },
        { name: 'Performance Monitoring', level: 85 },
        { name: 'Log Analysis', level: 75 },
        { name: 'Alert Management', level: 80 },
        { name: 'System Health Checks', level: 90 }
      ]
    },
    {
      title: t('skills.hosting'),
      icon: '☁️',
      skills: [
        { name: 'Web Hosting', level: 90 },
        { name: 'Email Hosting', level: 85 },
        { name: 'Database Hosting', level: 80 },
        { name: 'SSL Certificate Management', level: 85 },
        { name: 'Domain Management', level: 90 },
        { name: 'Cloudflare Integration', level: 80 }
      ]
    },
    {
      title: t('skills.programming'),
      icon: '💻',
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Laravel Framework', level: 70 },
        { name: 'API Development', level: 65 }
      ]
    }
  ]

  const additionalTools = [
    'Cloudflare', 'Wazuh', 'Zabbix', 'Mikrotik', 'Cisco', 'Docker', 'Git', 'Bash', 'Python', 'PHP', 'MySQL', 'Laravel', 'cPanel', 'WHM', 'SSL', 'DNS', 'VPN', 'Firewall', 'Backup Tools', 'Monitoring Tools', 'Automation Scripts', 'Network Tools', 'Security Tools', 'Performance Tools'
  ]

  return (
    <section id="skills" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('skills.title')} <span className="gradient-text">{t('skills.subtitle')}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('skills.description')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{category.icon}</div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}>
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {t('skills.additionalTools')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
} 