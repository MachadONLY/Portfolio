"use client";

import React, { useState, useEffect } from "react";
import {
  BsBoxArrowUpRight,
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
  ];

  const slideUrls = [
    "https://main--gabrieltexteditor.netlify.app/",
    "https://gabrielgithubfinder.netlify.app/",
    "https://gabriellogin.netlify.app/",
    "https://portfolio-gabrielmachado.netlify.app/",
  ];

  const slideNames = [
    "My Text Editor",
    "A GitHub Finder",
    "Login Screen Design",
    "My Portfolio",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoSlide) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Troca de slide a cada 5 segundos
    }

    return () => clearInterval(intervalId);
  }, [autoSlide, currentIndex]);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    setAutoSlide(false); // Se o usuário usar a navegação manual, desativa o modo automático
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    setAutoSlide(true); // Reinicia o modo automático após cada mudança de slide
  };

  const handleSlideClick = () => {
    window.open(slideUrls[currentIndex], "_blank"); // Abre a URL correspondente ao slide em uma nova aba
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full h-[120vh] lg:h-screen bg-zinc-900">
      <div className="mx-auto max-w-[1080px] w-[95%] h-screen p-2">
        <h1 className="text-zinc-50 text-[68px] lg:text-9xl border-b-8 uppercase font-semibold">
          Projects
        </h1>
        <p className="text-zinc-50 tracking-widest my-4 uppercase border-b-8 pb-5">
          Software Engineer
        </p>

        <div className="max-w-[1080px] h-[500px] lg:h-[400px] w-full mx-auto relative group">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 10, 10, 0.5), rgba(0, 0, 10, 0.5)), url(${slides[currentIndex].path})`,
              position: "relative",
            }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 relative cursor-pointer"
            onClick={handleSlideClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {!autoSlide && (
              <>
                <div className="absolute hidden group-hover:block top-[50%] transform -translate-y-1/2 left-5 text-xl rounded-full bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="absolute hidden group-hover:block top-[50%] transform -translate-y-1/2 right-5 text-xl rounded-full bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
              </>
            )}
            {isHovered && (
              <div
                className="flex items-center gap-4"
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "10%",
                  transform: "translate(-30%, -30%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h2 className="text-white text-2xl font-bold">
                  {slideNames[currentIndex]}
                </h2>
                <BsBoxArrowUpRight className="text-xl" />
              </div>
            )}
          </div>
        </div>

        <footer className="w-full">
          <div className="mx-auto max-w-[1080px]">
            <div className="bg-zinc-50 w-full h-[9px] my-3"></div>
            <div className="flex flex-col lg:justify-between">
              <h1 className=" text-zinc-50 my-2">Gabriel Machado</h1>
              <h1 className=" text-zinc-50">zgabriel.machado@gmail.com</h1>
              <div className="flex items-center gap-5 text-zinc-50 my-4">
                <Link href="https://github.com/MachadONLY" target="blank">
                  <div className="bg-zinc-800 p-2 rounded-xl cursor-pointer hover:scale-125 hover:bg-zinc-700    ease-in duration-300">
                    <FaGithub size={25} />
                  </div>
                </Link>

                <Link href="https://linkedin.com/in/gabrielmachadodev/" target="blank">
                  <div className="bg-zinc-800 p-2 rounded-xl cursor-pointer hover:scale-125 hover:bg-zinc-700    ease-in duration-300">
                    <FaLinkedinIn size={25} />
                  </div>
                </Link>

                <Link href="/">
                  <div className="bg-zinc-50 text-zinc-800 p-3 rounded-2xl cursor-pointer hover:scale-110 ease-in duration-500">
                    <h1 className="tracking-widest font-bold text-xs">
                      Back to Home
                    </h1>
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
