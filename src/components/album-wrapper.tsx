import AlbumCard from "./album-card";

const AlbumWrapper = () => {
  return (
    <section className="flex w-full justify-center mt-6">
      <div className="flex flex-wrap gap-y-5 gap-x-1 items-center flex-row w-[1360px] justify-center sm:justify-between">
        {[...Array(5)].map((_, i) => (
          <AlbumCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default AlbumWrapper;
