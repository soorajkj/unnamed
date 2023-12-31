/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "color-primary": "rgba(var(--cl-primary), <alpha-value>)",
      "color-primary-light": "rgba(var(--cl-primary-light), <alpha-value>)",
      "color-primary-dark": "rgba(var(--cl-primary-dark), <alpha-value>)",
      "color-primary-contr": "rgba(var(--cl-primary-contrast), <alpha-value>)",
      "color-secondary": "rgba(var(--cl-secondary), <alpha-value>)",
      "color-secondary-light": "rgba(var(--cl-secondary), <alpha-value>)",
      "color-secondary-dark": "rgba(var(--cl-secondary-dark), <alpha-value>)",
      "color-divider": "rgba(var(--cl-divider), <alpha-value>)",
      "color-divider-light": "rgba(var(--cl-divider-light), <alpha-value>)",
      "color-divider-dark": "rgba(var(--cl-divider-dark), <alpha-value>)",
      "color-error": "rgba(var(--cl-error), <alpha-value>)",
      "color-tooltip": "rgba(var(--cl-tooltip), <alpha-value>)",
      "color-popover": "rgba(var(--cl-popover), <alpha-value>)",
      "color-success": "rgba(var(--cl-success), <alpha-value>)",
      "color-success-light": "rgba(var(--cl-success-light), <alpha-value>)",
      "color-success-dark": "rgba(var(--cl-success-dark), <alpha-value>)",
      "color-danger": "rgba(var(--cl-danger), <alpha-value>)",
      "color-danger-light": "rgba(var(--cl-danger-light), <alpha-value>)",
      "color-danger-dark": "rgba(var(--cl-danger-dark), <alpha-value>)",
      "color-info": "rgba(var(--cl-info), <alpha-value>)",
      "color-info-light": "rgba(var(--cl-info-light), <alpha-value>)",
      "color-info-dark": "rgba(var(--cl-info-dark), <alpha-value>)",
      "color-warn": "rgba(var(--cl-warn), <alpha-value>)",
      "color-warn-light": "rgba(var(--cl-warn-light), <alpha-value>)",
      "color-warn-dark": "rgba(var(--cl-warn-dark), <alpha-value>)",
      "color-accent": "rgba(var(--cl-accent), <alpha-value>)",
      "color-accent-light": "rgba(var(--cl-accent-light), <alpha-value>)",
      "color-accent-dark": "rgba(var(--cl-accent-dark), <alpha-value>)",
      "color-accent-contr": "rgba(var(--cl-accent-contrast), <alpha-value>)",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
