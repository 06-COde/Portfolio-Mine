import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartData, chartOptions } from "./GraphData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = () => {
  const graphRef = useRef(null);

  const scrollToGraph = () => {
    graphRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = graphRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center overflow-hidden px-4 relative">
      {/* Smooth scroll prompt */}
      <motion.div
        onClick={scrollToGraph}
        className="cursor-pointer flex flex-col items-center mb-6"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-base md:text-lg font-medium tracking-wide text-gray-300">
          Scroll down
        </h1>
        <span className="text-3xl text-blue-400">↓</span>
      </motion.div>

      {/* Graph content */}
      <motion.div
        ref={graphRef}
        initial={{ opacity: 0, y: 30 }}
        className="-mt-12 max-w-2xl w-full p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700 transform-gpu"
      >
        <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide">
          My 3D Skills Graph
        </h2>
        <div className="h-96">
          <Bar
            data={chartData}
            options={chartOptions}
            key={JSON.stringify(chartData)}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Graph;
