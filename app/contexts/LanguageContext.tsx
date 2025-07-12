'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',

    // Hero Section
    'hero.greeting': 'Halo, saya',
    'hero.role.technical': 'Technical Support Engineer',
    'hero.role.devops': 'DevOps Engineer',
    'hero.role.network': 'Network Administrator',
    'hero.role.system': 'System Administrator',
    'hero.description': 'Profesional Technical Support dengan pengalaman 3+ tahun di bidang administrasi server, manajemen jaringan, dan praktik DevOps. Spesialisasi dalam server Windows/Linux, manajemen hosting, dan otomatisasi infrastruktur.',
    'hero.viewWork': 'Lihat Karya Saya',
    'hero.getInTouch': 'Hubungi Saya',
    'hero.techStack': 'Tech Stack yang Saya Kuasai',

    // About Section
    'about.title': 'Tentang',
    'about.subtitle': 'Saya',
    'about.description': 'Saya adalah profesional Technical Support yang berdedikasi dengan pengalaman lebih dari 3 tahun dalam administrasi server, manajemen jaringan, dan infrastruktur IT. Saat ini bekerja di PT QWORDS COMPANY INTERNATIONAL sebagai Staff Technical Support.',
    'about.expertise': 'Keahlian saya meliputi manajemen server Windows/Linux, layanan hosting, konfigurasi jaringan, dan saya sedang aktif mengembangkan keterampilan dalam praktik DevOps termasuk Docker, CI/CD pipelines, dan monitoring infrastruktur.',
    'about.quote': '"Saya percaya pada kekuatan teknologi untuk memecahkan masalah kompleks dan meningkatkan efisiensi sistem. Setiap hari, saya bekerja untuk memastikan infrastruktur IT yang stabil, aman, dan optimal sambil terus belajar dan beradaptasi dengan teknologi baru."',
    'about.stats.years': 'Tahun Pengalaman',
    'about.stats.companies': 'Perusahaan',
    'about.stats.certifications': 'Sertifikasi',
    'about.stats.technologies': 'Teknologi',
    'about.highlights.serverAdmin': 'Administrasi Server',
    'about.highlights.serverAdminDesc': 'Mengelola server Windows/Linux, optimasi VPS, dan infrastruktur hosting',
    'about.highlights.networkManagement': 'Manajemen Jaringan',
    'about.highlights.networkManagementDesc': 'Konfigurasi Mikrotik, Cisco, dan keamanan jaringan dengan tools monitoring',
    'about.highlights.technicalSupport': 'Technical Support',
    'about.highlights.technicalSupportDesc': 'Memberikan dukungan teknis ahli untuk hosting, email, dan layanan database',
    'about.highlights.devOps': 'DevOps Practices',
    'about.highlights.devOpsDesc': 'Implementasi Docker, script otomatisasi, dan konsep CI/CD pipeline',

    // Skills Section
    'skills.title': 'Keahlian',
    'skills.subtitle': 'Teknis',
    'skills.description': 'Keahlian dalam administrasi server, manajemen jaringan, dan praktik DevOps yang memastikan infrastruktur IT yang stabil, aman, dan efisien.',
    'skills.serverAdmin': 'Administrasi Server',
    'skills.networkManagement': 'Manajemen Jaringan',
    'skills.devOps': 'DevOps & Otomatisasi',
    'skills.monitoring': 'Monitoring & Keamanan',
    'skills.hosting': 'Hosting & Cloud',
    'skills.programming': 'Pemrograman & Tools',
    'skills.additionalTools': 'Tools & Teknologi Tambahan',
    'skills.certifications': 'Sertifikasi & Prestasi',

    // Experience Section
    'experience.title': 'Pengalaman',
    'experience.subtitle': 'Kerja',
    'experience.description': 'Perjalanan profesional saya dalam Technical Support dan manajemen infrastruktur IT, menunjukkan pertumbuhan dan keahlian dalam administrasi server dan manajemen jaringan.',
    'experience.achievements': 'Pencapaian Utama:',
    'experience.technologies': 'Teknologi yang Digunakan:',
    'experience.education': 'Pendidikan & Sertifikasi',
    'experience.educationTitle': '📚 Pendidikan',
    'experience.certificationsTitle': '🏆 Sertifikasi',
    'experience.jobDesc.qwords.1': 'Memberikan bantuan teknis terkait layanan hosting (website, email, database)',
    'experience.jobDesc.qwords.2': 'Monitoring server untuk memastikan performa optimal dan konfigurasi web server, PHP, SSL, dan DNS',
    'experience.jobDesc.qwords.3': 'Menangani keamanan hosting termasuk malware, spam, dan pengaturan firewall',
    'experience.jobDesc.qwords.4': 'Migrasi website/email/database ke server baru dengan minimal downtime',
    'experience.jobDesc.qwords.5': 'Manajemen VPS Windows & Linux (AlmaLinux, Ubuntu) dengan optimasi dan troubleshooting',
    'experience.jobDesc.qwords.6': 'Monitoring jaringan untuk mencegah gangguan dan serangan DDoS',
    'experience.jobDesc.stmik.1': 'Membantu mahasiswa, dosen, dan staff dalam permasalahan hardware/software',
    'experience.jobDesc.stmik.2': 'Pemeliharaan rutin komputer dan update software untuk ketersediaan perangkat optimal',
    'experience.jobDesc.stmik.3': 'Administrasi jaringan lokal (LAN) dengan pengelolaan dan pemeliharaan koneksi jaringan',
    'experience.jobDesc.stmik.4': 'Troubleshooting hardware dan software untuk memastikan sistem berjalan lancar',

    // Projects Section
    'projects.title': 'Proyek',
    'projects.subtitle': 'Unggulan',
    'projects.description': 'Pameran proyek technical support dan infrastruktur saya yang menunjukkan keahlian dalam administrasi server, manajemen jaringan, dan praktik DevOps.',
    'projects.viewMore': 'Ingin Melihat Lebih Banyak?',
    'projects.viewMoreDesc': 'Saya terus bekerja pada proyek infrastruktur baru dan meningkatkan sistem yang ada. Mari diskusikan bagaimana saya dapat membantu dengan kebutuhan infrastruktur IT dan technical support Anda.',
    'projects.workTogether': 'Mari Bekerja Bersama',
    'projects.necoSiakad': 'Sistem akademik komprehensif untuk universitas yang dibangun dengan Laravel. Fitur meliputi manajemen mahasiswa, pendaftaran mata kuliah, pelacakan nilai, dan tools administratif.',
    'projects.hostingInfra': 'Mengelola dan mengoptimalkan infrastruktur hosting untuk PT QWORDS, termasuk monitoring server, implementasi keamanan, dan dukungan pelanggan untuk layanan web hosting.',
    'projects.networkSecurity': 'Mengimplementasikan langkah-langkah keamanan jaringan komprehensif termasuk konfigurasi firewall, perlindungan DDoS, deteksi malware, dan sistem monitoring keamanan.',
    'projects.vpsManagement': 'Mengelola dan mengoptimalkan lingkungan VPS untuk pelanggan, termasuk konfigurasi server AlmaLinux, Ubuntu, tuning performa, dan troubleshooting.',
    'projects.automationScripts': 'Mengembangkan script otomatisasi untuk pemeliharaan server, proses backup, dan monitoring sistem menggunakan Bash dan Python untuk meningkatkan efisiensi operasional.',
    'projects.labNetwork': 'Mengelola infrastruktur jaringan laboratorium komputer di STMIK IKMI Cirebon, termasuk pemeliharaan hardware, update software, dan troubleshooting jaringan.',
    'projects.details': 'Detail',
    'projects.viewDetails': 'Lihat Detail',

    // Contact Section
    'contact.title': 'Kontak',
    'contact.subtitle': 'Saya',
    'contact.description': 'Mari terhubung! Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kolaborasi, atau hanya sekedar menyapa.',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan',
    'contact.form.send': 'Kirim Pesan',
    'contact.form.sending': 'Mengirim...',
    'contact.form.success': 'Pesan berhasil dikirim!',
    'contact.form.error': 'Terjadi kesalahan. Silakan coba lagi.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.location': 'Lokasi',
    'contact.info.website': 'Website',
    'contact.info.github': 'GitHub',
    'contact.info.linkedin': 'LinkedIn',
    'contact.getInTouch': 'Hubungi Saya',
    'contact.letsConnect': 'Mari Terhubung',
    'contact.letsConnectDesc': 'Saya selalu tertarik dengan peluang baru dan kolaborasi. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk menghubungi saya!',
    'contact.location': 'Jakarta Selatan, Indonesia',
    'contact.sendMessage': 'Kirim Pesan',

    // Footer
    'footer.copyright': '© 2024 Muhamad Jaya Kusuma. Semua hak dilindungi.',
    'footer.madeWith': 'Dibuat dengan ❤️ menggunakan Next.js'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.role.technical': 'Technical Support Engineer',
    'hero.role.devops': 'DevOps Engineer',
    'hero.role.network': 'Network Administrator',
    'hero.role.system': 'System Administrator',
    'hero.description': 'Technical Support professional with 3+ years experience in server administration, network management, and DevOps practices. Specializing in Windows/Linux servers, hosting management, and infrastructure automation.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.techStack': 'Tech Stack I Work With',

    // About Section
    'about.title': 'About',
    'about.subtitle': 'Me',
    'about.description': 'I\'m a dedicated Technical Support professional with over 3 years of experience in server administration, network management, and IT infrastructure. Currently working at PT QWORDS COMPANY INTERNATIONAL as Staff Technical Support.',
    'about.expertise': 'My expertise includes Windows/Linux server management, hosting services, network configuration, and I\'m actively developing skills in DevOps practices including Docker, CI/CD pipelines, and infrastructure monitoring.',
    'about.quote': '"I believe in the power of technology to solve complex problems and improve system efficiency. Every day, I work to ensure stable, secure, and optimized IT infrastructure while continuously learning and adapting to new technologies."',
    'about.stats.years': 'Years Experience',
    'about.stats.companies': 'Companies Worked',
    'about.stats.certifications': 'Certifications',
    'about.stats.technologies': 'Technologies',
    'about.highlights.serverAdmin': 'Server Administration',
    'about.highlights.serverAdminDesc': 'Managing Windows/Linux servers, VPS optimization, and hosting infrastructure',
    'about.highlights.networkManagement': 'Network Management',
    'about.highlights.networkManagementDesc': 'Configuring Mikrotik, Cisco, and network security with monitoring tools',
    'about.highlights.technicalSupport': 'Technical Support',
    'about.highlights.technicalSupportDesc': 'Providing expert technical support for hosting, email, and database services',
    'about.highlights.devOps': 'DevOps Practices',
    'about.highlights.devOpsDesc': 'Implementing Docker, automation scripts, and CI/CD pipeline concepts',

    // Skills Section
    'skills.title': 'Technical',
    'skills.subtitle': 'Skills',
    'skills.description': 'Expertise in server administration, network management, and DevOps practices that ensure stable, secure, and efficient IT infrastructure.',
    'skills.serverAdmin': 'Server Administration',
    'skills.networkManagement': 'Network Management',
    'skills.devOps': 'DevOps & Automation',
    'skills.monitoring': 'Monitoring & Security',
    'skills.hosting': 'Hosting & Cloud',
    'skills.programming': 'Programming & Tools',
    'skills.additionalTools': 'Additional Tools & Technologies',
    'skills.certifications': 'Certifications & Achievements',

    // Experience Section
    'experience.title': 'Work',
    'experience.subtitle': 'Experience',
    'experience.description': 'My professional journey in Technical Support and IT infrastructure management, demonstrating growth and expertise in server administration and network management.',
    'experience.achievements': 'Key Achievements:',
    'experience.technologies': 'Technologies Used:',
    'experience.education': 'Education & Certifications',
    'experience.educationTitle': '📚 Education',
    'experience.certificationsTitle': '🏆 Certifications',
    'experience.jobDesc.qwords.1': 'Provide technical assistance related to hosting services (website, email, database)',
    'experience.jobDesc.qwords.2': 'Monitor servers to ensure optimal performance and configure web servers, PHP, SSL, and DNS',
    'experience.jobDesc.qwords.3': 'Handle hosting security including malware, spam, and firewall settings',
    'experience.jobDesc.qwords.4': 'Migrate websites/emails/databases to new servers with minimal downtime',
    'experience.jobDesc.qwords.5': 'Manage Windows & Linux VPS (AlmaLinux, Ubuntu) with optimization and troubleshooting',
    'experience.jobDesc.qwords.6': 'Monitor networks to prevent disruptions and DDoS attacks',
    'experience.jobDesc.stmik.1': 'Assist students, lecturers, and staff with hardware/software issues',
    'experience.jobDesc.stmik.2': 'Routine computer maintenance and software updates for optimal device availability',
    'experience.jobDesc.stmik.3': 'Local network (LAN) administration with network connection management and maintenance',
    'experience.jobDesc.stmik.4': 'Hardware and software troubleshooting to ensure smooth system operation',

    // Projects Section
    'projects.title': 'Featured',
    'projects.subtitle': 'Projects',
    'projects.description': 'A showcase of my technical support and infrastructure projects that demonstrate expertise in server administration, network management, and DevOps practices.',
    'projects.viewMore': 'Want to See More?',
    'projects.viewMoreDesc': 'I\'m constantly working on new infrastructure projects and improving existing systems. Let\'s discuss how I can help with your IT infrastructure and technical support needs.',
    'projects.workTogether': 'Let\'s Work Together',
    'projects.necoSiakad': 'A comprehensive academic management system for universities built with Laravel. Features include student management, course registration, grade tracking, and administrative tools.',
    'projects.hostingInfra': 'Managed and optimized hosting infrastructure for PT QWORDS, including server monitoring, security implementation, and customer support for web hosting services.',
    'projects.networkSecurity': 'Implemented comprehensive network security measures including firewall configuration, DDoS protection, malware detection, and security monitoring systems.',
    'projects.vpsManagement': 'Managed and optimized VPS environments for customers, including AlmaLinux, Ubuntu server configurations, performance tuning, and troubleshooting.',
    'projects.automationScripts': 'Developed automation scripts for server maintenance, backup processes, and system monitoring using Bash and Python to improve operational efficiency.',
    'projects.labNetwork': 'Managed computer laboratory network infrastructure at STMIK IKMI Cirebon, including hardware maintenance, software updates, and network troubleshooting.',
    'projects.details': 'Details',
    'projects.viewDetails': 'View Details',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Me',
    'contact.description': 'Let\'s connect! I\'m always open to discussing new projects, collaboration opportunities, or just saying hello.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'An error occurred. Please try again.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.website': 'Website',
    'contact.info.github': 'GitHub',
    'contact.info.linkedin': 'LinkedIn',
    'contact.getInTouch': 'Get In Touch',
    'contact.letsConnect': 'Let\'s Connect',
    'contact.letsConnectDesc': 'I\'m always interested in new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!',
    'contact.location': 'South Jakarta, Indonesia',
    'contact.sendMessage': 'Send Message',

    // Footer
    'footer.copyright': '© 2024 Muhamad Jaya Kusuma. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ using Next.js'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with default 'id' to match server-side rendering
  const [language, setLanguage] = useState<Language>('id')
  const [isClient, setIsClient] = useState(false)

  // Load language from localStorage after hydration
  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Update localStorage whenever language changes (only after hydration)
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    if (isClient) {
      localStorage.setItem('preferred-language', lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 