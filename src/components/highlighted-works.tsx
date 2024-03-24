const HighlightedWorks = () => {
  return (
    <section className="flex mt-8 w-full justify-center">
      <div className="flex gap-x-[84px] px-10 w-[1440px]">
        <h3 className="font-raleway font-bold text-2xl tracking-[-.06rem]">
          Obras Destacadas
        </h3>
        <div className="flex flex-wrap items-center gap-x-6 font-dm font-semibold text-[14px] leading-[18.23px] text-[#BCBCBC]">
          <button className="hover:border-b-[1px]">Music</button>
          <button className="hover:border-b-[1px]">Collectibles</button>
          <button className="hover:border-b-[1px]">Utility</button>
        </div>
      </div>
    </section>
  );
};

export default HighlightedWorks;
