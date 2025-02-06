import Link from 'next/link'

const icons = [
    {
        name: 'telefone',
        path: '/assets/phone.svg',
        content: '+55 (21) 97891-1990',
        link: 'https://api.whatsapp.com/send?phone=5521978911990'
    },
    {
        name: 'email',
        path: '/assets/mail.svg',
        content: 'amandajauregui.dev@gmail.com',
        link: 'mailto:amandajauregui.dev@gmail.com'
    },
    {
        name: 'localização',
        path: '/assets/location-mark.svg',
        content: 'Niterói, RJ - Brasil',
        link: 'https://g.co/kgs/ncocPZh'
    }
]

export default function Contact() {
    return (
        <section className="bg-not-white/10 lg:p-5 p-2 lg:w-full h-max rounded-xl sm:flex sm:flex-col hidden">
            {
                icons.map((icon) => (
                    <Link
                        href={icon.link}
                        target="blank"
                        rel="noopener noreferrer"
                        key={icon.name}
                    >
                        <div className="flex gap-3 mb-4 justify-start items-center">
                            <div className="bg-not-black rounded-xl lg:w-13 lg:h-13 w-11 h-11 flex justify-center items-center">
                                <img className="lg:w-8 lg:h-8 w-7 h-7" src={icon.path} alt={`${icon.name} icone`} /></div>
                            <div>
                                <p className="font-realce lg:text-lg text-md">{icon.name}</p>
                                <p className="font-realce lg:text-md text-[12px]">{icon.content}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
