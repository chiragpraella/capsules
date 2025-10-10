/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // Override default sizes with fluid responsive values
    fontSize: {
      'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 1.25rem)', { lineHeight: '1.4' }],
      'sm': ['clamp(0.875rem, 0.85rem + 0.25vw, 1.5rem)', { lineHeight: '1.5' }],
      'base': ['clamp(1rem, 0.9rem + 0.5vw, 1.75rem)', { lineHeight: '1.6' }],
      'lg': ['clamp(1.125rem, 1rem + 0.625vw, 2.25rem)', { lineHeight: '1.6' }],
      'xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 2.75rem)', { lineHeight: '1.5' }],
      '2xl': ['clamp(1.5rem, 1.2rem + 1.5vw, 3.5rem)', { lineHeight: '1.4' }],
      '3xl': ['clamp(1.875rem, 1.5rem + 1.875vw, 4.5rem)', { lineHeight: '1.3' }],
      '4xl': ['clamp(2.25rem, 1.75rem + 2.5vw, 5.5rem)', { lineHeight: '1.2' }],
      '5xl': ['clamp(3rem, 2rem + 5vw, 7rem)', { lineHeight: '1.1' }],
      '6xl': ['clamp(3.75rem, 2.5rem + 6.25vw, 9rem)', { lineHeight: '1' }],
      '7xl': ['clamp(4.5rem, 3rem + 7.5vw, 11rem)', { lineHeight: '1' }],
      '8xl': ['clamp(6rem, 4rem + 10vw, 14rem)', { lineHeight: '1' }],
      '9xl': ['clamp(8rem, 5rem + 15vw, 18rem)', { lineHeight: '1' }],
      // Semantic headings
      'h1': ['clamp(2rem, 1.5rem + 2.5vw, 6rem)', { lineHeight: '1.2', fontWeight: '700' }],
      'h2': ['clamp(1.75rem, 1.3rem + 2vw, 5rem)', { lineHeight: '1.3', fontWeight: '600' }],
      'h3': ['clamp(1.5rem, 1.2rem + 1.5vw, 4rem)', { lineHeight: '1.3', fontWeight: '600' }],
      'h4': ['clamp(1.25rem, 1.1rem + 1vw, 3rem)', { lineHeight: '1.4', fontWeight: '600' }],
      'h5': ['clamp(1.125rem, 1rem + 0.75vw, 2.5rem)', { lineHeight: '1.4', fontWeight: '500' }],
      'h6': ['clamp(1rem, 0.95rem + 0.5vw, 2rem)', { lineHeight: '1.5', fontWeight: '500' }],
      'body': ['clamp(1rem, 0.9rem + 0.5vw, 1.75rem)', { lineHeight: '1.6' }],
      'small': ['clamp(0.875rem, 0.85rem + 0.25vw, 1.5rem)', { lineHeight: '1.5' }],
    },
    spacing: {
      '0': '0',
      'px': '1px',
      '0.5': 'calc(100vw / 1920 * 2)',
      '1': 'calc(100vw / 1920 * 4)',
      '1.5': 'calc(100vw / 1920 * 6)',
      '2': 'calc(100vw / 1920 * 8)',
      '2.5': 'calc(100vw / 1920 * 10)',
      '3': 'calc(100vw / 1920 * 12)',
      '3.5': 'calc(100vw / 1920 * 14)',
      '4': 'calc(100vw / 1920 * 16)',
      '5': 'calc(100vw / 1920 * 20)',
      '6': 'calc(100vw / 1920 * 24)',
      '7': 'calc(100vw / 1920 * 28)',
      '8': 'calc(100vw / 1920 * 32)',
      '9': 'calc(100vw / 1920 * 36)',
      '10': 'calc(100vw / 1920 * 40)',
      '11': 'calc(100vw / 1920 * 44)',
      '12': 'calc(100vw / 1920 * 48)',
      '14': 'calc(100vw / 1920 * 56)',
      '16': 'calc(100vw / 1920 * 64)',
      '20': 'calc(100vw / 1920 * 80)',
      '24': 'calc(100vw / 1920 * 96)',
      '28': 'calc(100vw / 1920 * 112)',
      '32': 'calc(100vw / 1920 * 128)',
      '36': 'calc(100vw / 1920 * 144)',
      '40': 'calc(100vw / 1920 * 160)',
      '44': 'calc(100vw / 1920 * 176)',
      '48': 'calc(100vw / 1920 * 192)',
      '52': 'calc(100vw / 1920 * 208)',
      '56': 'calc(100vw / 1920 * 224)',
      '60': 'calc(100vw / 1920 * 240)',
      '64': 'calc(100vw / 1920 * 256)',
      '72': 'calc(100vw / 1920 * 288)',
      '80': 'calc(100vw / 1920 * 320)',
      '96': 'calc(100vw / 1920 * 384)',
    },
    extend: {
      // Font family
      fontFamily: {
        sans: ["Host Grotesk", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
      },
      // Colors
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
        },
        white: "#f4efe7",
        darkBrown: "#2a2725"
      },
      // Additional fluid spacing utilities
      spacing: {
        'fluid-5': 'calc(100vw / 1920 * 5)',
        'fluid-10': 'calc(100vw / 1920 * 10)',
        'fluid-15': 'calc(100vw / 1920 * 15)',
        'fluid-20': 'calc(100vw / 1920 * 20)',
        'fluid-25': 'calc(100vw / 1920 * 25)',
        'fluid-30': 'calc(100vw / 1920 * 30)',
        'fluid-35': 'calc(100vw / 1920 * 35)',
        'fluid-40': 'calc(100vw / 1920 * 40)',
        'fluid-50': 'calc(100vw / 1920 * 50)',
        'fluid-60': 'calc(100vw / 1920 * 60)',
        'fluid-70': 'calc(100vw / 1920 * 70)',
        'fluid-80': 'calc(100vw / 1920 * 80)',
        'fluid-100': 'calc(100vw / 1920 * 100)',
        'fluid-120': 'calc(100vw / 1920 * 120)',
        'fluid-140': 'calc(100vw / 1920 * 140)',
        'fluid-160': 'calc(100vw / 1920 * 160)',
        'fluid-200': 'calc(100vw / 1920 * 200)',
        'fluid-xs': 'calc(100vw / 1920 * 5)',
        'fluid-sm': 'calc(100vw / 1920 * 10)',
        'fluid-md': 'calc(100vw / 1920 * 20)',
        'fluid-lg': 'calc(100vw / 1920 * 40)',
        'fluid-xl': 'calc(100vw / 1920 * 60)',
        'fluid-2xl': 'calc(100vw / 1920 * 80)',
        'fluid-3xl': 'calc(100vw / 1920 * 120)',
      },
      // Fluid widths
      width: {
        'fluid-200': 'calc(100vw / 1920 * 200)',
        'fluid-300': 'calc(100vw / 1920 * 300)',
        'fluid-400': 'calc(100vw / 1920 * 400)',
        'fluid-500': 'calc(100vw / 1920 * 500)',
        'fluid-600': 'calc(100vw / 1920 * 600)',
        'fluid-800': 'calc(100vw / 1920 * 800)',
        'fluid-1000': 'calc(100vw / 1920 * 1000)',
        'fluid-1200': 'calc(100vw / 1920 * 1200)',
      },
      // Fluid heights
      height: {
        'fluid-200': 'calc(100vw / 1920 * 200)',
        'fluid-300': 'calc(100vw / 1920 * 300)',
        'fluid-400': 'calc(100vw / 1920 * 400)',
        'fluid-500': 'calc(100vw / 1920 * 500)',
        'fluid-600': 'calc(100vw / 1920 * 600)',
        'fluid-800': 'calc(100vw / 1920 * 800)',
      },
      // Fluid gaps
      gap: {
        'fluid-5': 'calc(100vw / 1920 * 5)',
        'fluid-10': 'calc(100vw / 1920 * 10)',
        'fluid-15': 'calc(100vw / 1920 * 15)',
        'fluid-20': 'calc(100vw / 1920 * 20)',
        'fluid-30': 'calc(100vw / 1920 * 30)',
        'fluid-40': 'calc(100vw / 1920 * 40)',
        'fluid-50': 'calc(100vw / 1920 * 50)',
      },
      // Fluid border radius
      borderRadius: {
        'fluid-sm': 'calc(100vw / 1920 * 4)',
        'fluid-md': 'calc(100vw / 1920 * 8)',
        'fluid-lg': 'calc(100vw / 1920 * 12)',
        'fluid-xl': 'calc(100vw / 1920 * 16)',
        'fluid-2xl': 'calc(100vw / 1920 * 24)',
      },
    },
  },
  plugins: [
    function({ matchUtilities }) {
      matchUtilities(
        {
          '@text': (value) => ({
            fontSize: `calc(${value} / 1920 * 100vw)`,
          }),
          '@w': (value) => ({
            width: `calc(${value} / 1920 * 100vw)`,
          }),
          '@h': (value) => ({
            height: `calc(${value} / 1920 * 100vw)`,
          }),
          '@min-w': (value) => ({
            minWidth: `calc(${value} / 1920 * 100vw)`,
          }),
          '@max-w': (value) => ({
            maxWidth: `calc(${value} / 1920 * 100vw)`,
          }),
          '@min-h': (value) => ({
            minHeight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@max-h': (value) => ({
            maxHeight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@p': (value) => ({
            padding: `calc(${value} / 1920 * 100vw)`,
          }),
          '@px': (value) => ({
            paddingLeft: `calc(${value} / 1920 * 100vw)`,
            paddingRight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@py': (value) => ({
            paddingTop: `calc(${value} / 1920 * 100vw)`,
            paddingBottom: `calc(${value} / 1920 * 100vw)`,
          }),
          '@pt': (value) => ({
            paddingTop: `calc(${value} / 1920 * 100vw)`,
          }),
          '@pb': (value) => ({
            paddingBottom: `calc(${value} / 1920 * 100vw)`,
          }),
          '@pl': (value) => ({
            paddingLeft: `calc(${value} / 1920 * 100vw)`,
          }),
          '@pr': (value) => ({
            paddingRight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@m': (value) => ({
            margin: `calc(${value} / 1920 * 100vw)`,
          }),
          '@mx': (value) => ({
            marginLeft: `calc(${value} / 1920 * 100vw)`,
            marginRight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@my': (value) => ({
            marginTop: `calc(${value} / 1920 * 100vw)`,
            marginBottom: `calc(${value} / 1920 * 100vw)`,
          }),
          '@mt': (value) => ({
            marginTop: `calc(${value} / 1920 * 100vw)`,
          }),
          '@mb': (value) => ({
            marginBottom: `calc(${value} / 1920 * 100vw)`,
          }),
          '@ml': (value) => ({
            marginLeft: `calc(${value} / 1920 * 100vw)`,
          }),
          '@mr': (value) => ({
            marginRight: `calc(${value} / 1920 * 100vw)`,
          }),
          '@gap': (value) => ({
            gap: `calc(${value} / 1920 * 100vw)`,
          }),
          '@gap-x': (value) => ({
            columnGap: `calc(${value} / 1920 * 100vw)`,
          }),
          '@gap-y': (value) => ({
            rowGap: `calc(${value} / 1920 * 100vw)`,
          }),
          '@top': (value) => ({
            top: `calc(${value} / 1920 * 100vw)`,
          }),
          '@bottom': (value) => ({
            bottom: `calc(${value} / 1920 * 100vw)`,
          }),
          '@left': (value) => ({
            left: `calc(${value} / 1920 * 100vw)`,
          }),
          '@right': (value) => ({
            right: `calc(${value} / 1920 * 100vw)`,
          }),
          '@inset': (value) => ({
            inset: `calc(${value} / 1920 * 100vw)`,
          }),
          '@rounded': (value) => ({
            borderRadius: `calc(${value} / 1920 * 100vw)`,
          }),
          '@border': (value) => ({
            borderWidth: `calc(${value} / 1920 * 100vw)`,
          }),
        },
        { values: {} }
      );
    },
  ],
};
