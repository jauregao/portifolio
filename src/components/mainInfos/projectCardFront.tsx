'use client'

import { Project } from "@/types/devTypes"
import Image from 'next/image'
import { useDevData } from '@/hooks/useDevData'

type IProps = {
    project: Project
}

export default function ProjectCardFront({ project }: IProps) {
    const data = useDevData()

    return (
        <>
            <div className="bg-not-white/5 lg:w-max sm:w-60 w-full rounded-xl overflow-hidden h-48 sm:h-auto">
                <Image
                    key={project.repository}
                    src={project.path}
                    width={250}
                    height={250}
                    alt={`${project.name} photo`}
                    className="w-full h-full object-cover sm:h-auto sm:w-auto"
                />
            </div>

            <h3 className="font-realce tracking-wider lg:text-2xl text-lg mt-7 text-center mb-3">{project.name.toUpperCase()}</h3>
            <div>
                <p className="mt-2 mb-3 text-center lg:text-xl text-md font-realce tracking-wider">{data.ui.techUsed}</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 justify-center text-[13px] pl-0 ml-0 list-inside">
                    {
                        project.techs.map(tech => (
                            <li key={tech} className="list-disc text-[12px]">{tech}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
