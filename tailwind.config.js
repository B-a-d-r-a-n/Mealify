tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-contrast": "var(--color-accent-contrast)",
        "border-color": "var(--color-border)",
        card: "var(--color-card)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        amatic: ["Amatic SC", "cursive"],
      },
      animation: { shake: "shake 0.8s infinite" },
    },
  },
  plugins: [],
};
