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
      },
      animation: {
        fadein: 'fadein 1s ease-in-out',
        'fadein-2': 'fadein 2s ease-in-out',
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
