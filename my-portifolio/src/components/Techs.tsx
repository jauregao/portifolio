import { DevData } from '@/types/devTypes'
import Image from 'next/image'

export default function Techs({ data }: { data: DevData }) {
    const techs: Record<string, string> = data.infos.techIcon

    return (
        <div className='grid grid-cols-9 gap-y-5'>
            {
                Object.entries(techs).map(([techName, imageUrl], index) => (
                    <Image
                        key={index}
                        src={imageUrl}
                        width={70}
                        height={70}
                        alt={`${techName} icon`}
                    />
                ))
            }
        </div>
    )
}
