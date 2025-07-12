'use client'

import { useState, useEffect, useMemo, useReducer, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import '@/app/global.css'

// Lazy load Projects component for better performance
const Projects = lazy(() => import('./components/Projects'))

// useReducer untuk analytics state management
interface AnalyticsState {
  pageViews: number
  timeSpent: number
  interactions: number
}

type AnalyticsAction = 
  | { type: 'INCREMENT_PAGEVIEWS' }
  | { type: 'UPDATE_TIME_SPENT'; payload: number }
  | { type: 'INCREMENT_INTERACTIONS' }

const analyticsReducer = (state: AnalyticsState, action: AnalyticsAction): AnalyticsState => {
  switch (action.type) {
    case 'INCREMENT_PAGEVIEWS':
      return { ...state, pageViews: state.pageViews + 1 }
    case 'UPDATE_TIME_SPENT':
      return { ...state, timeSpent: action.payload }
    case 'INCREMENT_INTERACTIONS':
      return { ...state, interactions: state.interactions + 1 }
    default:
      return state
  }
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  // useReducer untuk analytics tracking
  const [analyticsState, analyticsDispatch] = useReducer(analyticsReducer, {
    pageViews: 0,
    timeSpent: 0,
    interactions: 0
  })

  // LocalStorage implementation untuk theme preference
  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Analytics tracking
  useEffect(() => {
    analyticsDispatch({ type: 'INCREMENT_PAGEVIEWS' })
    
    const startTime = Date.now()
    const interval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      analyticsDispatch({ type: 'UPDATE_TIME_SPENT', payload: timeSpent })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // useMemo untuk optimasi theme classes
  const themeClasses = useMemo(() => ({
    main: `min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`,
    analytics: isDarkMode ? 'text-gray-400' : 'text-gray-600'
  }), [isDarkMode])

  // Handler untuk interaction tracking
  const handleInteraction = () => {
    analyticsDispatch({ type: 'INCREMENT_INTERACTIONS' })
  }

  return (
    <main className={themeClasses.main} onClick={handleInteraction}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Suspense fallback={
        <div className={`flex justify-center items-center py-20 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3">Loading Projects...</span>
        </div>
      }>
        <Projects isDarkMode={isDarkMode} />
      </Suspense>
      <Contact isDarkMode={isDarkMode} />
      
      {/* Analytics Debug Info (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className={`fixed bottom-4 right-4 p-2 rounded bg-black/20 text-xs ${themeClasses.analytics}`}>
          Views: {analyticsState.pageViews} | Time: {analyticsState.timeSpent}s | Clicks: {analyticsState.interactions}
        </div>
      )}
    </main>
  )
} 