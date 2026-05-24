import { Project } from "@/types/devTypes"
import Image from 'next/image'

type IProps = {
    project: Project
}

export default function ProjectCardFront({ project }: IProps) {

    return (
        <>
            <div className="bg-not-white/5 lg:w-max h-max sm:w-60 w-auto rounded-xl">
                <Image
                    key={project.repository}
                    src={project.path}
                    width={250}
                    height={250}
                    alt={`${project.name} photo`}
                    className="rounded-xl w-[350px] h-auto sm:w-auto sm:h-auto"
                />
            </div>

            <h3 className="font-realce tracking-wider lg:text-2xl text-lg mt-7 text-center mb-3">{project.name.toUpperCase()}</h3>
            <div>
                <p className="mt-2 mb-3 text-center lg:text-xl text-md font-realce tracking-wider">Tecnologias utilizadas</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 justify-center text-[13px]">
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
