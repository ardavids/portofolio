"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import SocialIcon from "../ui/social-icon";

const Hero = () => {
  return (
    <>
      <main className="container mx-auto px-6 md:px-12 min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-12">
        <section className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-[#FFC805] px-3 py-1 text-white rounded-md mb-6 font-medium">
            Arnold David Silaban
          </div>
          <div className="h-[140px] md:h-[120px] flex flex-col justify-end md:justify-center pb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi! I am, <br />
              <span className="block h-[1.3em] text-black">
                <Typewriter
                  options={{
                    strings: ["Web Developer!", "IT Support!"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </span>
            </h1>
          </div>
          <p className="text-black max-w-lg mx-auto md:mx-0 leading-relaxed">
            Saya seorang pengembang frontend pemula dengan pengalaman dalam
            membuat situs web yang menarik secara visual dan ramah pengguna.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start pt-2">
            <Button className="bg-[#1A73E8] hover:bg-blue-700 text-white px-8 py-6 rounded-md shadow-lg shadow-blue-500/30">
              Hire me
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-6 py-6 rounded-md hover:bg-white hover:border-gray-400 bg-transparent"
            >
              Lihat Projects
            </Button>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start pt-6">
            <SocialIcon
              icon={<FaLinkedinIn />}
              href="#"
              color="text-[#0077B5]"
            />
            <SocialIcon
              icon={<FaInstagram />}
              href="#"
              color="text-[#E4405F]"
            />
            <SocialIcon icon={<FaGithub />} href="#" color="text-[#333]" />
          </div>
        </section>
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-transparent bg-[#78A8A2]">
            <Image
              src="/profile.png"
              alt="Arnold David Silaban"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
