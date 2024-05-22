'use client';
import { useState } from 'react';
import ProjectCardFront from './projectCardFront';
import ProjectCardBack from './projectCardBack';

export default function ProjectCard() {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseOver = () => {
        setTimeout(() => {setIsHovered(true)}, 100)
    }

    const handleMouseLeave = () => {
        setTimeout(() => {setIsHovered(false)}, 100)
    }

    return (
        <section
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className='w-80 h-80'
        >
        <div className={`bg-not-white/10 w-80 h-80 rounded-xl flex flex-col items-center p-7transform-style: preserve-3d p-7 rotate-y-180 ${isHovered ? 'animate-rotate-y-180' : ''}`}>
            {isHovered ? <ProjectCardBack /> : <ProjectCardFront />}
        </div>
        </section>
    );
}
