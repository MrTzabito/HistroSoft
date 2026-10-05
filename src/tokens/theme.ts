export const THEME = {
  colors: {
    brand: {
      azulHistrosoft: '#1747C9', // principal: botones, enlaces, acentos
      azulNoche: '#0B1F44', // textos principales, footer, secciones oscuras
      celesteSoporte: '#3BB3F5', // acentos sobre fondo oscuro (nunca texto sobre blanco)
      niebla: '#F4F7FB', // fondos claros alternos
      grisPizarra: '#5A6478', // textos secundarios
      blanco: '#FFFFFF',
    },
    semantic: {
      green: '#1E7B3A',
      amber: '#9A6200',
      red: '#C0352B',
      blue: '#1A6FB8',
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
