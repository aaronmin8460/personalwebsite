'use client';

import { motion } from 'framer-motion';
import Orb from './orb';


export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white overflow-hidden">
      {/* 🔮 Background Glitch */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I&apos;m Aaron{' '}
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
            style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          I&apos;m an undergraduate student at Purdue University studying Computer and Information Technology.
          I&apos;m passionate about AI, robotics, and building systems that improve people&apos;s lives.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I&apos;ve developed full-stack apps, conducted research in robotics, and worked on Raspberry Pi IoT projects.
          I love learning new technologies and applying them to real-world problems.
        </motion.p>
      </div>
    </div>
  );
}
