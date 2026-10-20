"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Divider() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="bg-[#050816] py-4">
      <div className="mx-auto flex max-w-7xl items-center px-6">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-(--accent)/40" />

        <div className="relative mx-4 h-3 w-3">
          {!reduceMotion && (
            <motion.span
              animate={{ scale: [1, 2.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-(--accent)"
            />
          )}
          <span className="absolute inset-0 rounded-full bg-(--accent) shadow-[0_0_12px_var(--accent)]" />
        </div>

        <div className="h-px flex-1 bg-linear-to-l from-transparent to-(--accent)/40" />
      </div>
    </div>
  );
}