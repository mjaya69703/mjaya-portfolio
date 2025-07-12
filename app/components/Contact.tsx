'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ContactProps {
  isDarkMode: boolean
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: '📧',
      label: t('contact.info.email'),
      value: 'jaya.kusuma@idev-fun.org',
      link: 'mailto:jaya.kusuma@idev-fun.org'
    },
    {
      icon: '📱',
      label: t('contact.info.phone'),
      value: '+62 878-4879-9145',
      link: 'tel:+6281234567890'
    },
    {
      icon: '📍',
      label: t('contact.info.location'),
      value: t('contact.location'),
      link: '#'
    },
    {
      icon: '🌐',
      label: t('contact.info.website'),
      value: 'mjaya69703.github.io',
      link: 'https://mjaya69703.idev-fun.org'
    },
    {
      icon: '💼',
      label: t('contact.info.github'),
      value: 'github.com/mjaya69703',
      link: 'https://github.com/mjaya69703'
    },
    {
      icon: '🔗',
      label: t('contact.info.linkedin'),
      value: 'linkedin.com/in/mjaya69703',
      link: 'https://linkedin.com/in/mjaya69703'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')} <span className="gradient-text">{t('contact.subtitle')}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {t('contact.getInTouch')}
              </h3>
              <p className={`text-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('contact.letsConnectDesc')}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
                  }`}
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {info.label}
                    </div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {t('contact.sendMessage')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                    placeholder={t('contact.form.email')}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                  placeholder={t('contact.form.subject')}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
                  {t('contact.form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                  {t('contact.form.error')}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 