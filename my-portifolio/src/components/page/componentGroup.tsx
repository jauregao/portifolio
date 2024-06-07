'use client'
import { useState } from 'react'
import ChangeMainInfos from '@/components/changeThings/ChangeMainInfos'
import MainInfos from '@/components/mainContent/MainInfos'
import Aside from '@/components/sideBarInfos/Aside'

export default function ComponentGroup() {
  const [selectedInfo, setSelectedInfo] = useState<string>('user')

  const changeSelectedInfo = (info: string) => {
    setSelectedInfo(info)
  }

  return (
      <div className="container grid grid-cols-14 grid-rows-12 items-center lg:gap-5 gap-2 z-10">
        <Aside/>
        <MainInfos selectedInfo={selectedInfo} />
        <ChangeMainInfos onSelectInfo={changeSelectedInfo} />
      </div>
  )
}
