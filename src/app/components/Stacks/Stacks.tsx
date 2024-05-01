import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiJavaLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

const Stacks = () => {
  return (
    <>
      <div id="stacks" className="w-full h-screen">
        <div className="mx-auto max-w-[700px] my-20 w-[80%] h-auto">
            <h1 className="text-3xl font-bold border-b border-zinc-700 py-4">Stacks</h1>
            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">Next.js</p>
                <SiNextdotjs size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">Github</p>
                <FaGithub size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">React</p>
                <SiReact size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">TypeScript</p>
                <SiTypescript size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">JavaScript</p>
                <SiJavascript size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">Tailwind</p>
                <RiTailwindCssFill size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">Node</p>
                <FaNodeJs size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">MySQL</p>
                <SiMysql size={30}/>
            </div>

            <div className="flex justify-between px-2 border-b border-zinc-700 py-6">
                <p className="text-xl font-semibold tracking-widest uppercase">Java</p>
                <RiJavaLine size={30}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Stacks;
