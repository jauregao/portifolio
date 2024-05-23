'use client'
import AboutAndTechs from '../mainInfos/aboutAndTechs'
import Projects from '../mainInfos/projects'

interface MainInfosProps {
    selectedInfo: string
}

export default function MainInfos({ selectedInfo }: MainInfosProps) {
    return (
        <section className="bg-not-black w-full h-full lg:rounded-xl rounded-r-lg self-end col-start-5 col-end-12 lg:row-start-3 row-start-2 row-end-13 flex flex-col justify-start p-2">
            {selectedInfo === 'user' &&
                <AboutAndTechs/>
            }

            {selectedInfo === 'case' && 
                <Projects/>
            }
        </section>
    );
}
