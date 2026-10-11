import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF7A00",
          orangeLight: "#FF9A3D",
          orangeDark: "#E56A00",
          navy: "#0B1F3A",
          navyDeep: "#07152A",
          navySoft: "#13315C",
          blue: "#0A66C2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(11, 31, 58, 0.35)",
        card: "0 10px 30px -12px rgba(11, 31, 58, 0.18)",
        glow: "0 0 40px rgba(255, 122, 0, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "shine": "shine 1.5s ease-in-out infinite",
        "bounce-soft": "bounceSoft 2.5s ease-in-out infinite",
        "tilt": "tilt 8s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(40px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
