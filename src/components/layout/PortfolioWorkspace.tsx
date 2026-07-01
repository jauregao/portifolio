'use client'

import { useState } from 'react'
import SectionSwitcher from '@/components/navigation/SectionSwitcher'
import MainInfos from '@/components/mainContent/MainInfos'
import Aside from '@/components/sideBarInfos/Aside'
import LangToggle from '@/components/lang/LangToggle'

type SelectedInfo = 'user' | 'case'

export default function PortfolioWorkspace() {
  const [selectedInfo, setSelectedInfo] = useState<SelectedInfo>('user')

  return (
    <div className="portfolio-workspace relative grid h-full min-h-0 w-full max-w-[1440px] grid-cols-14 items-start gap-x-4 gap-y-4 overflow-hidden z-10">
      <Aside />
      <MainInfos selectedInfo={selectedInfo} />
      <div className="absolute right-4 top-4 z-30 animate-fade-left animate-duration-300 animate-ease-in">
        <LangToggle />
      </div>
      <div className="portfolio-workspace-switcher-wrap col-start-13 col-end-15 row-start-2 self-start justify-self-end animate-fade-left animate-duration-300 animate-ease-in">
        <SectionSwitcher onSelectInfo={setSelectedInfo} />
      </div>
    </div>
  )
}