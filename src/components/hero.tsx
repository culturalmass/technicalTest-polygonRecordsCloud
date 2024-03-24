const Hero = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-wrap justify-between w-full px-12 sm:px-0 sm:w-[1360px] bg-gradient-to-r from-[#7953DC] to-[#3AAAD9] rounded-xl">
        <div className="flex flex-col items-center w-[536px] h-[183px] mt-[86px] xl:ml-[68px] gap-y-6 z-10 md-z-0">
          <h2 className="font-bold font-raleway text-[64px] leading-[61.44px] tracking-[-.2rem]">
            Membresía Premium
          </h2>
          <div className="flex gap-x-4 font-semibold font-inter text-[13px] leading-[22px] w-full">
            <button className="bg-[#FFFFFF14] rounded-full px-7 py-2 hover:bg-[#FFFFFF14]/35">
              Suscribirse
            </button>
            <button className="rounded-full px-7 py-2 outline outline-1 outline-white hover:bg-[#FFFFFF14]/35">
              Descubrir planes
            </button>
          </div>
        </div>
        <img
          src="/src/assets/heroIcon.png"
          alt="hero-icon"
          className="md:ml-0"
        />
      </div>
    </section>
  );
};

export default Hero;
