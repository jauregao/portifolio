'use client'

import { Project } from '@/types/devTypes'
import Link from 'next/link'
import { useDevData } from '@/hooks/useDevData'

type IProps = {
    project: Project
}

export default function ProjectCardBack({ project }: IProps) {
    const data = useDevData()

    return (
        <>
            <div className="w-full h-full rounded-xl flex flex-col items-center justify-between">
                <h3 className="font-realce tracking-wider lg:text-2xl text-lg mt-4 text-center mb-3">{project.name.toUpperCase()}</h3>
                <p className="text-[12px] text-center">
                    {project.description.split('.').map((sentence, index) => (
                        <span key={index}>
                            {sentence.trim()}
                            {index < project.description.split('.').length - 1 && '.'}
                            <br />
                        </span>
                    ))}
                </p>

                <div className='flex gap-2 justify-center items-center mt-4 font-bold w-full'>
                    <Link
                        className={`w-full rounded-lg px-5 py-2 text-center  tracking-wider sm:text-[12px] text-[10px] transition-all duration-300 ${project.repository
                            ? 'bg-shiny-purple text-white hover:bg-shiny-purple/80 cursor-pointer'
                            : 'bg-shiny-purple/50 text-white/60 cursor-not-allowed'
                            }`}
                        href={project.repository || '#'}
                        target={project.repository ? '_blank' : ''}
                        rel={project.repository ? 'noopener noreferrer' : ''}
                        key={project.repository}
                        tabIndex={project.repository ? 0 : -1}
                    >
                        {data.ui.repository}
                    </Link>
                    <Link
                        className={`w-full rounded-lg px-5 py-2 text-center  tracking-wider sm:text-[12px] text-[10px] transition-all duration-300 ${project.deploy
                            ? 'bg-shiny-purple text-white hover:bg-shiny-purple/80 cursor-pointer'
                            : 'bg-shiny-purple/50 text-white/60 cursor-not-allowed'
                            }`}
                        href={project.deploy || '#'}
                        target={project.deploy ? '_blank' : ''}
                        rel={project.deploy ? 'noopener noreferrer' : ''}
                        key={project.deploy}
                        tabIndex={project.deploy ? 0 : -1}
                    >
                        {data.ui.deploy}
                    </Link>
                </div>
            </div>
        </>
    )

}
