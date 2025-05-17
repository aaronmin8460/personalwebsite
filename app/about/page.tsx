'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I&apos;m Byeongil Min 👋

      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I'm an undergraduate student at Purdue University studying Computer and Information Technology.
        I'm passionate about AI, robotics, and building systems that improve people's lives.
      </motion.p>

      <motion.p
        className="mt-4 text-lg text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I’ve developed full-stack apps, conducted research in robotics, and worked on Raspberry Pi IoT projects.
        I love learning new technologies and applying them to real-world problems.
      </motion.p>
    </div>
  );
}
