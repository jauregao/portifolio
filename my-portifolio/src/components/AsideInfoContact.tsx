import Infos from "./Infos";
import Picture from "./Picture";

export default function AsideInfoContact() {
    return (
        <aside className="max-w-md max-h-full flex flex-col items-center">
            <Picture/>
            <Infos/>
        </aside>
    )
}