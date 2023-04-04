/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      xs: { max: '425px' },
      sm: { max: '600px' }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',

        black: '#000000',
        white: '#ffffff',

        /* Silvr palette */
        silvr: {
          light: '#EFF3F3',
          green: '#16BFA1',
          green2: '#178780',
          'dark-gray': '#222734',
          'light-gray': '#616C87',
          beige200: '#FEF0E2'
        },
        /* end Silvr */

        /* Silvr palette V2 */
        silvrV2: {
          beige100: '#FFF7EF',
          beige200: '#FEF0E2',
          beige300: '#FFE8C8',
          beige400: '#F29232',
          beige500: '#C06E14',
          blue100: '#F0F5FD',
          blue200: '#E0E6FF',
          blue300: '#CDD7FF',
          blue400: '#0653E4',
          blue500: '#0038C0',
          copper100: '#FFF2F0',
          copper200: '#FFE5E0',
          copper300: '#FFD8CF',
          copper400: '#DA532C',
          copper500: '#B43511',
          neutral000: '#FFFFFF',
          neutral100: '#F6F6F6',
          neutral200: '#ECEEF1',
          neutral300: '#CACED7',
          neutral400: '#A2AAB9',
          neutral500: '#6B7280',
          neutral600: '#4F5562',
          neutral900: '#131010',
          yellow400: '#FFDA00',
          yellow500: '#C0B500'
        },
        /* end Silvr v2 */

        accent: {
          light: '#F2F2F7',
          text: '#bcb4ea',
          default: '#986DFF',
          dark: '#5744CB',
          divider: '#614fce',
          footer: '#afa6e6',
          'footer-light': '#d5d0f2'
        },

        gray: {
          light: '#eeeff1',
          default: '#959ca4',
          dark: '#4F5A68',
          divider: '#d4d5d6',
          footer: '#a0a6b0'
        },

        'cool-gray': {
          50: '#fbfdfe',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cfd8e3',
          400: '#97a6ba',
          500: '#64748b',
          600: '#475569',
          700: '#364152',
          800: '#27303f',
          900: '#1a202e'
        },
        red: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',
          600: '#e02424',
          700: '#c81e1e',
          800: '#9b1c1c',
          900: '#771d1d'
        },
        orange: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba8c',
          400: '#ff8a4c',
          500: '#ff5a1f',
          600: '#d03801',
          700: '#b43403',
          800: '#8a2c0d',
          900: '#771d1d'
        },
        yellow: {
          50: '#fdfdea',
          100: '#fdf6b2',
          200: '#fce96a',
          300: '#faca15',
          400: '#e3a008',
          500: '#c27803',
          600: '#9f580a',
          700: '#8e4b10',
          800: '#723b13',
          900: '#633112'
        },
        green: {
          500: '#21CE99',
          400: '#58d6b9',
          300: '#81dfc6',
          200: '#a4e7d4',
          100: '#c3f0e2',
          600: '#057a55',
          700: '#046c4e',
          800: '#03543f',
          900: '#014737'
        },
        teal: {
          50: '#edfafa',
          100: '#d5f5f6',
          200: '#afecef',
          300: '#7edce2',
          400: '#16bdca',
          500: '#0694a2',
          600: '#047481',
          700: '#036672',
          800: '#05505c',
          900: '#014451'
        },
        blue: {
          50: '#ebf5ff',
          100: '#e1effe',
          200: '#c3ddfd',
          300: '#a4cafe',
          400: '#76a9fa',
          500: '#3f83f8',
          600: '#1c64f2',
          700: '#1a56db',
          800: '#1e429f',
          900: '#233876'
        },
        indigo: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#6875f5',
          600: '#5850ec',
          700: '#5145cd',
          800: '#42389d',
          900: '#362f78'
        },
        purple: {
          50: '#f6f5ff',
          100: '#edebfe',
          200: '#dcd7fe',
          300: '#cabffd',
          400: '#ac94fa',
          500: '#9061f9',
          600: '#7e3af2',
          700: '#6c2bd9',
          800: '#5521b5',
          900: '#4a1d96'
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce8f3',
          200: '#fad1e8',
          300: '#f8b4d9',
          400: '#f17eb8',
          500: '#e74694',
          600: '#d61f69',
          700: '#bf125d',
          800: '#99154b',
          900: '#751a3d'
        }
      },
      spacing: {
        px: '1px',
        0: 0,
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        40: '40px',
        44: '44px',
        48: '48px',
        52: '52px',
        56: '56px',
        60: '60px',
        64: '64px',
        80: '80px',
        88: '88px',
        120: '120px',
        200: '200px',
        264: '264px',
        560: '560px',
        600: '600px',
        680: '680px'
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        Garnett: ['Garnett', 'Raleway', 'Verdana', 'Arial', 'sans-serif'],
        Gilroy: ['Gilroy', 'Raleway', 'Verdana', 'Arial', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        sans: ['-apple-system', '"Segoe UI"', 'sans-serif'],
        serif: ['Constantia', 'Georgia', 'serif'],
        mono: ['Menlo', 'Consolas', 'monospace']
      },
      fontSize: {
        0: '0',
        xxs: '11px',
        xs: '12px',
        '2xs': '13px',
        sm: '14px',
        '2sm': '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px'
      },
      letterSpacing: theme => ({
        ...theme('width')
      }),
      lineHeight: theme => ({
        ...theme('width')
      }),
      maxWidth: theme => ({
        ...theme('width'),
        xs: '160px',
        sm: '192px',
        md: '224px',
        lg: '256px',
        xl: '288px',
        '2xl': '336px',
        '3xl': '384px',
        '4xl': '448px',
        '5xl': '512px',
        '6xl': '576px',
        '7xl': '640px'
      }),
      minHeight: theme => ({
        ...theme('width')
      }),
      minWidth: theme => ({
        ...theme('width')
      })
    }
  },
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false
  },
  plugins: [
    require('tailwindcss-mso'),
    require('tailwindcss-box-shadow'),
    require('tailwindcss-email-variants')
  ]
}
