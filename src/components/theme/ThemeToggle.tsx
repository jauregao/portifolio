'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${isDark ? 'border-white/10 bg-not-white text-not-black shadow-black/20 hover:bg-not-white/95' : 'border-black/10 bg-not-black text-not-white shadow-black/10 hover:bg-not-black/95'}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-shiny-purple shadow-[0_0_0_4px_rgba(129,47,241,0.18)]" />
      <span className="font-realce text-sm tracking-[0.24em]">
        {theme === 'dark' ? 'ESCURO' : 'CLARO'}
      </span>
    </button>
  )
}