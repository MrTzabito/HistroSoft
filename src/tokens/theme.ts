export const THEME = {
  colors: {
    night: {
      950: '#0D0D0F', // page background
      900: '#121214', // sunken alternate
      850: '#17171A', // cards / raised
      800: '#1F1F23', // footer / principles
      750: '#26262B',
      700: '#2B2B30', // hairline borders
      600: '#3A3A40', // default border
      500: '#4A4A52', // section tops / strong border
    },
    sand: {
      50: '#F2EEE6', // primary text
      200: '#D8D3C9', // secondary text
      400: '#B5B0A6', // muted
      500: '#8C877E', // border hover
      600: '#6B675F', // disabled
    },
    gold: {
      300: '#FFD36B', // hover
      500: '#F5B82E', // brand accent
      600: '#E0A21A', // active/pressed
      ink: '#17130A', // text on gold
      soft: '#2A2316', // gold subtle tint
    },
    semantic: {
      green: '#8FD694',
      amber: '#F5C860',
      red: '#F28B82',
      blue: '#7CC4FF',
    }
  },
  layout: {
    containerMax: '1200px',
    containerPad: '32px',
    gridGutter: '24px',
    sectionY: '128px',
  },
  timing: {
    hover: '120ms',
    ui: '200ms',
    dialog: '320ms',
    bezier: 'cubic-bezier(.2,0,0,1)',
  }
} as const;
