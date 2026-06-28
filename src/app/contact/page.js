"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00FF7F]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-[#00FF7F]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have a project in mind or want to collaborate?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "ayushpant2073@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+977-9766987980",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Nepal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  x: 8,
                }}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="rounded-full bg-[#00FF7F]/20 p-4 text-2xl text-[#00FF7F]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}

            <div className="flex gap-5 pt-5">

              {[FaGithub, FaLinkedin, SiFiverr].map((Icon, index) => (

                <motion.a
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.2,
                  }}
                  href="#"
                  className="rounded-full border border-white/10 p-4 text-2xl text-white transition hover:border-[#00FF7F] hover:text-[#00FF7F]"
                >
                  <Icon />
                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-[#00FF7F]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-[#00FF7F]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-[#00FF7F]"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="rounded-xl border border-white/10 bg-[#0B1120] p-4 text-white outline-none transition focus:border-[#00FF7F]"
              />

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="rounded-xl bg-[#00FF7F] py-4 font-semibold text-black transition hover:shadow-[0_0_30px_#00FF7F] cursor-pointer"
              >
                Send Message
              </motion.button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}