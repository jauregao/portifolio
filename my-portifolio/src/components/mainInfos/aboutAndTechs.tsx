import Techs from '../mainContent/Techs'

export default function AboutAndTechs() {
    return (
            <div className='p-10 animate-fade-left animate-duration-500 animate-ease-in'>
                <div className="mb-10">
                    <div className="flex items-center gap-5 mb-8">
                        <h2 className="font-[realce] lg:text-5xl text-4xl">Sobre Mim</h2>
                        <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/><br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <h2 className="font-[realce] lg:text-5xl text-4xl">Hard Skills</h2>
                        <div className="lg:w-60 w-28 h-1 rounded-sm bg-shiny-purple"></div>
                    </div>
                        <Techs/>
                </div>
            </div>
    )
}
