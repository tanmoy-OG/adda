import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF7D5C",
          secondary: "#38BDF8",
          accent: "#B387FA",
          neutral: "#EBEBEB",
          "base-100": "#ffffff",
          info: "#89E0EB",
          success: "#66CC8A",
          warning: "#FFB86C",
          error: "#E96D7B",
        },
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          secondary: "#38BDF8",
          error: "#E96D7B",
          "--rounded-btn": "0.5rem",
        },
      },
      "sunset",
    ],
    // darkTheme: "sunset",
    prefix: "",
  },
  plugins: [require("daisyui")],
};
export default config;
