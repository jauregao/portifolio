import Contact from "./Contact"
import Link from 'next/link'

export default function Infos() {
    return (
        <section className="px-6 pt-16 pb-10 flex flex-col items-center justify-between w-[400px] h-full bg-not-black rounded-xl gap-6">
            <div>
            <h1 className="text-center font-[realce] text-5xl mt-24">Amanda Oliveira</h1>
            <h2 className="text-center font-semibold text-xl">Desenvolvedora FullStack</h2>
            </div>
            <div className="flex gap-5">
                <Link href="https://www.behance.net/amandaj" target="blank" rel="noopener noreferrer">
                    <img className="hover:opacity-80 transition-all duration-200" src="/assets/behance.svg" alt="behnce logo" />
                </Link>
                
                <Link href="https://github.com/jauregao" target="blank" rel="noopener noreferrer">
                    <img className="hover:opacity-80 transition-all duration-200" src="/assets/github.svg" alt="github logo" />
                </Link>
                
                <Link href="https://www.linkedin.com/in/amandaj-/" target="blank" rel="noopener noreferrer">
                    <img className="hover:opacity-80 transition-all duration-200" src="/assets/in.svg" alt="linkedin logo" />
                </Link>
                
                <Link href="https://wa.me/5521979911990" target="blank" rel="noopener noreferrer">
                    <img className="hover:opacity-80 transition-all duration-200" src="/assets/whatsapp.svg" alt="whatsapp logo" />
                </Link>
            </div>
            <Contact/>
            <div className="flex bg-shiny-purple py-2 px-5 gap-4 rounded-lg font-[realce] tracking-wider text-lg transition-all duration-300 cursor-pointer hover:bg-shiny-purple/80">
            <Link href="https://jauregao.github.io/cv/files/Desenvolvedora-Amanda_Oliveira.pdf" target="blank" rel="noopener noreferrer">Download CV</Link>
            <img className="w-7 h-6" src="/assets/download.svg" alt="download icone" />
            </div>
        </section>
    )
}