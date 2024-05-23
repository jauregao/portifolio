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
                    width={1000}
                    height={1000}
                    alt={`${project.name} photo`}
                    className="rounded-xl"
                />
            </div>

            <h3 className="font-[realce] tracking-wider text-2xl mt-7">{project.name.toUpperCase()}</h3>
            <span className="font-[realce] tracking-wider text-lg">{project.stack}</span>
                <div>
                    <p className="mt-5 mb-3 text-center text-xl">Tecnologias utilizadas</p>
                        <ul className="flex flex-wrap gap-x-8 gap-y-1 justify-center font-[realce] tracking-wider text-md">
                            {
                                project.techs.map(tech => (
                                    <li className="list-disc">{tech}</li>       
                                ))
                            }
                        </ul>
                </div>
        </>
    )
}
