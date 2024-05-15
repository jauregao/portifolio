import Infos from "./Infos";
import Picture from "./Picture";

export default function AsideInfoContact() {
    return (
        <aside className="w-max h-full flex flex-col self-start items-center col-start-1 col-end-5 row-span-12">
            <Picture/>
            <Infos/>
        </aside>
    )
}