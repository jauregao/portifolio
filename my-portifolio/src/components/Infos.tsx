import Contact from "./Contact";

export default function Infos() {
    return (
        <section className="p-6 flex flex-col items-center w-[400px] bg-not-black rounded-xl gap-6">
            <div>
            <h1 className="text-center font-[realce] text-5xl">Amanda Oliveira</h1>
            <h2 className="text-center font-semibold text-xl">Desenvolvedora FullStack</h2>
            </div>
            <div className="flex gap-5">
                <a href="https://www.behance.net/amandaj" target="blank" rel="noopener noreferrer">
                    <img src="/assets/behance.svg" alt="behnce logo" />
                </a>
                
                <a href="https://github.com/jauregao" target="blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="github logo" />
                </a>
                
                <a href="https://www.linkedin.com/in/amandaj-/" target="blank" rel="noopener noreferrer">
                    <img src="/assets/in.svg" alt="linkedin logo" />
                </a>
                
                <a href="https://wa.me/5521979911990" target="blank" rel="noopener noreferrer">
                    <img src="/assets/whatsapp.svg" alt="whatsapp logo" />
                </a>
            </div>
            <Contact/>
            <div className="flex">
            <a href="">Download CV</a>
            <img src="/assets/download.svg" alt="download icone" />
            </div>
        </section>
    )
}