'use client'
import { TechIcons } from '@/types/devTypes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { pt } from '@/data/db'

export default function Techs() {

const [techIcons, setTechIcons] = useState<TechIcons[]>([])

    useEffect(() => {
        const tech = pt.infos.techIcons as TechIcons[]
        setTechIcons(tech)
    }, [])

    return (
        <div className='grid xl:grid-cols-8 lg:grid-cols-5 grid-cols-3 gap-y-5'>
            {
                techIcons.map((tech, index) => (
                    <div className='flex flex-col items-center' key={index}>
                    <Image
                        src={tech.path}
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
