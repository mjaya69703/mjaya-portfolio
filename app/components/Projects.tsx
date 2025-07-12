'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ProjectsProps {
  isDarkMode: boolean
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: 'Neco Siakad - Academic System',
      description: t('projects.necoSiakad'),
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/mjaya69703/siakad-pt.internal-dev.id',
      live: 'https://siakad-pt.idev-fun.org',
      featured: true
    },
    {
      id: 2,
      title: 'Hosting Infrastructure Management',
      description: t('projects.hostingInfra'),
      image: '/api/placeholder/400/250',
      category: 'infrastructure',
      technologies: ['cPanel', 'WHM', 'Linux', 'Windows Server', 'Zabbix', 'Wazuh'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Network Security Implementation',
      description: t('projects.networkSecurity'),
      image: '/api/placeholder/400/250',
      category: 'security',
      technologies: ['Mikrotik', 'Cisco', 'Cloudflare', 'Wazuh', 'Firewall', 'DDoS Protection'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'VPS Management & Optimization',
      description: t('projects.vpsManagement'),
      image: '/api/placeholder/400/250',
      category: 'infrastructure',
      technologies: ['VPS', 'AlmaLinux', 'Ubuntu', 'Docker', 'Performance Tuning', 'Bash'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Automation Scripts Development',
      description: t('projects.automationScripts'),
      image: '/api/placeholder/400/250',
      category: 'automation',
      technologies: ['Bash', 'Python', 'Cron Jobs', 'Backup Scripts', 'Monitoring', 'Git'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Laboratory Network Administration',
      description: t('projects.labNetwork'),
      image: '/api/placeholder/400/250',
      category: 'network',
      technologies: ['LAN Management', 'Hardware Support', 'Software Installation', 'Network Troubleshooting'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'security', label: 'Security' },
    { id: 'automation', label: 'Automation' },
    { id: 'network', label: 'Network' },
    { id: 'web', label: 'Web Development' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('projects.title')} <span className="gradient-text">{t('projects.subtitle')}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('projects.description')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-white/10 text-white' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {project.github === '#' ? t('projects.details') : 'GitHub'}
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    }`}
                  >
                    {project.live === '#' ? t('projects.viewDetails') : 'Live Demo'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {t('projects.viewMore')}
            </h3>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('projects.viewMoreDesc')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('projects.workTogether')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 