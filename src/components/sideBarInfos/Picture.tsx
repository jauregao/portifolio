export default function Picture() {
  return(
    <div className="relative inline-block rounded-xl w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] border-4 border-violet-600 -mb-[5rem] sm:-mb-[5.5rem] md:-mb-[6rem] lg:-mb-[7rem] z-50 overflow-hidden">
      <img
        className="rounded-xl h-full w-full object-cover"
        src="/assets/profile-quadrado.png"
        alt="auto retrato Amanda"
      />
    </div>
  )
}
