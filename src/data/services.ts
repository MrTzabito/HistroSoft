import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-platforms',
    number: '01',
    title: 'Páginas web y portales de alto rendimiento',
    shortDescription: 'Sitios corporativos, plataformas de clientes y catálogos interactivos construidos para cargar en menos de 800ms con arquitectura moderna.',
    fullDescription: 'Desarrollamos interfaces web con renderizado híbrido (SSR/SSG), arquitectura modular y optimización técnica para indexación en buscadores. Todo el código fuente pasa a ser propiedad total de tu empresa tras la entrega.',
    deliverables: [
      'Arquitectura Next.js o Astro con TypeScript estricto',
      'Panel de control estructurado o integración con CMS headless',
      'Auditoría Lighthouse con puntaje superior a 95 en rendimiento y accesibilidad',
      'Pipeline de despliegue continuo (CI/CD) en infraestructura Cloud'
    ],
    timeline: 'Entre 4 y 8 semanas',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    metrics: '< 800ms tiempo de carga'
  },
  {
    id: 'custom-crm',
    number: '02',
    title: 'CRM a la medida y gestión comercial',
    shortDescription: 'Sistemas centrales de gestión de prospectos, cotizaciones y seguimiento de embudos comerciales adaptados al flujo exacto de tu equipo.',
    fullDescription: 'Diseñamos sistemas CRM que eliminan el desorden de hojas de cálculo y la rigidez de plataformas genéricas. Integramos canales de entrada como WhatsApp API, formularios web y telefonía IP con trazabilidad total.',
    deliverables: [
      'Embudo comercial con etapas configurables y asignación automática',
      'Generador de cotizaciones en PDF con catálogo sincronizado',
      'Integración bidireccional con WhatsApp Business API y correo corporativo',
      'Reportes de conversión y rendimiento por ejecutivo con corte diario'
    ],
    timeline: 'Entre 8 y 12 semanas',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: 'Trazabilidad 100% de prospectos'
  },
  {
    id: 'custom-erp',
    number: '03',
    title: 'ERP y control operativo interno',
    shortDescription: 'Plataformas de inventario, compras, facturación electrónica y logística para coordinar sucursales y bodegas en tiempo real.',
    fullDescription: 'Conectamos la operación física con el control contable y administrativo. Creamos módulos independientes para control de existencias, órdenes de trabajo, emisión fiscal y roles jerárquicos con auditoría estricta de cambios.',
    deliverables: [
      'Control de existencias multi-bodega con alertas de punto de reorden',
      'Módulo de compras, recepción de proveedores y cuentas por pagar',
      'Facturación electrónica local y conciliación de pagos',
      'Registro inmutable de auditoría para cada transacción'
    ],
    timeline: 'Entre 12 y 16 semanas',
    techStack: ['TypeScript', 'FastAPI / NestJS', 'PostgreSQL', 'RabbitMQ'],
    metrics: 'Conciliación en tiempo real'
  },
  {
    id: 'mobile-apps',
    number: '04',
    title: 'Aplicaciones móviles para iOS y Android',
    shortDescription: 'Aplicaciones nativas y multiplataforma con soporte fuera de línea para personal en terreno, logística o clientes finales.',
    fullDescription: 'Construimos herramientas móviles robustas con sincronización de datos cuando se restablece la conexión. Ideales para supervisores de obra, repartidores, técnicos en ruta o servicios de suscripción a clientes.',
    deliverables: [
      'Aplicación para iOS y Android desde un código base unificado',
      'Almacenamiento local con sincronización en segundo plano',
      'Geolocalización, captura de firmas digitales y lectura de códigos de barra',
      'Publicación en App Store y Google Play con soporte en revisiones'
    ],
    timeline: 'Entre 10 y 14 semanas',
    techStack: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
    metrics: 'Operación 100% offline-ready'
  },
  {
    id: 'automation-flows',
    number: '05',
    title: 'Automatizaciones e integración de sistemas',
    shortDescription: 'Conexión de sistemas desconectados mediante webhooks, microservicios y flujos desatendidos para eliminar tareas manuales repetitivas.',
    fullDescription: 'Automatizamos la transferencia de información entre pasarelas de pago, software contable, planillas y servicios en la nube. Diseñamos mecanismos de reintentos seguros y registro de errores con alertas inmediatas.',
    deliverables: [
      'Flujos desatendidos para conciliación bancaria y facturas',
      'Conexión vía API entre sistemas legacy y plataformas en la nube',
      'Panel de monitoreo de eventos con registro de transacciones fallidas',
      'Documentación técnica y diagramas de flujo de datos'
    ],
    timeline: 'Entre 3 y 6 semanas',
    techStack: ['n8n Enterprise', 'Node.js', 'Python', 'Webhooks / REST'],
    metrics: '0 intervención humana en rutinas'
  }
];
