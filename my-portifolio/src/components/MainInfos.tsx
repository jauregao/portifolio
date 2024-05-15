import Techs from "./Techs";

export default function MainInfos() {
    return (
        <section className="bg-not-black w-full h-full rounded-xl p-12 self-end col-start-5 col-end-12 row-start-3 row-end-13">
            <div className="mb-10">
                <div className="flex items-center gap-5 mb-2">
                    <h2 className="font-[realce] text-5xl">Sobre Mim</h2>
                    <div className="w-60 h-1 rounded-sm bg-shiny-purple"></div>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br/><br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div>
                <div className="flex items-center gap-5 mb-2">
                    <h2 className="font-[realce] text-5xl">Hard Skills</h2>
                    <div className="w-60 h-1 rounded-sm bg-shiny-purple"></div>
                </div>
                <Techs/>
            </div>
        </section>
    )
}