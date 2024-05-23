import { Project } from '@/types/devTypes'
import Link from 'next/link'
import Image from 'next/image'


type IProps = {
    project: Project
}

export default function ProjectCardBack({ project }: IProps) {

    return (
        <>
            <div key={project.name} className="w-full h-full rounded-xl flex flex-col items-center justify-between">
                <h3 className="font-[realce] tracking-wider text-2xl mt-4">{project.name.toUpperCase()}</h3>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1 justify-center font-[realce] tracking-wider text-md">
                                {
                                    project.techs.map(tech => (
                                        <li className="list-disc">{tech}</li>       
                                    ))
                                }
                    </ul>
                    <p className="text-sm text-center">
                        {project.description.split('.').map((sentence, index) => (
                            <span key={index}>
                                {sentence.trim()}
                                {index < project.description.split('.').length - 1 && '.'}
                                <br />
                            </span>
                        ))}
                    </p>

                <div className='flex gap-5 justify-center items-center mt-4 font-bold w-full'>
                    <Link
                        className='py-2 w-full bg-not-white/80 hover:bg-not-white text-dark-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer'
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.name}
                    >REPOSITÓRIO</Link>
                    {project.deploy.length === 0 ? (
                        <div
                            className="py-2 w-full bg-shiny-purple/80 rounded-lg text-sm text-center transition-all duration-300 cursor-not-allowed hover:opacity-50"
                            key={project.name}
                        >
                            DEPLOY
                        </div>
                    ) : (
                        <Link
                            className="py-2 w-full bg-shiny-purple/80 hover:bg-shiny-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer"
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.name}
                        >
                            DEPLOY
                        </Link>
                    )}
                </div>
            </div>
        </>
    )

}
