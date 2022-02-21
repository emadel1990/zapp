import React from "react";
import Image from "next/image";

const style = {
  hero: "flex flex-row justify-center bg-rose-100  w-screen ml-[-73px] h-[467px] overflow-hidden",
  divTitle: "w-[450px] mx-10 flex flex-col justify-center",
  title: "text-7xl font-bold flex items-center py-4",
  subTitle: "text-3xl text-gray-700",
  divImage: "flex px-8 scale-[150%] overflow-hidden ",
};

const Hero = () => {
  return (
    <hero className={style.hero}>
      <div className={style.divTitle}>
        <span className="relative">
          <h1 className={style.title}>Make Better Projects</h1>
          <img
            src="/assets/coffee.svg"
            alt=""
            className="absolute bottom-1 right-[6rem]"
          />
        </span>
        <p className={style.subTitle}>Being friendly is always better</p>
      </div>
      <div className={style.divImage}>
        <Image
          height={400}
          width={400}
          src="/assets/569.svg"
          quality={100}
          alt="heroImage"
        />
      </div>
    </hero>
  );
};

export default Hero;
