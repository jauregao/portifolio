import { Project } from '@/types/devTypes'
import Link from 'next/link'
import Image from 'next/image'


type IProps = {
    project: Project
}

export default function ProjectCardBack({ project }: IProps) {

    return (
        <>
            <div key={project.name}>
                <h3 className="font-[realce] tracking-wider text-2xl mt-4">{project.name.toUpperCase()}</h3>
                <div className="font-[realce] tracking-wider text-lg">
                    {
                        project.techs.map(tech => (
                            <Image
                                key={tech.name}
                                src={tech.link}
                                width={20}
                                height={20}
                                alt={`${tech.name} icon`}
                            />
                        ))
                    }
                </div>
                <p className="text-sm">{project.description}</p>

                <div className='flex gap-5 justify-center items-center mt-4 font-bold w-full'>
                    <Link
                        className='py-2 w-full bg-not-white/80 hover:bg-not-white text-dark-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer'
                        href={project.repository}
                        target="blank"
                        rel="noopener noreferrer"
                        key={project.name}
                    >REPOSITÓRIO</Link>
                    <Link
                        className='py-2 w-full bg-shiny-purple/80 hover:bg-shiny-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer'
                        href={project.deploy}
                        target="blank"
                        rel="noopener noreferrer"
                        key={project.name}
                    >DEPLOY</Link>
                </div>
            </div>
        </>
    )

}
