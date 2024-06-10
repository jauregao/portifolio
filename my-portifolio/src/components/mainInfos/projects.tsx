import ProjectCard from "./projectCard";

export default function Projects() {

    return(
        <div className="w-full lg:p-10 p-5 overflow-y-scroll overflow-x-hidden animate-fade-left animate-duration-500 animate-ease-in">
            <div className="flex items-center gap-5 mb-8 justify-start">
                <h2 className="font-realce xl:text-5xl lg:text-4xl text-3xl">Projetos</h2>
                <div className="xl:w-60 lg:w-40 sm:w-32 w-20 h-1 rounded-sm bg-shiny-purple"></div>
            </div>

            <ProjectCard/>
        </div>
    )

}