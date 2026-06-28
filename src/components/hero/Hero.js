"use client";
import profile from '@/public/image/profilepic.png'
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white mt-20"
    >
      {/* Glow Background */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

      {/* Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Profile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            y: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="relative top-5"
        >
          <div className="absolute inset-0 rounded-full bg-[#00FF7F] blur-2xl opacity-40" />

          <Image
            src={profile}
            alt="Profile"
            width={170}
            height={170}
            className="relative rounded-full border-4 border-[#00FF7F]"
          />
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="mt-8 text-xl text-gray-300"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-2 text-5xl font-black md:text-7xl"
        >
          Ayush{" "}
          <span className="text-[#00FF7F]">
            Pant
          </span>
        </motion.h1>

        {/* Typing */}

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "ReactJS Developer",
            1000,
            "NextJs Developer",
            1000,
            "UI/UX Designer",
            1000,
            "BackEnd Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="mt-6 text-2xl font-semibold text-[#8B5CF6] md:text-4xl"
        />

        {/* Description */}

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-400"
        >
          I build beautiful, fast and responsive web applications
          using ReactJS, NextJs, NodeJs and modern UI technologies.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity:0,y:20 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:1.2 }}
          className="mt-10 flex flex-col gap-5 sm:flex-row"
        >
          <button
            className="rounded-full bg-[#00FF7F] px-8 py-4 font-bold text-black transition hover:scale-105 cursor-pointer"
          >
            Hire Me
          </button>

          <button
            className="rounded-full border border-[#00FF7F] px-8 py-4 font-bold text-[#00FF7F] transition hover:bg-[#00FF7F] hover:text-black cursor-pointer"
          >
            Download CV
          </button>
        </motion.div>

        {/* Social */}

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.5 }}
          className="mt-12 flex gap-7 text-3xl mb-4"
        >
          <FaGithub className="cursor-pointer transition hover:scale-125 hover:text-[#00FF7F]" />
          <FaLinkedin className="cursor-pointer transition hover:scale-125 hover:text-[#00FF7F]" />
          <FaInstagram className="cursor-pointer transition hover:scale-125 hover:text-[#00FF7F]" />
        </motion.div>

      </div>
    </section>
  );
}