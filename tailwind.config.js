/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: { 100: '#444', 200: '#33333d', 300: '#222f3a' },
        darkgray: { 100: '#ababab', 200: '#9a9a9a' },
        ghostwhite: '#f4f6fa',
        dimgray: '#575757',
        black: '#000',
        white: '#fff',
        mediumslateblue: '#6062f6',
        forestgreen: '#1a9730',
        honeydew: '#e2ffe7',
        orangered: '#d21305',
        mistyrose: '#ffe2d8',
        gray: { 100: '#fafafa', 200: '#898989', 300: '#7d7d7d' },
        royalblue: { 100: '#275de7', 200: '#184bb9' },
        whitesmoke: { 100: '#f1f1f1', 200: '#f0f0f0' },
        silver: '#bcbcbc',
      },
      fontFamily: {
        pretendard: 'Pretendard',
        // 'gmarket-sans-ttf': "'Gmarket Sans TTF'",
        // 'noto-sans-kr': "'Noto Sans KR'",
      },
      borderRadius: {},
    },
    fontSize: {
      xs: '0.8rem',
      sm: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  corePlugins: { preflight: false },
};
