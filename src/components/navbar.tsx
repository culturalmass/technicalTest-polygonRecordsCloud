const NavBar = () => {
  return (
    <nav className="flex justify-center font-raleway w-full">
      <div className="flex justify-between items-center w-[1440px] h-[82px] gap-x-5  pl-12 pr-10">
        <img
          src="/src/assets/logo.png"
          alt="logo-icon"
          className="w-[145px] h-[37px] cursor-pointer"
        />
        <div className="flex items-center">
          <img
            src="/src/assets/searchIcon.png"
            alt="search-icon"
            className="relative -mr-8 h-3 w-3"
          />
          <input
            placeholder="Search Item, Collection and Account.."
            className="hidden sm:flex rounded-full w-[587px] h-[42px] bg-[#1C141E] font-dm text-sm pl-12"
          />
        </div>
        <div className="flex justify-between items-center gap-x-4 font-semibold text-[15px] leading-[14.4px]">
          <button className="flex flex-shrink-0 items-center gap-x-2 text-[#D0C0FF] bg-[#54399F85] rounded-full px-5 py-3 hover:bg-[#54399F85]/35">
            <img
              src="/src/assets/homeIcon.png"
              alt="home-icon"
              className="w-[18px] h-[18px]"
            />
            <span className="hidden sm:flex">Home</span>
            <span className="flex sm:hidden">Menu</span>
          </button>
          <button className="hidden sm:flex px-4 py-3 rounded-full hover:bg-gray-500/35">
            Descubrir
          </button>
          <button className="hidden sm:flex px-4 py-3 rounded-full hover:bg-gray-500/35">
            Favoritos
          </button>
          <button className="hidden sm:flex flex-shrink-0 gap-x-2  bg-[#7855DC] rounded-full px-6 py-3 hover:bg-[#7855DC]/35">
            Subir Obra
          </button>
          <img
            src="/src/assets/userLogo.png"
            alt="user-logo"
            className="hidden sm:flex w-[38px] h-[38px] rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
