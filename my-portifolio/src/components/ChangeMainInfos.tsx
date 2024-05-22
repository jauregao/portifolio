import Image from 'next/image'
import caseIcon from '../../public/assets/case.svg'
import userIcon from '../../public/assets/user.svg'

export default function ChangeMainInfos() {

    const icons = [
        {
            name: 'user icon',
            icon: userIcon
        },
        {
            name: 'case icon',
            icon: caseIcon
        },
    ]

    function handleChangeMainInfo() {
        
    }

    return(
        <section className='flex flex-col gap-6 h-max w-max p-4 rounded-xl bg-not-black col-start-12 col-end-13 row-start-3 mt-28 justify-end'>
            <div className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer'>
                {
                    icons.map(({ name, icon }) => (
                        <Image
                            key={name}
                            src={icon}
                            width={40}
                            height={40}
                            alt={name}
                            onClick={handleChangeMainInfo}
                        />
                    ))
                }
            </div>
        </section>
    )
}
