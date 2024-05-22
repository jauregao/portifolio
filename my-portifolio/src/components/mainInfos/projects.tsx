import ProjectCard from "./projectCard";

export default function Projects() {

    return(
        <div>
            <div className="flex items-center gap-5 mb-4 justify-start">
                <h2 className="font-[realce] lg:text-5xl text-4xl">Projetos</h2>
                <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
            </div>

            <ProjectCard/>
        </div>
    )

}