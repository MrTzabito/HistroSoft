import { ProductDetails } from '../types';
import erpImg from '../assets/images/erp_pos_system_1790666525175.jpg';
import myYapesImg from '../assets/images/myyapes_app_ui_1790667179333.jpg';

export const PRODUCTS: ProductDetails[] = [
  {
    id: 'sistema-ventas',
    name: 'Sistema de Ventas',
    category: 'Punto de venta y negocio',
    categorySlug: 'erp-negocio',
    badge: 'Más vendido',
    imageUrl: erpImg,
    tagline: 'Control de ventas, inventario, stock y facturación para tu negocio.',
    summary: 'Sistema integral para gestionar y hacer crecer tu negocio desde un solo lugar. Permite registrar ventas rápidamente, administrar productos, controlar inventario y stock multialmacén, registrar clientes y emitir boletas, facturas o tickets de forma ágil, reduciendo errores y tiempos operativos.',
    priceMonthlyPEN: 59,
    priceMonthlyUSD: 16,
    demoVideoTitle: 'Demostración del Sistema de Ventas',
    demoHighlights: [
      'Punto de venta rápido con búsqueda ágil de productos y código de barras',
      'Control de inventario en tiempo real con alertas de stock mínimo',
      'Gestión de cobros, métodos de pago y cuadre de caja diario',
      'Reportes de ventas por día, vendedor y categorías más vendidas'
    ],
    keyCapabilities: [
      'Terminal de punto de venta rápida adaptada a pantallas táctiles y teclado',
      'Control de stock multialmacén con transferencias y kardex valorizado',
      'Emisión de comprobantes y tickets térmicos de venta',
      'Gestión de cuentas por cobrar y clientes frecuentes'
    ],
    architectureHighlights: [
      'Base de datos relacional dedicada para tu negocio',
      'Acceso web multidispositivo desde computadoras, tablets o celulares',
      'Copias de seguridad diarias y exportación completa a Excel'
    ],
    plans: [
      {
        id: 'ventas-starter',
        name: 'Starter',
        product: 'Sistema de Ventas',
        tagline: 'Ideal para pequeños negocios, bodegas o tiendas que inician.',
        monthlyPricePEN: 59,
        annualPricePEN: 49,
        monthlyPriceUSD: 16,
        annualPriceUSD: 13,
        sla: 'Soporte',
        limits: '1 caja / terminal · hasta 1 000 productos',
        idealFor: 'Comercios que buscan digitalizar su caja e inventario.',
        features: [
          'Punto de venta y emisión de tickets',
          'Control de inventario y alertas de stock',
          'Cierre y cuadre de caja diario',
          'Soporte por WhatsApp y actualizaciones continuas'
        ]
      },
      {
        id: 'ventas-pro',
        name: 'Negocio',
        product: 'Sistema de Ventas',
        tagline: 'Para negocios consolidados con mayor volumen de ventas.',
        isPopular: true,
        monthlyPricePEN: 89,
        annualPricePEN: 71,
        monthlyPriceUSD: 24,
        annualPriceUSD: 19,
        sla: 'Soporte',
        limits: 'Hasta 3 cajas / usuarios · productos ilimitados',
        idealFor: 'Tiendas comerciales, ferreterías, farmacias y distribuidoras.',
        features: [
          'Todo lo del plan Starter',
          'Hasta 3 cajas simultáneas y control de turnos',
          'Gestión de clientes y cuentas por cobrar',
          'Reportes analíticos de rentabilidad y exportación Excel',
          'Soporte prioritario por WhatsApp'
        ]
      },
      {
        id: 'ventas-empresa',
        name: 'Empresa',
        product: 'Sistema de Ventas',
        tagline: 'Para empresas multitienda o con requerimientos avanzados.',
        monthlyPricePEN: 149,
        annualPricePEN: 119,
        monthlyPriceUSD: 40,
        annualPriceUSD: 32,
        sla: 'Soporte',
        limits: 'Multisede / cajas ilimitadas · usuarios ilimitados',
        idealFor: 'Cadenas comerciales y negocios con múltiples sucursales.',
        features: [
          'Todo lo del plan Negocio',
          'Cajas y usuarios ilimitados',
          'Control de múltiples almacenes y sucursales',
          'Módulos a medida y roles avanzados de permisos',
          'Soporte técnico directo preferencial'
        ]
      }
    ]
  },
  {
    id: 'mipaguito',
    name: 'MiPaguito',
    category: 'Herramientas',
    categorySlug: 'herramientas',
    badge: 'Destacado',
    imageUrl: myYapesImg,
    tagline: 'Registro de Yapes de clientes con envío a Excel y WhatsApp para tu equipo.',
    summary: 'Herramienta para registrar Yapes de clientes de manera automática y confiable. Captura cada comprobante de pago recibido y lo envía al instante a una hoja de cálculo en Excel o por WhatsApp a tus trabajadores en tienda o mostrador, para que confirmen los pagos reales en segundos y eviten estafas con comprobantes falsos.',
    priceMonthlyPEN: 39,
    priceMonthlyUSD: 11,
    demoVideoTitle: 'Demostración de MyYapes - Registro y confirmación de pagos',
    demoHighlights: [
      'Registro automático e instantáneo de pagos por Yape de clientes',
      'Envío y sincronización directa a Excel o Google Sheets en tiempo real',
      'Notificación inmediata por WhatsApp para que los trabajadores validen el pago en mostrador',
      'Prevención total de estafas con capturas falsas o comprobantes adulterados'
    ],
    keyCapabilities: [
      'Detección y registro ordenado de transferencias Yape con monto, fecha y titular',
      'Envío a grupos de WhatsApp de trabajadores o cajeros asignados',
      'Sincronización automática con hojas de cálculo Excel / Google Drive',
      'Panel web con historial diario de ingresos y buscador por cliente o código'
    ],
    architectureHighlights: [
      'Conexión segura y cifrado TLS para recepción de datos',
      'Integración con WhatsApp Webhook / API para reenvíos automáticos',
      'Sin requerimientos de hardware especial: funciona en cualquier celular o PC'
    ],
    plans: [
      {
        id: 'myyapes-starter',
        name: 'Básico',
        product: 'MyYapes',
        tagline: 'Para pequeños locales o vendedores con 1 cuenta de cobro.',
        monthlyPricePEN: 29,
        annualPricePEN: 23,
        monthlyPriceUSD: 8,
        annualPriceUSD: 6,
        sla: 'Soporte',
        limits: '1 número / cuenta Yape · 1 grupo de trabajadores',
        idealFor: 'Tiendas, puestos, cafeterías y pequeños comercios.',
        features: [
          'Registro de Yapes recibidos en tiempo real',
          'Envío automático a Excel / Google Sheets',
          'Notificación de confirmación a WhatsApp de trabajadores',
          'Soporte por WhatsApp para configuración inicial'
        ]
      },
      {
        id: 'myyapes-pro',
        name: 'Pro',
        product: 'MyYapes',
        tagline: 'Para negocios con alto flujo de pagos y varios cajeros.',
        isPopular: true,
        monthlyPricePEN: 49,
        annualPricePEN: 39,
        monthlyPriceUSD: 13,
        annualPriceUSD: 10,
        sla: 'Soporte',
        limits: 'Hasta 3 cuentas Yape · Múltiples grupos de WhatsApp',
        idealFor: 'Restaurantes, minimarkets, ferreterías y tiendas de ropa.',
        features: [
          'Todo lo del plan Básico',
          'Hasta 3 números Yape sincronizados',
          'Envío a múltiples chats o grupos de WhatsApp por local',
          'Panel web con resumen de caja diario y filtros de búsqueda',
          'Soporte prioritario por WhatsApp'
        ]
      },
      {
        id: 'myyapes-unlimited',
        name: 'Empresa',
        product: 'MyYapes',
        tagline: 'Para empresas con múltiples sucursales o franquicias.',
        monthlyPricePEN: 79,
        annualPricePEN: 63,
        monthlyPriceUSD: 21,
        annualPriceUSD: 17,
        sla: 'Soporte',
        limits: 'Cuentas Yape ilimitadas · Múltiples locales y trabajadores',
        idealFor: 'Cadenas comerciales y negocios con varios puntos de venta.',
        features: [
          'Todo lo del plan Pro',
          'Cuentas Yape y grupos ilimitados',
          'Separación de ingresos por local o sucursal',
          'Conexión directa con tu sistema de ventas vía webhook o API',
          'Soporte técnico preferencial y asesoría personalizada'
        ]
      }
    ]
  }
];
