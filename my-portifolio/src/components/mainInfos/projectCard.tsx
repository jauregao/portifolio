import { useEffect, useState } from 'react'
import ProjectCardFront from './projectCardFront'
import ProjectCardBack from './projectCardBack'
import { Project } from '@/types/devTypes'
import { pt } from '@/data/db'

export default function ProjectCard() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const data = pt.projects
        setProjects(data)
    }, [])

    return (
        <div className='lg:w-full w-60 grid xl:grid-cols-2 grid-cols-1 gap-5 gap-y-5 justify-items-center animate-fade-up animate-duration-[800ms] animate-ease-in object-center'>
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
            className='xl:w-full lg:w-[24rem] h-full w-60 '
        >
            <div className={`bg-not-white/10 xl:w-full lg:w-[24rem] w-[320px] h-full rounded-xl flex flex-col items-center p-7transform-style: preserve-3d p-7 rotate-y-180 ${isHovered ? 'animate-rotate-y-180' : ''}`}>
                {isHovered ? <ProjectCardBack project={project} /> : <ProjectCardFront project={project} />}
            </div>
        </section>
    )
}
