import Image from "next/image";
import React from "react";
import profile from "../../../../public/assets/profile.svg";
import Link from "next/link";

const About = () => {
  return (
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

            <div className="flex flex-col w-full">
              <div className="flex lg:gap-8 gap-3">
                <div className="flex flex-col w-full border-t-2 border-zinc-400 my-12">
                  <h1 className="mb-4 font-bold uppercase my-2">Education</h1>
                  <p className="tracking-widest text-zinc-700 text-sm lg:text-base">FIAP</p>
                  <p className="tracking-widest text-zinc-700 text-sm lg:text-base">Start Future</p>
                </div>

                <div className="flex flex-col w-full border-t-2 border-zinc-400 my-12">
                  <h1 className="mb-4 font-bold uppercase my-2">Information</h1>
                  <p className="tracking-widest text-zinc-700 text-sm lg:text-base">
                    19 Years
                  </p>
                  <p className="tracking-widest text-zinc-700 text-sm lg:text-base">
                    zgabriel.machado@gmail.com
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-zinc-400 w-full">
                  <div className="my-2">
                    <h1 className="font-bold uppercase my-2">About me</h1>
                    <p className="text-justify">Hello, I'm Gabriel Machado, a software developer. I consider myself a diligent and dedicated professional, always willing to tackle any challenge in pursuit of growth, prioritizing adding value to the team with agile and effective solutions. I'm passionate about continuous learning and approach each challenge with determination. My goal is to contribute significantly to the success of projects and teams, leveraging my technical skills and agile mindset.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

