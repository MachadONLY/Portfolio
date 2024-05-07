import Image from "next/image";
import React from "react";
import profile from "../../../../public/assets/profile.svg";
import Link from "next/link";

const About = () => {
  return (
    <>
     <div id="about" className="w-full h-screen">
      <div className="mx-auto max-w-[1080px] w-[85%] lg:my-28 my-12 h-auto">
        <div className="flex flex-col">
          <h1 className="lg:text-6xl text-4xl text-zinc-800 font-semibold uppercase tracking-widest">
            Gabriel
            Machado
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-8 ">
            <div className="my-6 lg:my-12 w-[40%]">
              <Image
                className="rounded-xl w-full"
                src={profile}
                alt="Profile Picture"
              />
            </div>

           
          </div>
        </div>
      </div>
    </div>
    </>
);
};
   

export default About;

