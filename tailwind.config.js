/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-gradient':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)',
      },
      boxShadow: {
        'custom':
          '8px 8px 12px 0px rgba(0, 0, 0, 0.10), 6px 6px 10px 0px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      colors: {
        gray: {
          900: '#1C1C1C',
          800: '#333333',
          700: '#555555',
          600: '#777777',
          500: '#999999',
          400: '#BBBBBB',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F4F4F4',
          50: '#FAFAFA',
        },
      },
      fontSize: {
        'sub-title-1': ['28px', { lineHeight: '150%', fontWeight: '600' }],
        'sub-title-2': ['24px', { lineHeight: '150%', fontWeight: '600' }],
        'sub-title-3': ['20px', { lineHeight: '150%', fontWeight: '600' }],
        'sub-title-4': ['16px', { lineHeight: '150%', fontWeight: '600' }],
        'body-1': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'body-2': ['14px', { lineHeight: '150%', fontWeight: '400' }],
        'body-3': ['14px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-1': ['14px', { lineHeight: '150%', fontWeight: '600' }],
        'caption-2': ['13px', { lineHeight: '120%', fontWeight: '600' }],
        'caption-3': ['13px', { lineHeight: '120%', fontWeight: '500' }],
      },
    },
  },
};
