'use client'

import Techs from '../mainContent/Techs'
import { useDevData } from '@/hooks/useDevData'

export default function AboutAndTechs() {
    const data = useDevData()

    return (
            <div className=' p-5 animate-fade-left animate-duration-500 animate-ease-in'>
                <div className="mb-8">
                    <div className="flex items-center gap-5 mb-5">
                        <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">{data.ui.aboutTitle}</h2>
                        <div className="xl:w-60 lg:w-40 sm:w-32 w-20 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                    <p className="text-sm flex-wrap">
                    {data.infos.about.split('/').map((sentence, index, array) => (
                        <span key={index}>
                            {sentence.trim()}
                            {index < array.length - 1 && <><br/> <br/></>}
                        </span>
                    ))}
                    </p> 
                </div>
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">{data.ui.hardSkills}</h2>
                        <div className="xl:w-60 lg:w-40 sm:w-28 w-20 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                        <Techs/>
                </div>
            </div>
    )
}



