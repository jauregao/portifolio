import AsideInfoContact from "@/components/AsideInfoContact"
import ChangeLenguage from "@/components/ChangeLenguage"
import ChangeMainInfos from "@/components/ChangeMainInfos"
import MainInfos from "@/components/MainInfos"

export default function Page() {
  return (
    <main className="bg-[url(/assets/background.svg)] w-[100vw] h-[100vh] p-10 flex justify-center">
      <div className="container flex items-center gap-5">
      <AsideInfoContact/>
      <MainInfos/>
      <ChangeMainInfos/>
      <div className="self-start -ml-28">
        <ChangeLenguage/>
      </div>
      </div>
    </main>
  )
}
