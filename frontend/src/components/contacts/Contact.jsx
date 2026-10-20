"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { socialLinks } from "@/src/data/socials";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const initialForm = { name: "", email: "", subject: "", message: "" };

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "ayushpant2073@gmail.com",
    href: "mailto:ayushpant2073@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+977-9766987980",
    href: "tel:+9779766987980",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Nepal",
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#0A0F24] p-4 text-white placeholder:text-gray-500 outline-none transition-colors duration-300 focus:border-(--accent) focus:ring-1 focus:ring-(--accent)/50";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-(--accent)">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Get In{" "}
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contactInfo.map((item) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Tag
                  key={item.title}
                  {...(item.href && { href: item.href })}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:translate-x-2 hover:border-(--accent)/50"
                >
                  <div className="rounded-2xl bg-(--accent)/15 p-4 text-2xl text-(--accent) transition-colors duration-300 group-hover:bg-(--accent) group-hover:text-[#050816]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="break-words text-gray-400">{item.value}</p>
                  </div>
                </Tag>
              );
            })}

            {/* Social icons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -5 }}
                  className="rounded-full border border-white/10 p-4 text-2xl text-white transition-colors duration-300 hover:border-(--accent) hover:text-(--accent)"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent) to-transparent" />

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Subject</span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </label>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer rounded-xl bg-(--accent) py-4 font-semibold text-[#050816] shadow-[0_0_30px_-8px_var(--accent)] transition-shadow duration-300 hover:shadow-[0_0_40px_-5px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              <p
                role="status"
                aria-live="polite"
                className={`min-h-6 text-center text-sm ${
                  status === "success" ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {status === "success" &&
                  "Message sent! I'll get back to you soon."}
                {status === "error" &&
                  "Something went wrong. Please try again or email me directly."}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}