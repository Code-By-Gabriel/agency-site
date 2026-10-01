"use client";

import { motion } from "framer-motion";

export function NotFoundMascot({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden
    >
      {/* Antenna */}
      <motion.g
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "100px", originY: "50px" }}
      >
        <line
          x1="100"
          y1="60"
          x2="100"
          y2="30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.circle
          cx="100"
          cy="26"
          r="5"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Head */}
      <rect
        x="50"
        y="60"
        width="100"
        height="80"
        rx="16"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Eyes */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{
          duration: 4,
          times: [0, 0.4, 0.45, 0.5, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ originX: "100px", originY: "95px" }}
      >
        <circle cx="80" cy="95" r="6" fill="currentColor" />
        <circle cx="120" cy="95" r="6" fill="currentColor" />
      </motion.g>

      {/* Mouth */}
      <path
        d="M 85 118 Q 100 128 115 118"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Body */}
      <rect
        x="60"
        y="150"
        width="80"
        height="40"
        rx="12"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Chest light */}
      <motion.circle
        cx="100"
        cy="170"
        r="4"
        fill="currentColor"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Question mark floating */}
      <motion.text
        x="150"
        y="60"
        fontSize="24"
        fill="currentColor"
        fontFamily="ui-monospace, monospace"
        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ?
      </motion.text>
    </motion.svg>
  );
}