import { useEffect, useState } from 'react';
import ProjectCardFront from './projectCardFront';
import ProjectCardBack from './projectCardBack';
import { DevData, Project } from '@/types/devTypes';
import getData from '@/services/getData';

export default function ProjectCard() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        (async () => {        
            try {
                const response: DevData = await getData();
                const data = response.projects as Project[];
                setProjects(data);
            } catch (error) {
                console.error(error);    
            }
        })();
    }, []);

    return (
        <div className='w-full grid grid-cols-2 gap-8'>
            {projects.map(project => (
                <ProjectCardItem key={project.name} project={project} />
            ))}
        </div>
    );
}

interface ProjectCardItemProps {
    project: Project;
}

function ProjectCardItem({ project }: ProjectCardItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <section
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className='w-[28rem] h-[35rem]'
        >
            <div className={`bg-not-white/10 w-[28rem] h-[35rem] rounded-xl flex flex-col items-center p-7transform-style: preserve-3d p-7 rotate-y-180 ${isHovered ? 'animate-rotate-y-180' : ''}`}>
                {isHovered ? <ProjectCardBack project={project} /> : <ProjectCardFront project={project} />}
            </div>
        </section>
    );
}
