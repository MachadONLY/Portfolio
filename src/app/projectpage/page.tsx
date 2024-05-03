"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RxDotFilled } from 'react-icons/rx';
import Link from "next/link";

const Projectpage: React.FC = () => {
  const slides = [
    {
      path: "/assets/texteditor.svg",
    },
    {
      path: "/assets/githubfinder.svg",
    },
    {
      path: "/assets/loginscreen.svg",
    },
    {
      path: "/assets/portfolio.svg",
    },
    {
      path: "/assets/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[105vh] bg-zinc-900">
      <div className="mx-auto max-w-[1080px] w-[95%] h-screen p-2">
        <h1 className="text-zinc-50 text-[68px] lg:text-9xl border-b-8 uppercase font-semibold">
          Projects
        </h1>
        <p className="text-zinc-50 tracking-widest my-4 uppercase border-b-8 pb-5">
          Software Engineer
        </p>

        <div className="max-w-[1080px] h-[500px] lg:h-[400px] w-full mx-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].path})` }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 relative"
          >
            <div className="absolute hidden group-hover:block top-[50%] transform -translate-y-1/2 left-5 text-xl rounded-full bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="absolute hidden group-hover:block top-[50%] transform -translate-y-1/2 right-5 text-xl rounded-full bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>

        <footer className="w-full">
          <div className="mx-auto max-w-[1080px]">
            <div className="bg-zinc-50 w-full h-[9px] my-3"></div>
            <div className="flex flex-col lg:justify-between">
              <h1 className=" text-zinc-50 my-2">Gabriel Machado</h1>
              <h1 className=" text-zinc-50">zgabriel.machado@gmail.com</h1>
              <div className="flex items-center gap-5 text-zinc-50 my-4">
                <FaGithub size={20} />
                <FaLinkedinIn size={20} />
                <Link href="/">
                  <div className="bg-zinc-50 text-zinc-800 p-3 rounded-2xl cursor-pointer hover:scale-110 ease-in duration-500">
                    <h1 className="tracking-widest font-bold text-xs">Back to Home</h1>
                  </div>
                </Link>
                
              </div>

            </div>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Projectpage;
