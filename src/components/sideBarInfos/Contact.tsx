"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useDevData } from '@/hooks/useDevData'

const icons = [
    {
        name: 'telefone',
        path: '/assets/phone.svg',
        content: '+55 (21) 97891-1990',
        link: 'https://api.whatsapp.com/send?phone=5521978911990',
        copyValue: '+5521978911990',
        hideContent: true,
    },
    {
        name: 'email',
        path: '/assets/mail.svg',
        content: 'amandajauregui.dev@gmail.com',
        link: 'mailto:amandajauregui.dev@gmail.com',
        copyValue: 'amandajauregui.dev@gmail.com',
        hideContent: true,
    },
    {
        name: 'localização',
        path: '/assets/location-mark.svg',
        content: 'Niterói, RJ - Brasil',
        link: 'https://g.co/kgs/ncocPZh',
        hideContent: false,
    }
]

export default function Contact() {
    const [copiedValue, setCopiedValue] = useState('')
    const data = useDevData()

    const labelMap: Record<string, keyof typeof data.ui> = {
        telefone: 'phone',
        email: 'email',
        localização: 'location',
    }

    async function handleCopy(value: string) {
        try {
            await navigator.clipboard.writeText(value)
            setCopiedValue(value)
            window.setTimeout(() => setCopiedValue(''), 1200)
        } catch {
            setCopiedValue('')
        }
    }

    return (
        <section className="bg-not-white/10 lg:p-5 p-4 lg:w-full h-max rounded-xl sm:flex sm:flex-col hidden gap-3">
            {icons.map((icon) => (
                <div
                    key={icon.name}
                    className="flex items-center justify-between gap-3 rounded-xl bg-not-black/35 px-3 py-2.5"
                >
                    <Link
                        href={icon.link}
                        target="blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 flex-1 items-center gap-4"
                    >
                        <div className="bg-not-black/85 rounded-xl lg:w-12 lg:h-12 w-10 h-10 flex shrink-0 justify-center items-center">
                            <img className="theme-icon-soft lg:w-6 lg:h-6 w-5 h-5" src={icon.path} alt={`${icon.name} icone`} />
                        </div>
                        <div className="min-w-0">
                            <p className="font-realce lg:text-xl text-lg leading-none capitalize">{data.ui[labelMap[icon.name]]}</p>
                            {!icon.hideContent && (
                                <p className="font-realce lg:text-base text-sm leading-tight text-not-white/90 break-words">{icon.content}</p>
                            )}
                        </div>
                    </Link>

                    {icon.copyValue ? (
                        <button
                            type="button"
                            onClick={() => handleCopy(icon.copyValue as string)}
                            className="shrink-0 rounded-lg border border-not-white/10 bg-not-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-not-white/80 transition-all duration-200 hover:bg-not-white/10"
                        >
                            {copiedValue === icon.copyValue ? data.ui.copied : data.ui.copy}
                        </button>
                    ) : null}
                </div>
            ))}
        </section>
    )
}
