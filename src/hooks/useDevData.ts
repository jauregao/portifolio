'use client'

import { pt, en } from '@/data/db'
import { useLanguage } from '@/components/lang/LanguageProvider'

export function useDevData() {
  const { lang } = useLanguage()
  return lang === 'pt' ? pt : en
}
