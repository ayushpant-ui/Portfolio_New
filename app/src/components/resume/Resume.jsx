"use client";

import { motion } from "framer-motion";
import GPAChart from "@/src/components/GPACharts.jsx";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const resume = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Computer Science",
    year: "2024 - Running(UnderGraduate)",
    place: "Far-Western University",
    description:
      "Gaining experience on System Design and Full -Stack Web Development.",
  },

  {
    icon: <FaBriefcase />,
    title: "Frontend/BackEnd Developer",
    year: "2025 - Present",
    place: "Freelancer",
    description:
      "Building modern responsive websites using React, Next.js, NodeJS/Express and Tailwind CSS.",
  },

  {
    icon: <FaCertificate />,
    title: "Responsive Web Design and Development",
    year: "2025",
    place: "Learned from Videos and Website (Self-Learning)[W3School.com]",
    description:
      "Completed responsive Web design/Development certification.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-(--accent)">
            Resume
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Education & Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            My educational journey and professional experience.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-(--accent)/30 md:left-1/2 md:-translate-x-1/2"/>

          {resume.map((item,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,x:index%2===0?-80:80}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{
                duration:.6,
                delay:index*.2,
              }}
              className={`relative mb-16 flex w-full ${
                index%2===0
                ? "md:justify-start"
                : "md:justify-end"
              }`}
            >

              <div className="ml-14 w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:ml-0 md:w-[45%]">

                <div className="mb-4 text-4xl text-(--accent)">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-(--accent)">
                  {item.year}
                </p>

                <p className="mt-1 text-gray-300">
                  {item.place}
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

              </div>

              {/* Circle */}

              <div className="absolute left-5 top-8 h-5 w-5 rounded-full border-4 border-[#050816] bg-(--accent) md:left-1/2 md:-translate-x-1/2"/>

            </motion.div>

          ))}

        </div>

      </div>
    {/* <GPAChart /> */}
    </section>
  );
}