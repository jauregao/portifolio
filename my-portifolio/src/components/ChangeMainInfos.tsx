import Image from 'next/image'

export default function ChangeMainInfos() {
    return(
        <section className='flex flex-col gap-6 h-max w-max p-4 rounded-xl bg-not-black col-start-12 col-end-13 row-start-3 mt-28 justify-end'>
            <div className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer'>
                <Image
                    src="assets/user.svg"
                    width={40}
                    height={40}
                    alt="user icon"
                ></Image>
            </div>
            <div className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer'>
                <Image
                    src="assets/case.svg"
                    width={40}
                    height={40}
                    alt="case icon"
                ></Image>
            </div>
        </section>
    )
}
