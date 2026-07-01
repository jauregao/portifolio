'use client'

import { useLanguage } from './LanguageProvider'

export default function LangToggle() {
  const { lang, toggleLang } = useLanguage()
  const isPt = lang === 'pt'

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={`Switch to ${isPt ? 'English' : 'Portuguese'}`}
      className="group relative flex items-center rounded-full border border-white/10 bg-not-white/5 px-0.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
    >
      <div
        className={`absolute top-0.5 h-[calc(100%-4px)] w-[82px] rounded-full bg-shiny-purple shadow-[0_0_0_4px_rgba(129,47,241,0.18)] transition-all duration-300 ${isPt ? 'left-0.5' : 'left-[84px]'}`}
      />
      <span
        className={`relative z-10 w-[82px] py-2 text-center font-realce text-sm tracking-[0.18em] transition-all duration-300 ${isPt ? 'text-white' : 'text-not-white/50 group-hover:text-not-white/70'}`}
      >
        PT-BR
      </span>
      <span
        className={`relative z-10 w-[82px] py-2 text-center font-realce text-sm tracking-[0.18em] transition-all duration-300 ${isPt ? 'text-not-white/50 group-hover:text-not-white/70' : 'text-white'}`}
      >
        EN-US
      </span>
    </button>
  )
}
