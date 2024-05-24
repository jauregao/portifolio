import { useEffect, useState } from 'react';
import Contact from './Contact';
import Link from 'next/link';
import Image from 'next/image';
import Picture from './Picture';
import { pt } from '@/data/db';

export default function Aside() {

    type Props = {
            name: string
            link: string
            icon: string
    };

    const [socialData, setSocialData] = useState<Props[]>([{
        name: '',
        link: '',
        icon: ''
    }]);

    const[resume, setResume] = useState('');

    useEffect(() => {
        const social = pt.social
            setSocialData(social)
        const resumeLink = pt.resume
            setResume(resumeLink)
    }, []);
    

    return (
        <aside className="lg:w-max h-full w-full flex flex-col self-start items-center col-start-1 col-end-3 row-span-12 animate-fade-right animate-duration-300 animate-ease-in">
            <Picture/>
        <section className="px-6 pt-16 pb-10 flex flex-col items-center lg:justify-between justify-start w-fit h-full bg-not-black lg:rounded-xl rounded-l-lg gap-6">
            <div>
            <h1 className="text-center font-realce text-5xl mt-24">Amanda Oliveira</h1>
            <h2 className="text-center font-semibold text-xl">Desenvolvedora BackEnd</h2>
            </div>
            <div className="flex gap-5">

                {socialData.map((redeSocial) => (
                        <Link
                            href={redeSocial.link} 
                            target="blank"
                            rel="noopener noreferrer"
                            key={redeSocial.name}>
                        <Image 
                            className="hover:opacity-80 transition-all duration-200"
                            src={redeSocial.icon}
                            width={30}
                            height={30}
                            alt={`${redeSocial.name} logo`} 
                        />
                        </Link>
                    ))}
            </div>

            <Contact/>

            <div className="flex bg-shiny-purple py-2 px-5 gap-4 rounded-lg font-realce tracking-wider text-lg transition-all duration-300 cursor-pointer hover:bg-shiny-purple/80">
                <Link href={resume} target="blank" rel="noopener noreferrer">Download CV</Link>
                <img className="w-7 h-6" src="/assets/download.svg" alt="download icone" />
            </div>
        </section>
        </aside>
    )
};
