"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [displayedEmail, setDisplayedEmail] = useState('');

  useEffect(() => {
    const fullEmail = 'zgabriel.machado@gmail.com';
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullEmail.length) {
        setDisplayedEmail(fullEmail.substring(0, currentIndex) + '|');
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
    }, 200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="contact" className="w-full h-auto">
      <div className="mx-auto max-w-[700px] my-20 w-[80%] h-auto">
        <div className="bg-zinc-200 rounded-xl w-full">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="my-4">
              Entre em contato e vamos construir algo incrível!
            </p>
            <div className="lg:flex lg:flex-row  gap-2 lg:gap-6 flex flex-col">
              <Link href="https://github.com/MachadONLY" target="blank">
                <div className="flex items-center gap-6  p-2 my-2 rounded-xl bg-zinc-100 lg:hover:scale-125  ease-in duration-300">
                  <FaGithub size={25} />
                  <p className="lg:hidden tracking-widest font-semibold">Github</p>
                </div>
              </Link>

              <Link href="https://linkedin.com/in/gabrielmachadodev/" target="blank">
                <div className="flex items-center gap-6   p-2 my-2 rounded-xl bg-zinc-100 lg:hover:scale-125  ease-in duration-300">
                  <FaLinkedinIn size={25} />
                  <p className="lg:hidden tracking-widest font-semibold">Linkedin</p>
                </div>
              </Link>

              <div className="lg:flex lg:flex-row  gap-2 flex flex-col">
                <div className="bg-zinc-100 rounded-xl flex justify-center items-center p-3">
                  <p className="text-sm tracking-widest text-zinc-700">
                    {displayedEmail}
                  </p>
                </div>
                <div className="bg-zinc-900 rounded-xl text-zinc-100 p-3 flex justify-center items-center">
                  <p className="font-bold">Send To</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
