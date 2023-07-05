/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{ts,vue}"],
  theme: {
    extend: {
      // The custom color scheme which needs to be adopted by the user of the component library
      colors: {
        cta: {
          DEFAULT: "#D6083B",
          hover: "#c50730",
          active: "#a30528",
          contrast: "#ffffff",
          light: {
            DEFAULT: "#fff0f3",
            hover: "#fedce4",
            active: "#fdc9d4",
            contrast: "#f1083b",
          },
        },
        hlt: {
          DEFAULT: "#1bc154",
          hover: "#17ab4b",
          active: "#14903f",
          contrast: "#ffffff",
          light: {
            DEFAULT: "#edfdf3",
            hover: "#dcfae6",
            active: "#c0f6d3",
            contrast: "#1bc154",
          },
        },
        thm: {
          DEFAULT: "#0096db",
          hover: "#007db7",
          active: "#006594",
          contrast: "#ffffff",
          light: {
            DEFAULT: "#ebf9ff",
            hover: "#d7f2ff",
            active: "#b8e8ff",
            contrast: "#0096db",
          },
        },
        inf: {
          DEFAULT: "#306ec5",
          hover: "#224E8C",
          active: "#224E8C",
          contrast: "#ffffff",
          text: "#306ec5",
          light: "#EBF9FF",
        },
        suc: {
          DEFAULT: "#36bf78",
          hover: "#268755",
          active: "#268755",
          contrast: "#ffffff",
          text: "#36bf78",
          light: "#effbf5",
        },
        wrn: {
          DEFAULT: "#ffa600",
          hover: "#AD7100",
          active: "#AD7100",
          contrast: "#131516",
          text: "#ffa600",
          light: "#fff8eb",
        },
        err: {
          DEFAULT: "#b83d4e",
          hover: "#822B37",
          active: "#822B37",
          contrast: "#ffffff",
          text: "#b83d4e",
          light: "#faf0f1",
        },
        sus: {
          DEFAULT: "#18DC64",
          hover: "#119C47",
          active: "#119C47",
          contrast: "#ffffff",
          text: "#18DC64",
          light: "#EDFDF3",
        },
        dia: {
          DEFAULT: "#BC74E7",
          hover: "#56157E",
          active: "#56157E",
          contrast: "#ffffff",
          text: "#BC74E7",
          light: "#F3E5FB",
        },
        bgr: {
          DEFAULT: "#ffffff",
          100: "#f5f5f5",
          200: "#eaebec",
          300: "#c9cccf",
          400: "#b7bbbe",
          500: "#999fa3",
          600: "#757c81",
          700: "#575c60",
          800: "#383b3e",
          900: "#131516",
        },
        txt: {
          DEFAULT: "#131516",
          dim: "#575c60",
          stress: "#000000",
          100: "#131516",
          200: "#383b3e",
          300: "#575c60",
          400: "#757c81",
          500: "#999fa3",
          600: "#b7bbbe",
          700: "#c9cccf",
          800: "#eaebec",
          900: "#f5f5f5",
          link: {
            DEFAULT: "#0096db",
            hover: "#007db7",
            active: "#006594",
            contrast: "#ffffff",
          },
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Operator Mono", "Lato", "AndaleMono", "monospace"],
      },
      screens: {
        sm: "576px", // 640px
        md: "768px", // 768px
        lg: "992px", // 1024px
        xl: "1200px", // 1280px
        "2xl": "1400px", // 1536px
      },
    },
  },
  plugins: [],
};
