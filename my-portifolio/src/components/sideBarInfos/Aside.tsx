'use client'
import { DevData } from "@/types/devTypes"
import { useEffect, useState } from "react"
import getData from "@/services/getData"
import Contact from "../Contact"
import Link from 'next/link'
import Image from 'next/image'
import Picture from "./Picture"

export default function Aside() {

    type Props = {
            name: string
            link: string
            icon: string
    }

    const [socialData, setSocialData] = useState<Props[]>([{
        name: '',
        link: '',
        icon: ''
    }])

    const[resume, setResume] = useState('')

    useEffect(() => {
        (async () => {        
                try {
                    const response: DevData = await getData()
                    const data = response.social
                    const resume = response.resume
                    setResume(resume)
                    setSocialData(data)
                } catch (error) {
                    console.error(error)    
                }
            }
        )()
    }, [])

    return (

        <aside className="lg:w-max lg:h-full w-full h-max flex flex-col self-start items-center col-start-1 col-end-5 row-span-12">
            <Picture/>
        <section className="px-6 pt-16 pb-10 flex flex-col items-center justify-between w-fit h-full bg-not-black rounded-xl gap-6">
            <div>
            <h1 className="text-center font-[realce] text-5xl mt-24">Amanda Oliveira</h1>
            <h2 className="text-center font-semibold text-xl">Desenvolvedora FullStack</h2>
            </div>
            <div className="flex gap-5">

                {socialData.map((redeSocial) => (
                        <Link
                            href={redeSocial.link} 
                            target="blank"
                            rel="noopener noreferrer"
                            key={redeSocial.name}>
                        <Image 
                            className="hover:opacity-80 transition-all duration-200"
                            src={redeSocial.icon}
                            width={30}
                            height={30}
                            alt={`${redeSocial.name} logo`} 
                        />
                        </Link>
                    ))}

            </div>
            <Contact/>
            <div className="flex bg-shiny-purple py-2 px-5 gap-4 rounded-lg font-[realce] tracking-wider text-lg transition-all duration-300 cursor-pointer hover:bg-shiny-purple/80">
                <Link href={resume} target="blank" rel="noopener noreferrer">Download CV</Link>
                <img className="w-7 h-6" src="/assets/download.svg" alt="download icone" />
            </div>
        </section>
        </aside>
    )
}