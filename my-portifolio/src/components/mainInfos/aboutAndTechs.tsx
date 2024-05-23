'use client'
import { useState, useEffect} from 'react'
import { DevData, Infos } from '@/types/devTypes'
import getData from '@/services/getData'
import Techs from '../mainContent/Techs'

export default function AboutAndTechs() {

    const [info, setInfo] = useState<Infos>()

    useEffect(() => {
        (async () => {        
            try {
                const response: DevData = await getData()
                const data = response.infos as Infos
                setInfo(data)
            } catch (error) {
                console.error(error)    
            }
        })()
    }, [])

    return (
            <div className='p-10 animate-fade-left animate-duration-500 animate-ease-in'>
                <div className="mb-8">
                    <div className="flex items-center gap-5 mb-5">
                        <h2 className="font-[realce] lg:text-5xl text-4xl">Sobre Mim</h2>
                        <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                    <p className="text-sm flex-wrap">
                    {(info?.about ?? '').split('/').map((sentence, index, array) => (
                        <span key={index}>
                            {sentence.trim()}
                            {index < array.length - 1 && <><br/> <br/></>}
                        </span>
                    ))}
                    </p> 
                </div>
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <h2 className="font-[realce] lg:text-5xl text-4xl">Hard Skills</h2>
                        <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                        <Techs/>
                </div>
            </div>
    )
}



