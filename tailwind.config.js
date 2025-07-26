/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#58B2E0',
        'primary-dark': '#468db5',
        secondary: '#FFFFFF',
        accent: '#1E3A8A', // A darker blue for contrast
        background: '#F7FAFC',
        'text-dark': '#1A202C',
        'text-light': '#4A5568',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-light':
          '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'custom-hover':
          '0 10px 15px -3px rgba(88, 178, 224, 0.2), 0 4px 6px -2px rgba(88, 178, 224, 0.1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
