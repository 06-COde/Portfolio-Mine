// src/components/Loader.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex justify-center items-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Center Line Animation */}
          <motion.div
            className="absolute bg-gray-200 h-1 w-1"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Curtain Reveal Animation */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black"
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{
              delay: 0.6,
              duration: 1.5,
              ease: [0.77, 0, 0.175, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
