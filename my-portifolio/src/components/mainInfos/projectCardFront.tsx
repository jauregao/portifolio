import { Project } from "@/types/devTypes"
import Image from 'next/image'

type IProps = {
    project: Project
}

export default function ProjectCardFront({ project }: IProps) {

    return (
        <>
            <div className="bg-not-white/5 w-max h-max rounded-xl">
                <Image
                    key={project.name}
                    src={project.image}
                    width={300}
                    height={300}
                    alt={`${project.name} photo`}
                    className="rounded-xl"
                />
            </div>

            <h3 className="font-[realce] tracking-wider text-2xl mt-7 text-center mb-3">{project.name.toUpperCase()}</h3>
                <div>
                    <p className="mt-5 mb-3 text-center text-xl font-[realce] tracking-wider">Tecnologias utilizadas</p>
                        <ul className="flex flex-wrap gap-x-5 gap-y-1 justify-center text-[13px]">
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
