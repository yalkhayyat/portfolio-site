"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Contact from "../Contact/Contact";

const JetEngineCanvas = dynamic(
  () => import("./JetEngineCanvas").then((mod) => mod.JetEngineCanvas),
  {
    ssr: false,
  }
);

export interface JetEngineProps {
  modelPath: string;
}

export default function JetEngine({ modelPath }: JetEngineProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-50">
        <JetEngineCanvas modelPath={modelPath} />
      </div>

      {/* Fade-in text container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-left absolute bottom-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi! I&apos;m <span className="text-teal-400">Yousif.</span>
          </h1>
          <p className="text-lg md:text-xl font-mono text-white text-left">
            <span className="text-teal-400">class</span> Me {"{"}
            <br />
            &nbsp;&nbsp;education ={" "}
            <span className="text-teal-400">
              "CS @ UIUC"
            </span>
            ,<br />
            &nbsp;&nbsp;interests ={" "}
            <span className="text-teal-400">
              "System Programming, GPUs, Databases"
            </span>
            <br />
            {"};"}
          </p>
        </motion.div>
      </div>

      {/* Down arrow icon with fade-in and bounce animation */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5, // Delay for the arrow fade-in
          }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <FaChevronDown className="text-white text-2xl" />
          </motion.div>
        </motion.div>
      </div>
      <Contact />
    </div>
  );
}
