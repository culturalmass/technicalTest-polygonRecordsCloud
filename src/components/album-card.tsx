import { useState } from "react";

const AlbumCard = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="flex flex-col w-[242px] h-[290px] bg-[#211626] rounded-2xl cursor-pointer"
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img
        src="/src/assets/coverAlbumLogo.png"
        alt="coverAlbum-icon"
        className=""
      />
      <div className="flex flex-col items-start gap-y-1 pt-4 px-5">
        <h3 className="font-raleway font-bold text-[22px] leading-[25.83px] ">
          Jaime Cantante
        </h3>
        <div className="flex justify-start items-center gap-x-1">
          <img
            src="/src/assets/userLogo.png"
            alt="user-logo"
            className="w-[16px] h-[16px] rounded-full object-cover"
          />
          <span className="flex font-dm text-[13px] leading-[16.93px] ">
            @johnti60
          </span>
        </div>
      </div>
      <div className="flex justify-center h-[41px] mt-2">
        <div
          className={`justify-between items-center px-4 w-[206px] h-[41px] rounded-2xl bg-[#322638] ${
            isActive ? "flex z-10" : "hidden z-0"
          } `}
        >
          <img
            src="/src/assets/agreementIcon.png"
            alt="agreement-icon"
            className="w-[21px] h-[21px]"
          />
          <img
            src="/src/assets/shoppingIcon.png"
            alt="shoppig-icon"
            className="w-[21px] h-[21px]"
          />
          <img
            src="/src/assets/heartIcon.png"
            alt="heart-icon"
            className="w-[21px] h-[21px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
