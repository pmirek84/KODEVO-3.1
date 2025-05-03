/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Century Gothic', 'sans-serif'],
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-very-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-super-slow': 'pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ultra-slow': 'pulse 40s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-mega-slow': 'pulse 80s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'border-beam': 'border-beam 4s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'glitch': 'glitch 2s infinite',
        'rainbow': 'rainbow 4s linear infinite',
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-50%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(50%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-50%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'glitch': {
          '0%, 100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transform: 'translate(0)',
          },
          '20%': {
            clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
            transform: 'translate(-3px)',
          },
          '40%': {
            clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
            transform: 'translate(3px)',
          },
          '60%': {
            clipPath: 'polygon(0 2%, 100% 0, 100% 98%, 0 100%)',
            transform: 'translate(-3px)',
          },
          '80%': {
            clipPath: 'polygon(0 0, 100% 2%, 100% 100%, 0 98%)',
            transform: 'translate(3px)',
          },
        },
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%, transparent 100%)',
      },
      boxShadow: {
        'glow-sm': '0 2px 8px -1px rgba(0, 229, 255, 0.1)',
        'glow': '0 0 20px -5px rgba(0, 229, 255, 0.2)',
        'glow-lg': '0 0 30px -5px rgba(0, 229, 255, 0.3)',
      },
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
    },
  },
  plugins: [],
};