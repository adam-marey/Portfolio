import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion from Framer Motion
import ImageOfMe from '../imgs/my.jpg';

const IntroImage = () => {
  const imageVariants = {
    initial: {
      opacity: 0,
      x: 100 // Start position (move from the right)
    },
    animate: {
      opacity: 1,
      x: 0, // End position (center)
      transition: {
        duration: 1
      }
    }
  };

  const textVariants = {
    initial: {
      opacity: 0,
      x: -100 // Start position (move from the left)
    },
    animate: {
      opacity: 1,
      x: 0, // End position (center)
      transition: {
        duration: 1,
        delay: 0.5 // Delay text animation slightly
      }
    }
  };

  return (
    <div className="mx-auto p-20 text-center bg-gray-100">
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="animate"
          exit="initial"
          variants={imageVariants}
        >
          <motion.img
            src={ImageOfMe}
            alt="my.jpg"
            className="w-40 h-auto rounded-full mx-auto border-gray-800 border-4"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          exit="initial"
          variants={textVariants}
        >
          <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5">
            Adam Marey
          </h1>
          <h4 className="text-1xll text-gray-500 pt-2">
            Full Stack Software Engineer
          </h4>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IntroImage;
