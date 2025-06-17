import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sideMessages = [
  '🚀 Let’s Build Something Great!',
  '💼 Open for Opportunities',
  '🎯 Precision. Passion. Pixel-Perfect.',
  '🔥 Crafting Smooth UI Experiences',
  '🤝 Let’s Collaborate Today!',
];

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const bubbleVariant = {
  hidden: { opacity: 0, x: -40, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  whileHover: {
    scale: 1.1,
  },
};

const SidePopup = () => {
  const [showBubbles, setShowBubbles] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Trigger bubbles after delay
  useEffect(() => {
    const timeout = setTimeout(() => setShowBubbles(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Responsive: Hide on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1190);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute left-4 bottom-4 z-50 space-y-3 max-w-xs"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showBubbles &&
          sideMessages.map((text, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-2xl hover:brightness-110 backdrop-blur-sm cursor-pointer text-xs md:text-sm font-semibold"
              variants={bubbleVariant}
              whileHover="whileHover"
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {text}
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default SidePopup;
