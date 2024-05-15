import Image from 'next/image'

export default function ChangeMainInfos() {
    return(
        <section className='flex flex-col gap-5 w-20 max-h-max p-3 rounded-xl bg-not-black self-start mt-36'>
            <div className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer'>
                <Image
                    src="assets/user.svg"
                    width={200}
                    height={200}
                    alt="user icon"
                ></Image>
            </div>
            <div className='bg-not-white/10 p-2 rounded-lg hover:bg-not-white/20 transition-all duration-300 cursor-pointer'>
                <Image
                    src="assets/case.svg"
                    width={200}
                    height={200}
                    alt="case icon"
                ></Image>
            </div>
        </section>
    )
}
