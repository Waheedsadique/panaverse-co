import React from "react";
import Image from "next/image";

const Leader = () => {
  return (
    <div className="bg-[#000235]">
      <div className=" bg-[#00042D] px-4 py-4 text-white">
        <div className=" flex justify-center  mx-4 my-4 py-6  text-white font-[poppins]">
         <div> <h1 className="animate-pulse text-4xl py-10  border-l-2 border-solid px-4 border-white  ">Our Teachers</h1></div>
          
        </div>
        <div className="flex justify-center rounded-full animate-bounce "><Image src={"/arror.svg"} height={30} width={60} alt="arror"/></div>
        <div className="flex flex-col md:flex-row max-w-5xl group mx-auto gap-8">
          <div className="bg-white/10 p-8 rounded-xl cursor-pointer md:group-hover:blur-sm md:hover:!blur-none ">
          <Image
              src={"/sir.jpg"}
              width={150}
              height={150}
              alt="sir zia"
              className="rounded-full  mx-auto"
            />
            <h4 className="text-xl  font-[poppins] my-4 text-center md:px-9">Zia Khan</h4>
            <p className="text-sm leading-7 py-3 font-light opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              modi perferendis praesentium, numquam at 
            </p>
            <div className="flex justify-center">
            <button className="bg-blue-500 rounded-full py-2.5 px-8 ">
                Get in Touch
            </button>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-xl cursor-pointer md:group-hover:blur-sm md:hover:!blur-none    ">
            <Image
              src={"/sir-daniyal.jpg"}
              width={150}
              height={150}
              alt="misshira"
              className="rounded-full  mx-auto"
            />
            <h4 className="text-xl  font-[poppins] my-4 text-center md:mx-9">Sir Daniyal </h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              modi perferendis praesentium, numquam at 
            </p>
            <div className="flex justify-center">
            <button className="bg-blue-500 rounded-full py-2.5 px-8 ">
                Get in Touch
            </button>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-xl cursor-pointer md:group-hover:blur-sm md:hover:!blur-none  ">
            <Image
              src={"/sir-zeeshan.jpg"}
              width={150}
              height={150}
              alt="misshira"
              className="rounded-full  mx-auto"
            />
            <h4 className="text-xl  font-[poppins] my-4 text-center md:mx-9">Sir Zeeshan</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              modi perferendis praesentium, numquam at 
            </p>
            <div className="flex justify-center">
            <button className="bg-blue-500 rounded-full py-2.5 px-8 ">
                Get in Touch
            </button>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-xl cursor-pointer md:group-hover:blur-sm md:hover:!blur-none  ">
            <Image
              src={"/miss-hira.jpg"}
              width={150}
              height={150}
              alt="misshira"
              className="rounded-full  mx-auto"
            />
            <h4 className="text-xl  font-[poppins] my-4 text-center md:mx-9">Miss Hira</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              modi perferendis praesentium, numquam at 
            </p>
            <div className="flex justify-center">
            <button className="bg-blue-500 rounded-full py-2.5 px-8 ">
                Get in Touch
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
