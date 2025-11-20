import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}']
  },
  theme: {
    boxShadow: {
      'custom': `1px 1px 0px`,
      'custom-hover': `1px 1px 0`
    },
    gridTemplateRow: {
      'auto-250': 'repeat(auto-fill, 250px)'
    },
    gridTemplateColumn: {
      '4-minmax': 'repeat(4, minmax(150px, 1fr))'
    },
    colors: {
      gray: {
        50: '#E6F3F3',
        100: '#CCE7E7',
        200: '#99CFCF',
        300: '#66B7B7',
        400: '#339F9F',
        500: '#008787',
        600: '#006C6C',
        700: '#005151',
        800: '#003636',
        900: '#001B1B'
      },
      darkslate: {
        50: '#3D2A3D',
        100: '#2C1E2C',
        200: '#261A26',
        300: '#201620',
        400: '#1E0A1E',
        500: '#170817',
        600: '#140714',
        700: '#110611',
        800: '#0E050E',
        900: '#0B040B'
      },
      primary: {
        100: '#E6F7FF',
        200: '#B3E0FF',
        300: '#80C9FF',
        400: '#4DB2FF',
        500: '#1A9CFF',
        600: '#0080FF',
        700: '#0066CC',
        800: '#004D99',
        900: '#003366'
      }
    }
  },
  presets: [presetUno()],
  rules: [
    [
      'hide-scrollbar',
      {
        css: `::-webkit-scrollbar { display: none; }
            scrollbar-width: none;
            ::-ms-scrollbar { display: none; }`
      }
    ]
  ],
  shortcuts: {
    'bg-primary-500': 'bg-[var(--color-primary-500)]',
    'text-primary-500': 'text-[var(--color-primary-500)]'
  }
});
