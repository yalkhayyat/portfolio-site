"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { usePreventScroll } from "@/hooks/usePreventScroll"; // Adjust the import path as needed

export default function ProjectCard({ title, imageUrl, contentHtml }) {
  const [isModalOpen, setModalOpen] = useState(false);
  usePreventScroll(isModalOpen);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1 }}
        onClick={handleOpenModal}
        className="group hover:drop-shadow-[0_0px_20px_rgba(45,212,191,0.3)] transition-all"
      >
        <div className="border-2 rounded-lg group-hover:border-teal-400">
          <div className="relative w-full h-56 overflow-hidden rounded-md">
            <Image
              alt={title}
              src={imageUrl}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bottom-0 left-0 right-0 py-4">
          <div className="text-white group-hover:text-teal-400 text-xl text-left">
            {title}
          </div>
        </div>
      </motion.button>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        contentHtml={contentHtml}
      />
    </>
  );
}
