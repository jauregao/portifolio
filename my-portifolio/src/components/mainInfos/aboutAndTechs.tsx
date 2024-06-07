'use client'
import { useState, useEffect} from 'react'
import Techs from '../mainContent/Techs'
import { pt } from '@/data/db'

export default function AboutAndTechs() {

    const [aboutMe, setAboutMe] = useState('')

    useEffect(() => {
        const about = pt.infos.about
        setAboutMe(about)
    }, [])

    return (
            <div className='lg:p-10 p-5 animate-fade-left animate-duration-500 animate-ease-in overflow-y-scroll'>
                <div className="mb-8">
                    <div className="flex items-center gap-5 mb-5">
                        <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">Sobre Mim</h2>
                        <div className="xl:w-60 lg:w-40 w-32 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                    <p className="text-sm flex-wrap">
                    {aboutMe.split('/').map((sentence, index, array) => (
                        <span key={index}>
                            {sentence.trim()}
                            {index < array.length - 1 && <><br/> <br/></>}
                        </span>
                    ))}
                    </p> 
                </div>
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">Hard Skills</h2>
                        <div className="xl:w-60 lg:w-40 w-28 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                        <Techs/>
                </div>
            </div>
    )
}



