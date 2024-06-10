import ComponentGroup from '@/components/page/componentGroup'

export default function Page() {

  return (
    <main className="bg-[url(/assets/background.svg)] bg-cover w-[100svw] sm:h-[100svh] h-full lg:p-10 py-10 px-5 flex justify-center gap-3">
        <ComponentGroup/>
    </main>
  )
}
