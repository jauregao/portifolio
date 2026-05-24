'use client'

import Image from 'next/image'
import caseIcon from '../../../public/assets/case.svg'
import userIcon from '../../../public/assets/user.svg'

interface SectionSwitcherProps {
    onSelectInfo: (info: 'user' | 'case') => void;
}

export default function SectionSwitcher({ onSelectInfo }: SectionSwitcherProps) {
    const icons = [
        {
            name: 'user' as const,
            icon: userIcon,
        },
        {
            name: 'case' as const,
            icon: caseIcon,
        },
    ]

    function handleChangeMainInfo(e: React.MouseEvent<HTMLButtonElement>) {
        onSelectInfo(e.currentTarget.id as 'user' | 'case')
    }

    return (
        <section className='flex flex-col gap-3 h-max w-max lg:p-3 p-2 rounded-xl bg-not-black justify-end animate-fade-left animate-duration-300 animate-ease-in'>
            {icons.map(({ name, icon }) => (
                <button type="button" id={name} onClick={handleChangeMainInfo} className='bg-not-white/10 p-3 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer' key={name}>
                    <Image
                        className="theme-icon"
                        src={icon}
                        width={32}
                        height={32}
                        alt={`${name} icon`}
                    />
                </button>
            ))}
        </section>
    )
}