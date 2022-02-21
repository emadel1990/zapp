import React from "react";
import Image from "next/image";
import Link from "next/link";

const style = {
  section:
    "flex justify-center items-center mx-28 my-28 px-2 border-2 drop-shadow-lg rounded-md",
  ph: "w-full px-10 ml-6",
  img: "flex justify-center w-full mr-10",
};

const BestPractices = () => {
  return (
    <div>
      <div className={style.section}>
        <div className={style.ph}>
          <h2 className="text-6xl pb-12 font-semi-bold">Best Practices</h2>
          <p className="text-xl italic">
            Pair programming is often thought of as an in-person development
            technique, but it turns you can do pair programming remotely just as
            well with these best practices...
          </p>
          <p className="pt-6">&copy; Jason Thomas </p>
          <div className="flex flex-row whitespace-nowrap justify-between pt-8">
            <p>July 12, 2021</p>
            <Link className="" href={""}>
              Read more...
            </Link>
          </div>
        </div>
        <div className={style.img}>
          <Image
            height={400}
            width={400}
            src="/assets/bestPractices.svg"
            quality={100}
            alt="bpImage"
          />
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
