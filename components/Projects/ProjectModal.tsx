"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectModal = ({ isOpen, onClose, title, contentHtml }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  flex items-center justify-center z-50 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent backdrop-blur-lg text-white rounded-lg p-6 h-5/6 w-2/3 flex flex-col border-2 border-teal-400"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-teal-400">{title}</h2>
              <button
                onClick={onClose}
                className="text-teal-400 text-xl text-center"
              >
                ✖
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="scrollbar overflow-y-auto flex-grow"
            >
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="prose prose-invert max-w-none w-full xl:w-2/3 justify-self-center px-6"
              ></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
