export default function Contact() {
    return(
        <section className="bg-not-white/10 p-6 max-w-96 h-full rounded-xl">
            <div className="flex gap-3 mb-4 justify-start items-center">
                <div className="bg-not-black rounded-xl w-14 h-14 flex justify-center items-center"><img className="min-w-9 min-h-9" src="/assets/phone.svg" alt="telefone icone" /></div>
                <div>
                    <p className="font-[realce] text-lg">Telefone</p>
                    <p className="font-[realce] text-xl">+55 (21) 97891-1990</p>
                </div>
            </div>
            <div className="flex gap-3 mb-4 justify-start items-center">
                <div className="bg-not-black rounded-xl w-14 h-14 flex justify-center items-center"><img className="min-w-9 min-h-9" src="/assets/mail.svg" alt="email icone" /></div>
                <div>
                    <p className="font-[realce] text-lg">Email</p>
                    <p className="font-[realce] text-xl">amandajauregui.dev@gmail.com</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="bg-not-black rounded-xl w-14 h-14 flex justify-center items-center"><img className="min-w-9 min-h-9" src="/assets/location-mark.svg" alt="local icone" /></div>
                <div>
                    <p className="font-[realce] text-lg">Localização</p>
                    <p className="font-[realce] text-xl">São Gonçalo, RJ - Brasil</p>
                </div>
            </div>
        </section>
    )
}