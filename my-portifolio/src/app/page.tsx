import AsideInfoContact from '@/components/AsideInfoContact'
import ChangeColorScheme from '@/components/ChangeColorScheme'
import ChangeMainInfos from '@/components/ChangeMainInfos'
import MainInfos from '@/components/MainInfos'
import Techs from '@/components/Techs'

export default function Page() {

  return (
    <main className="bg-[url(/assets/background.svg)] w-[100vw] h-[100vh] p-10 flex justify-center">
      <div className="container grid grid-cols-14 grid-rows-12 items-center gap-5">
        <AsideInfoContact/>
        <MainInfos/>
        <ChangeMainInfos/>
        <ChangeColorScheme/>

          <Techs>
            <>
            data.
            </>
          </Techs>

      </div>
    </main>
  )
}
