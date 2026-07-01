'use client'

import Image from 'next/image'
import { useDevData } from '@/hooks/useDevData'

export default function Techs() {
    const data = useDevData()

    return (
        <div className='grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3'>
            {
                data.infos.techIcons.map((tech, index) => (
                    <div className='flex flex-col items-center' key={index}>
                    <Image
                        src={tech.path}
                        width={48}
                        height={48}
                        alt={`${tech.name} icon`}
                        className='sm:w-12 sm:h-12 w-[42px] h-[42px]'
                    />
                    <p className='pt-1 text-[12px] text-not-white/70'>{tech.name}</p>

                    </div>
                ))
            }
        </div>
    )
}
