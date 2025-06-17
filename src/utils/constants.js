export const galaxy_Img = "https://t3.ftcdn.net/jpg/03/56/91/42/360_F_356914208_pojAIumMVrY8n0sZ7DSJ2KIwn5vbvUqa.jpg";

// export const project_Data_URL = "https://projectnode-nu2h.onrender.com/project || http://localhost:7000/project";

export const project_Data_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:7000/project"
    : "https://projectnode-nu2h.onrender.com/project";

