import AboutAndTechs from '../mainInfos/aboutAndTechs'
import Projects from '../mainInfos/projects'

interface MainInfosProps {
    selectedInfo: 'user' | 'case'
}

export default function MainInfos({ selectedInfo }: MainInfosProps) {
    return (
        <section className="portfolio-main bg-not-black w-full min-h-0 lg:h-full sm:h-[716px] h-full rounded-xl self-end lg:col-start-3 sm:col-start-2 col-start-1 col-end-12 lg:row-start-2 sm:row-start-2 row-start-5 row-end-13 flex flex-col justify-start overflow-y-auto overflow-x-hidden p-2 animate-fade-left animate-duration-300 animate-ease-in">
            {selectedInfo === 'user' &&
                <AboutAndTechs/>
            }

            {selectedInfo === 'case' && 
                <Projects/>
            }
        </section>
    );
}
