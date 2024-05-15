import Image from 'next/image'

export default function ChangeLenguage() {
    return (
        <div className='flex gap-3 bg-shiny-purple/50 rounded-lg items-center px-2'>
            <div>
                <Image
                    src="assets/eua_flag.svg"
                    width={20}
                    height={20}
                    alt="eua flag"
                ></Image>
            </div>
            <div className='selected-lenguage-br'>
                <Image
                    src="assets/brazil_flag.svg"
                    width={20}
                    height={20}
                    alt="brazil flag"
                ></Image>
            </div>
        </div>
    )
}