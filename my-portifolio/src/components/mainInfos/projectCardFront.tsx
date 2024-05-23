import { Project } from "@/types/devTypes"
import Image from 'next/image'

type IProps = {
    project: Project
}

export default function ProjectCardFront({ project }: IProps) {

    return (
        <>
            <div className="bg-not-white/5 w-full h-64 rounded-xl">
                <Image
                    key={project.name}
                    src={project.image}
                    width={20}
                    height={20}
                    alt={`${project.name} photo`}
                />
            </div>

            <h3 className="font-[realce] tracking-wider text-2xl mt-4">{project.name.toUpperCase()}</h3>
            <h4 className="font-[realce] tracking-wider text-lg">{project.stack}</h4>
        </>
    )
}
