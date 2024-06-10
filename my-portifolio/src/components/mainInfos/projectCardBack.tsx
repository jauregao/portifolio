import { Project } from '@/types/devTypes'
import Link from 'next/link'

type IProps = {
    project: Project
}

export default function ProjectCardBack({ project }: IProps) {

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
                        className='py-2 w-full bg-not-white/80 hover:bg-not-white text-dark-purple rounded-lg sm:text-[12px] text-[10px] text-center transition-all duration-300 cursor-pointer'
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.repository}
                    >REPOSITÓRIO</Link>
                    {project.deploy.length === 0 ? (
                        <div
                            className="py-2 w-full bg-shiny-purple/80 rounded-lg sm:text-[12px] text-[10px] text-center transition-all duration-300 cursor-not-allowed hover:opacity-50"
                            key={project.deploy}
                        >
                            DEPLOY
                        </div>
                    ) : (
                        <Link
                            className="py-2 w-full bg-shiny-purple/80 hover:bg-shiny-purple rounded-lg sm:text-[12px] text-[10px] text-center transition-all duration-300 cursor-pointer"
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.deploy}
                        >
                            DEPLOY
                        </Link>
                    )}
                </div>
            </div>
        </>
    )

}
