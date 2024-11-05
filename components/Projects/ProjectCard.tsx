"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ title, imageUrl, markdownPath }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }} // Increases size on hover
        transition={{ duration: 0.1 }}
        onClick={handleOpenModal}
      >
        <div className="border-2 rounded-xl bg-white">
          <div className="relative w-full h-56 overflow-hidden rounded-lg">
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
          <div className="text-white text-2xl font-bold text-left">{title}</div>
        </div>
      </motion.button>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        markdownPath={markdownPath} // Pass the Markdown content to the modal
      />
    </>
  );
}
