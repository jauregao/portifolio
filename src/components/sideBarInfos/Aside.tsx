import Contact from './Contact';
import Link from 'next/link';
import Image from 'next/image';
import Picture from './Picture';
import { pt } from '@/data/db';

export default function Aside() {
    return (
        <aside className="portfolio-aside lg:w-full sm:h-full h-fit w-full flex flex-col self-start items-center sm:col-start-1 sm:col-end-3 lg:col-end-3 col-start-1 col-end-15 sm:row-span-12 row-start-1 row-end-3 animate-fade-right animate-duration-300 animate-ease-in">
            <div className="relative w-full flex justify-center">
                <Picture />
            </div>
            <section className="mt-[-5rem] lg:px-6 px-4 pt-32 pb-10 flex flex-col items-center lg:justify-between justify-evenly w-full bg-not-black rounded-xl gap-6">
                <div>
                    <h1 className="text-center font-realce lg:text-5xl text-3xl lg:mt-24 mt-16">Amanda Oliveira</h1>
                    <h2 className="text-center font-semibold lg:text-xl text-lg">Desenvolvedora BackEnd</h2>
                </div>
                <div className="flex gap-5">
                    {pt.social.map((redeSocial) => (
                        <Link
                            href={redeSocial.link}
                            target="blank"
                            rel="noopener noreferrer"
                            key={redeSocial.name}>
                            <Image
                                className="theme-icon rounded-lg bg-not-white/10 p-2 hover:bg-not-white/20 hover:opacity-80 transition-all duration-200"
                                src={redeSocial.icon}
                                width={38}
                                height={38}
                                alt={`${redeSocial.name} logo`}
                            />
                        </Link>
                    ))}
                </div>

                <Contact />

                <div className="flex items-center justify-center bg-shiny-purple py-2 px-5 gap-4 rounded-lg font-realce tracking-wider lg:text-lg text-md transition-all duration-300 cursor-pointer hover:bg-shiny-purple/80">
                    <Link className="text-white" href={pt.resume} target="blank" rel="noopener noreferrer">Download CV</Link>
                    <img className="theme-icon w-7 h-6" src="/assets/download.svg" alt="download icone" />
                </div>
            </section>
        </aside>
    )
};
