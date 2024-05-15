import Image from 'next/image'

export default function ChangeLenguage() {
    return (
        <div className='flex gap-4 bg-shiny-purple/50 rounded-lg items-center px-2 self-start col-start-12 col-end-13 row-start-1 row-end-2'>
            <div>
                <Image
                    src="assets/eua_flag.svg"
                    width={40}
                    height={40}
                    alt="eua flag"
                ></Image>
            </div>
            <div className='selected-lenguage-br'>
                <Image
                    src="assets/brazil_flag.svg"
                    width={40}
                    height={40}
                    alt="brazil flag"
                ></Image>
            </div>
        </div>
    )
}