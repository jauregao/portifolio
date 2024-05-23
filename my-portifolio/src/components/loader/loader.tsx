import { useState, useEffect } from "react";
import ComponentGroup from "../page/componentGroup";

export default function Loader() {
    const [loading, setLoading] = useState<boolean | null>(true);
    const [displayNone, setDisplayNone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4000)

        const displayNoneTimer = setTimeout(() => {
            setDisplayNone(true)
        }, 5000)

        return () => {
            clearTimeout(timer);
            clearTimeout(displayNoneTimer);
        }
    }, [])

    const handleTransitionEnd = () => {
        if (!loading) {
            setTimeout(() => {
                setLoading(null)
            }, 1000)
        }
    }

    return (
        <div className={`absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-[url(/assets/loadScreen.gif)] bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ${loading === true ? 'opacity-100' : 'opacity-0'} ${displayNone ? 'hidden' : 'block'}`} onTransitionEnd={handleTransitionEnd}>
            <div className="flex flex-col items-center">
                <p className="font-[realce] text-[83px] tracking-wide -mb-14">BEM VINDO AO MEU</p>
                <p className="font-[realce] text-[150px]">PORTIFÓLIO</p>
            </div>
        </div>
    )
}
