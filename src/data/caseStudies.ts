import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'distribuidora-logistica',
    clientIndustry: 'Distribución mayorista de insumos industriales',
    headline: 'Sincronización de 4 bodegas regionales y facturación en tiempo real.',
    challenge: 'Manejaban inventario y despachos mediante hojas compartidas de Excel. Las diferencias de stock provocaban retrasos de hasta 48 horas en entregas y desabastecimiento imprevisto.',
    solution: 'Desarrollamos un ERP operativo ligero en TypeScript y PostgreSQL con escaneo móvil en bodegas y timbrado fiscal automatizado por webhook.',
    results: [
      { label: 'Reducción en tiempo de despacho', metric: '-68%' },
      { label: 'Discrepancia en stock físico', metric: '< 0.3%' },
      { label: 'Disponibilidad de plataforma', metric: '99.98%' }
    ],
    duration: '12 semanas de desarrollo',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'SQLite offline'],
    clientQuote: {
      quote: 'Eliminamos las diferencias de inventario entre la bodega central y las sucursales. El personal en almacén utiliza la aplicación móvil sin dificultad técnica.',
      author: 'Carlos Echeverría',
      role: 'Director de Operaciones',
      company: 'Logística & Suministros Industriales S.A.'
    }
  },
  {
    id: 'servicios-financieros-b2b',
    clientIndustry: 'Consultoría y corretaje de crédito corporativo',
    headline: 'Trazabilidad de prospectos y automatización de expedientes de crédito.',
    challenge: 'Pérdida de cotizaciones de alto valor por falta de seguimiento oportuno y demoras de hasta 4 días en recopilar la documentación financiera de los clientes.',
    solution: 'Implementamos un CRM a la medida con portal para carga segura de estados financieros y recordatorios automáticos por WhatsApp Business API.',
    results: [
      { label: 'Aumento en prospectos calificados', metric: '+140%' },
      { label: 'Tiempo de armado de expediente', metric: '24 horas' },
      { label: 'Tasa de cierre comercial', metric: '+28%' }
    ],
    duration: '9 semanas de desarrollo',
    stack: ['Next.js', 'PostgreSQL', 'WhatsApp Cloud API', 'Redis'],
    clientQuote: {
      quote: 'Los ejecutivos pasaron de perder 2 horas diarias llenando planillas a tener todo el flujo de cotización centralizado con alertas automáticas.',
      author: 'Valeria Montero',
      role: 'Socia Directora',
      company: 'Montero & Asociados Capital'
    }
  },
  {
    id: 'empresa-construccion',
    clientIndustry: 'Constructora y desarrollo inmobiliario',
    headline: 'Control de órdenes de compra en obra sin cobertura de internet.',
    challenge: 'Las solicitudes de materiales en faena se hacían en papel o mensajes de voz, lo que generaba duplicidad de compras y retrasos en las aprobaciones de presupuesto.',
    solution: 'Aplicación móvil con sincronización local que permite a los jefes de terreno emitir requisiciones y firmas aún sin señal celular.',
    results: [
      { label: 'Aprobación de compras', metric: '4 horas' },
      { label: 'Reducción en duplicidad de pedidos', metric: '-92%' },
      { label: 'Tiempos de entrega en obra', metric: '100% en fecha' }
    ],
    duration: '10 semanas de desarrollo',
    stack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL'],
    clientQuote: {
      quote: 'La aplicación funciona exactamente igual en una faena remota sin señal que en nuestras oficinas centrales. Cuando detecta red, se sincroniza en segundos.',
      author: 'Rodrigo Albarrán',
      role: 'Gerente de Proyectos',
      company: 'Constructora Austral'
    }
  }
];
