"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="bg-[#050816] py-8">
      <div className="flex items-center justify-center">
        <div className="h-px flex-1 bg-white/10" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 8px var(--accent)",
              "0 0 20px var(--accent)",
              "0 0 8px var(--accent)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-4 h-3 w-3 rounded-full bg-(--accent)"
        />

        <div className="h-px flex-1 bg-white/10" />
      </div>
    </div>
  );
}