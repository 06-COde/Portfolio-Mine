
export const chartData = {
  labels: ["HTML", "CSS", "JavaScript","TailwindCss", "ReactJs", "Node.js","MongoDb","GSAP","ThreeJs","Motion"],
  datasets: [
    {
      label: "My Skills",
      data: [90, 80, 85, 80, 90, 70, 60, 70, 65, 80],
      backgroundColor: "rgba(59, 130, 246, 0.7)", 
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: { color: "white" },
    },
  },
  scales: {
    x: {
      ticks: { color: "white" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
    y: {
      ticks: { color: "white" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      beginAtZero: true,
    },
  },
};
