const { fontFamily } = require("tailwindcss/defaultTheme")

const baseColors = ["border", "input", "ring", "background", "foreground"]

const colorVariants = [
  "primary",
  "secondary",
  "destructive",
  "muted",
  "accent",
  "popover",
  "card",
]

const subColors = ["", "foreground"]

const interactionVariants = ["", "hover", "active", "focus"]

const properties = ["text", "border", "bg", "fill", "ring"]

// Generate the safelist for each color, its variants, and properties
const safelist = baseColors.concat(
  colorVariants.flatMap((color) =>
    subColors.flatMap((subColor) =>
      interactionVariants.flatMap((variant) =>
        properties.map((property) =>
          variant
            ? `${variant}:${property}-${color}${subColor ? `-${subColor}` : ""}`
            : `${property}-${color}${subColor ? `-${subColor}` : ""}`
        )
      )
    )
  )
)

module.exports = {
  content: [
    // root for most
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "./node_modules/ui-client/src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/ui-server/src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/icons/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    ...safelist,
    "animate-loading",
    "text-blue-600",
    "bg-blue-600",
    "ring-blue-600",
    "text-yellow-600",
    "bg-yellow-600",
    "ring-yellow-600",
    "text-purple-600",
    "bg-purple-600",
    "ring-purple-600",
    "text-red-600",
    "bg-red-600",
    "ring-red-600",
    "text-lime-600",
    "bg-lime-600",
    "ring-lime-600",
    "text-cyan-600",
    "bg-cyan-600",
    "ring-cyan-600",
    "text-amber-600",
    "bg-amber-600",
    "ring-amber-600",
  ],
  darkMode: ["class"],
  theme: {
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: require("./typography"),
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        glow: "0 0 4px rgb(0 0 0 / 0.1)",
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
      maxWidth: {
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem",
        "8xl": "88rem",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      letterSpacing: {
        tightest: "-.06em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
          "16.667%, 66.667%": {
            opacity: 0,
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: 1,
          },
          "33.333%, 50%": {
            opacity: 0,
          },
          "25%, 58.333%": {
            opacity: 1,
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
        },
        spin: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(1turn)" },
        },
        spinX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        spinZ: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        loading: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        "blur-in": {
          "0%": { opacity: 0, filter: "blur(5px)" },
          "100%": { opacity: 1, filter: "blur(0)" },
        },
      },
      willChange: {
        filter: "filter",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        border: "background ease infinite",
        loading: "loading 1.4s infinite",
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
        spin: "spin 5s linear infinite",
        "spin-x": "spinX 20s linear infinite",
        "spin-z": "spinZ 180s linear infinite",
        "fade-in": "fade-in 10s",
        "blur-in": "blur-in 1s",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
