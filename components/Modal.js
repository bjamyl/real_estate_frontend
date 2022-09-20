import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isVisible, onClose, children }) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "-100vh", opacity: 0 },
  };

  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "background") onClose();
  };
  return (
    <motion.div
      id="background"
      onClick={handleClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[90%] xl:w-[50%] flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-white xl:text-4xl text-2xl place-self-end"
        >
          X
        </button>
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white p-2 rounded-md"
          >
            {children}
          </motion.div>
      </div>
    </motion.div>
  );
}
