'use client'
import { useState } from 'react'
import ChangeMainInfos from '@/components/changeThings/ChangeMainInfos'
import MainInfos from '@/components/mainContent/MainInfos'
import Aside from '@/components/sideBarInfos/Aside'

export default function Page() {
  const [selectedInfo, setSelectedInfo] = useState<string>('user')

  const changeSelectedInfo = (info: string) => {
    setSelectedInfo(info)
  }

  return (
    <main className="bg-[url(/assets/background.svg)] w-[100svw] h-[100svh] p-10 flex justify-center gap-3">
      <div className="container grid grid-cols-14 grid-rows-12 items-center lg:gap-5">
        <Aside/>
        <MainInfos selectedInfo={selectedInfo} />
      </div>
      <ChangeMainInfos onSelectInfo={changeSelectedInfo} />
    </main>
  )
}
