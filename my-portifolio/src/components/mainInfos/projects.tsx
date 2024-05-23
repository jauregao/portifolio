import ProjectCard from "./projectCard";

export default function Projects() {

    return(
        <div className="w-full p-10 overflow-y-scroll overflow-x-hidden animate-fade-left animate-duration-500 animate-ease-in">
            <div className="flex items-center gap-5 mb-8 justify-start">
                <h2 className="font-realce lg:text-5xl text-4xl">Projetos</h2>
                <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
            </div>

            <ProjectCard/>
        </div>
    )

}