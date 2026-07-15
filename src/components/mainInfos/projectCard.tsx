'use client'

import { useState } from 'react'
import ProjectCardFront from './projectCardFront'
import ProjectCardBack from './projectCardBack'
import { Project } from '@/types/devTypes'
import { useDevData } from '@/hooks/useDevData'

export default function ProjectCard() {
    const data = useDevData()
    const [projects] = useState<Project[]>(data.projects)

    return (
        <div className='lg:w-full grid xl:grid-cols-2 grid-cols-1 gap-5 gap-y-5 justify-items-center animate-fade-up animate-duration-[800ms] animate-ease-in object-center'>
            {projects.map(project => (
                <ProjectCardItem key={project.repository} project={project} />
            ))}
        </div>
    )
}

interface ProjectCardItemProps {
    project: Project
}

function ProjectCardItem({ project }: ProjectCardItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseOver = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <section
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className='xl:w-full lg:w-[24rem] h-full sm:w-[320px] w-full '
        >
            <div className={`bg-not-white/10 xl:w-full lg:w-[24rem] sm:w-[320px] w-full h-full rounded-xl flex flex-col items-center p-7transform-style: preserve-3d p-4 sm:p-7 rotate-y-180 ${isHovered ? 'animate-rotate-y-180' : ''}`}>
                {isHovered ? <ProjectCardBack project={project} /> : <ProjectCardFront project={project} />}
            </div>
        </section>
    )
}
