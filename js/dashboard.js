tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#00A79D",
        "secondary": "#FF6B35",
        "background-light": "#F7FAFC",
        "background-dark": "#1A202C",
        "card-light": "#FFFFFF",
        "card-dark": "#2D3748",
        "text-light": "#2D3748",
        "text-dark": "#E2E8F0",
        "text-muted-light": "#718096",
        "text-muted-dark": "#A0AEC0",
        "border-light": "#E2E8F0",
        "border-dark": "#4A5568",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
}