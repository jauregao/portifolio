import Link from 'next/link'

export default function ProjectCardBack() {

    return (
        <>
            <h3 className="font-[realce] tracking-wider text-2xl mt-4">{`Project name`.toUpperCase()}</h3>
            <h4 className="font-[realce] tracking-wider text-lg">{`techs`}</h4>
            <p className="text-sm">{`descrição proj`}</p>

            <div className='flex gap-5 justify-center items-center mt-4 font-bold w-full'>
                <Link
                    className='py-2 w-full bg-not-white/80 hover:bg-not-white text-dark-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer'
                    href={`https://github.com/`}
                    target="blank"
                    rel="noopener noreferrer"
                    key={`id`}
                >REPOSITÓRIO</Link>
                <Link
                    className='py-2 w-full bg-shiny-purple/80 hover:bg-shiny-purple rounded-lg text-sm text-center transition-all duration-300 cursor-pointer'
                    href={`https://github.com/`}
                    target="blank"
                    rel="noopener noreferrer"
                    key={`id`}
                >DEPLOY</Link>
            </div>
        </>
    )

}
