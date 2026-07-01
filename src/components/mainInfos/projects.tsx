'use client'

import ProjectCard from "./projectCard";
import { useDevData } from '@/hooks/useDevData'

export default function Projects() {
    const data = useDevData()

    return(
        <div className="w-full p-5 animate-fade-left animate-duration-500 animate-ease-in">
            <div className="flex items-center gap-5 mb-8 justify-start">
                <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">{data.ui.projects}</h2>
                <div className="xl:w-60 lg:w-40 sm:w-32 w-20 h-1 rounded-sm bg-shiny-purple"></div>
            </div>

            <ProjectCard/>
        </div>
    )

}