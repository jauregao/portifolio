'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'pt' | 'en'

type LangContextValue = {
  lang: Lang
  toggleLang: () => void
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = 'portfolio-lang'

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (stored === 'pt' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(() => {
    return {
      lang,
      toggleLang: () => setLangState((current) => (current === 'pt' ? 'en' : 'pt')),
      setLang: (nextLang: Lang) => setLangState(nextLang),
    }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLanguage() {
  const context = useContext(LangContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
