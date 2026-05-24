import Image from 'next/image'
import { pt } from '@/data/db'

export default function Techs() {
    return (
        <div className='grid xl:grid-cols-8 lg:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-y-5'>
            {
                pt.infos.techIcons.map((tech, index) => (
                    <div className='flex flex-col items-center' key={index}>
                    <Image
                        src={tech.path}
                        width={70}
                        height={70}
                        alt={`${tech.name} icon`}
                        className='sm:w-16 sm:h-16 w-[58px] h-[58px]'
                    />
                    <p className='pt-1 text-[12px] text-not-white/70'>{tech.name}</p>

                    </div>
                ))
            }
        </div>
    )
}
