import React from "react";
import Image from "next/image";

const style = {
  hero: "flex flex-row justify-center bg-rose-100  w-full h-[467px] px-14 overflow-hidden",
  divTitle: "h-[100%]  w-80 mx-10  flex flex-wrap",
  title: "text-6xl font-bold flex items-center pt-4",
  subTitle: "text-2xl flex w-[260px] ",
  divImage: "flex px-8 scale-[150%] overflow-hidden ",
};

const Hero = () => {
  return (
    <hero className={style.hero}>
      <div className={style.divTitle}>
        <h1 className={style.title}>Make better projects</h1>
        <h2 className={style.subTitle}>being friendly is always better</h2>
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
