const plugin = require('tailwindcss/plugin');
type Utilities = {
  [key: string]:
    | string
    | Record<string, string>
    | { [key: string]: string }
    | Array<Record<string, string>>;
};
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ciment-pattern':
          "url('https://res.cloudinary.com/dmowpence/image/upload/v1702444372/tqbjkwtjixze9y05zc4b.avif')",
      },
      fontFamily: {
        lalezar: ['Lalezar'],
        gasoek: ['Gasoek One'],
        blackhansans: ['Black Han Sans'],
      },
      keyframes: {
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        titlemove: {
          from: { top: '0' },
          to: { top: '-40%' },
        },
      },
      animation: {
        fadein: 'fadein 1s ease-in-out',
        test: 'titlemove 1s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),

    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Utilities) => void;
    }) {
      addUtilities({
        '.content-area': {
          '@apply flex h-screen w-screen border-2 border-red-600 p-5': '',
        },
        '.center-layout': {
          '@apply grid h-screen w-screen place-items-center border-2 border-red-600 p-5':
            '',
        },
      });
    }),
  ],
};
