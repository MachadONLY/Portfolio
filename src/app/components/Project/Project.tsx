import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <>
      <div id="project" className="w-full h-screen">
        <div className="mx-auto max-w-[700px] w-[80%] h-auto my-20">
          <div className="w-full h-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Projects</h1>
            <Link href="/">
              <p className="tracking-widest text-sm my-1 ">See all</p>
            </Link>
          </div>

          <div className="bg-zinc-200 shadow-xl w-full h-auto  rounded-xl my-12 p-6 hover:scale-105 ease-in duration-500">
            <div className="flex justify-between">
              <h1 className="font-bold">Github Finder</h1>
              <p className="tracking-widest text-sm ">2024</p>
            </div>
            <p className="my-6">Explore profiles on GitHub in a practical and intuitive way.</p>
            <Link href="https://main--gabrielgithubfinder.netlify.app" target="blank">
                <p className="text-sm underline cursor-pointer">More Info -&gt;</p> 
            </Link>
          </div>

          <div className="bg-zinc-200 shadow-xl w-full h-auto  rounded-xl my-12 p-6 hover:scale-105 ease-in duration-500">
            <div className="flex justify-between">
              <h1 className="font-bold">Portfolio</h1>
              <p className="tracking-widest text-sm ">2024</p>
            </div>
            <p className="my-6">A minimal portfolio project built on Next.js</p>
            <Link href="/">
                <p className="text-sm underline cursor-pointer">More Info -&gt;</p> 
            </Link>
          </div>

          <div className="bg-zinc-200 shadow-xl w-full h-auto  rounded-xl my-12 p-6 hover:scale-105 ease-in duration-500">
            <div className="flex justify-between">
              <h1 className="font-bold">Responsive Login Screen Design</h1>
              <p className="tracking-widest text-sm ">2024</p>
            </div>
            <p className="my-6">A different login screen design created by me.</p>
            <Link href="https://gabriellogin.netlify.app" target="blank">
                <p className="text-sm underline cursor-pointer">More Info -&gt;</p> 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
