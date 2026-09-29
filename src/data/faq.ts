import { FaqItem } from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'planes',
    question: '¿Puedo solicitar personalizaciones o módulos a la medida sobre los productos?',
    answer: 'Sí. Todos nuestros productos empaquetados cuentan con arquitectura desacoplada y base de datos relacional. Si tu operación requiere módulos adicionales, campos específicos, reportes regulatorios o conexiones con software propietario, nuestro equipo desarrolla adaptaciones a tu medida.'
  },
  {
    category: 'planes',
    question: '¿Cómo funciona la propiedad y exportación de nuestros datos?',
    answer: 'Tus datos son 100% de tu propiedad. Proveemos herramientas de respaldo automático y exportación en formatos abiertos (JSON, CSV y SQL Dump) sin bloqueos comerciales ni penalizaciones.'
  },
  {
    category: 'contratos',
    question: '¿Qué compromiso de permanencia tienen los planes mensuales y anuales?',
    answer: 'Los planes mensuales no tienen permanencia mínima y puedes cancelarlos en cualquier momento con 15 días de preaviso. Los planes anuales incluyen un 20% de descuento y soporte técnico prioritario durante los 12 meses.'
  },
  {
    category: 'tecnología',
    question: '¿Qué tipo de soporte técnico incluyen los productos?',
    answer: 'Todos nuestros planes incluyen soporte continuo por WhatsApp y correo electrónico para resolver dudas operativas, configuración inicial y atención rápida de incidencias con nuestro equipo técnico.'
  },
  {
    category: 'proyectos',
    question: '¿Cuánto tiempo toma la puesta en marcha de un producto en mi empresa?',
    answer: 'La infraestructura base se aprovisiona en menos de 48 horas. La configuración de usuarios, migración inicial de datos desde hojas de cálculo y la capacitación del equipo toma entre 1 y 2 semanas.'
  },
  {
    category: 'tecnología',
    question: '¿Pueden conectar los productos con nuestro software contable o WhatsApp?',
    answer: 'Sí. Histro Flow y nuestra suite de productos incluyen conectores nativos para WhatsApp Business API, timbrado de facturación electrónica local, pasarelas de pago y webhooks para sincronización en tiempo real.'
  }
];
