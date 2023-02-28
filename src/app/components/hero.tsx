import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#00042D] mx-4 my-4 text-white">
      <div className="flex flex-col justify-center items-center md:items-baseline py-8">
        <h1 className="text-4xl mx-5 font-[poppins]">
          Become a Certified Developer
        </h1>
        <h1 className="text-3xl mx-5 pl-15 font-[poppins] text-[#B8162D] ">
          with Panaverse
        </h1>
        <p className="mx-5 text-center md:text-left font-[poppins]">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program.
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, and Ambient Computing/IoT Technologies.
        </p>
        <div className="py-6">
        <button className=" px-2 py-2 m-2 text-white  font-[poppins] text-xl bg-[#B8162D] hover:animate-pulse flex rounded-2xl">
          Join Us
        </button>
        </div>
      </div>
      <div className="">
        <Image
          src={"/photo1.png"}
          height={"900"}
          width={"800"}
          alt="photo"
          className="md:w-[80rem]"
        />
        {/* <div className="animate-bounce flex sm:hid  " >arror</div> */}
      </div>
    </div>
  );
};

export default HeroSection;
