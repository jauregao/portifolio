import { DevData } from '@/types/devTypes'
import Image from 'next/image'

export default function Techs(props: DevData){
    
    const techs: { [key: string]: string } = props.infos.techIcon

    return (
        <div className='grid grid-cols-7'>
            {
                Object.keys(techs).map((techName, index) => (
                    <Image
                        key={index}
                        src={techs[techName]}
                        width={40}
                        height={40}
                        alt={`${techName} icon`}
                    />
                ))
            }
        </div>
    )
}
