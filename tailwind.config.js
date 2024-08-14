/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0 0 100%)",
      gray: {
        DEFAULT: "hsl(var(--gray-700))",
        100: "hsl(var(--gray-100))",
        200: "hsl(var(--gray-200))",
        300: "hsl(var(--gray-300))",
        700: "hsl(var(--gray-700))",
        800: "hsl(var(--gray-800))",
        900: "hsl(var(--gray-900))",
      },
      purple: {
        DEFAULT: "hsl(var(--primary))",
        light: "hsl(var(--primary-light))",
        dark: "hsl(var(--primary-dark))",
      },
      red: {
        DEFAULT: "hsl(var(--destructive))",
        light: "hsl(var(--destructive-light))",
        dark: "hsl(var(--destructive-dark))",
      },
      pink: {
        DEFAULT: "hsl(var(--secondary))",
        light: "hsl(var(--secondary-light))",
        dark: "hsl(var(--secondary-dark))",
      },
      yellow: {
        DEFAULT: "hsl(var(--warning))",
        light: "hsl(var(--warning-light))",
        dark: "hsl(var(--warning-dark))",
      },
      green: {
        DEFAULT: "hsl(var(--success))",
        light: "hsl(var(--success-light))",
        dark: "hsl(var(--success-dark))",
      },
      blue: {
        DEFAULT: "hsl(var(--info))",
        light: "hsl(var(--info-light))",
        dark: "hsl(var(--info-dark))",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: ["0.75rem", "1.375rem"], // 12px/22px
        md: ["0.875rem", "1.375rem"], // 14px/22px
        lg: ["1.25rem", "2rem"], // 20px/32px
        xl: ["1.75rem", "2.8125rem"], // 28px/45px
        "2xl": ["2.5rem", "4rem"], // 40px/64px
        "3xl": ["3.5rem", "5.625rem"], // 56px/90px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          light: "hsl(var(--destructive-light))",
          dark: "hsl(var(--destructive-dark))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
          dark: "hsl(var(--warning-dark))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
          dark: "hsl(var(--success-dark))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
          dark: "hsl(var(--info-dark))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
    },
  },
  plugins: [],
};
