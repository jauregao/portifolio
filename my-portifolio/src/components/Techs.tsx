'use client'
import getData from '@/services/getData'
import { DevData, TechIcons } from '@/types/devTypes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Techs() {

const [techIcons, setTechIcons] = useState<TechIcons[]>([])

    useEffect(() => {
        (async () => {        
                try {
                    const response: DevData = await getData()
                    const data = response.infos.techIcons as TechIcons[]
                    setTechIcons(data)
                } catch (error) {
                    console.error(error)    
                }
            }
        )()
    }, [])

    return (
        <div className='grid xl:grid-cols-8 lg:grid-cols-6 grid-cols-4 gap-y-5'>
            {
                techIcons.map(tech => (
                    <div className='flex flex-col items-center'>
                    <Image
                        key={tech.name}
                        src={tech.link}
                        width={70}
                        height={70}
                        alt={`${tech.name} icon`}
                    />
                    <p className='pt-1 text-[12px] text-not-white/70'>{tech.name}</p>

                    </div>
                ))
            }
        </div>
    )
}
