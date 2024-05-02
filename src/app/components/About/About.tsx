import Image from "next/image";
import React from "react";
import profile from "../../../../public/assets/profile.svg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full h-screen">
      <div className="mx-auto max-w-[600px] w-[85%] lg:my-20 my-12 h-auto">
        <div className="flex flex-col justify-center">
          <Image
            className="rounded-full w-[180px]"
            src={profile}
            alt="Profile Picture"
          />
          <h1 className="lg:text-4xl text-2xl text-gray-800 font-bold my-6">
            Hey, I&apos;m Gabriel, <br /> I&apos;m a Software developer &amp;{" "}
            <br /> engineer based in São Paulo, BR.
          </h1>
          <p className="tracking-widest text-justify">
            Hello, I&apos;m Gabriel Machado, a software developer. I consider
            myself a diligent and dedicated professional, always willing to
            tackle any challenge in pursuit of growth, prioritizing adding value
            to the team with agile and effective solutions. I&apos;m passionate
            about continuous learning and approach each challenge with
            determination. My goal is to contribute significantly to the success
            of projects and teams, leveraging my technical skills and agile
            mindset.
          </p>

          <Link href="/#contact">
            <p className="my-8 text-gray-700 underline cursor-pointer">
              Get in touch -&gt;
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
