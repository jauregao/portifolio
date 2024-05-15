import Image from 'next/image'

export default function ChangeColorScheme() {
    return (
        <div className='flex gap-4 bg-shiny-purple/50 rounded-lg items-center px-2 self-start col-start-12 col-end-13 row-start-1 row-end-2'>
            <div>
                <Image
                    src="assets/sol.svg"
                    width={30}
                    height={30}
                    alt="sol - light mode"
                ></Image>
            </div>
            <div className='selected-color-mode-dark'>
                <Image
                    src="assets/lua.svg"
                    width={30}
                    height={30}
                    alt="lua - dark mode"
                ></Image>
            </div>
        </div>
    )
}