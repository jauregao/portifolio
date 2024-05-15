import AsideInfoContact from "@/components/AsideInfoContact"
import ChangeLenguage from "@/components/ChangeLenguage"
import ChangeMainInfos from "@/components/ChangeMainInfos"
import MainInfos from "@/components/MainInfos"

export default function Page() {
  return (
    <main className="bg-[url(/assets/background.svg)] w-[100vw] h-[100vh] p-10 flex justify-center">
      <div className="container grid grid-cols-14 grid-rows-12 items-center gap-5">
        <AsideInfoContact/>
        <MainInfos/>
        <ChangeMainInfos/>
        <ChangeLenguage/>
      </div>
    </main>
  )
}
