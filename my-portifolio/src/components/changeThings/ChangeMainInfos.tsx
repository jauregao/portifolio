'use client'
import Image from 'next/image';
import caseIcon from '../../../public/assets/case.svg';
import userIcon from '../../../public/assets/user.svg';

interface ChangeMainInfosProps {
    onSelectInfo: (info: string) => void;
}

export default function ChangeMainInfos({ onSelectInfo }: ChangeMainInfosProps) {
    const icons = [
        {
        name: 'user',
        icon: userIcon
        },
        {
        name: 'case',
        icon: caseIcon
        },
    ]

    function handleChangeMainInfo(e: React.MouseEvent<HTMLImageElement>) { 
        onSelectInfo(e.currentTarget.id)
    }

    return (
        <section className='flex flex-col gap-6 h-max w-max lg:p-3 p-2 rounded-xl bg-not-black col-start-12 col-end-13 sm:row-start-3 row-start-5 lg:mt-[5.3rem] sm:mt-[2rem] justify-end animate-fade-left animate-duration-300 animate-ease-in'>
            {icons.map(({ name, icon }) => (
                <div id={name} onClick={handleChangeMainInfo} className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer' key={name}>
                <Image
                    src={icon}
                    width={25}
                    height={25}
                    alt={`${name} icon`}
                />
                </div>
            ))}
        </section>
    );
}
