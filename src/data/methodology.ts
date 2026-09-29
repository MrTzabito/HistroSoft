import { MethodologyStage } from '../types';

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    step: '01',
    title: 'Evaluación técnica y alcance de requerimientos',
    duration: '48 horas a 1 semana',
    description: 'Revisamos tu flujo operativo, el volumen de datos actual y los roles de usuario. Definimos si tu empresa requiere un plan estándar o adaptaciones de software a la medida antes de comenzar.',
    keyMilestones: [
      'Sesión de diagnóstico técnico con un ingeniero de software',
      'Definición de usuarios, sucursales y permisos de acceso',
      'Identificación de integraciones requeridas (WhatsApp, facturación, ERP previo)',
      'Confirmación de cronograma de habilitación y costos fijos'
    ],
    deliverableDocument: 'Plan de despliegue y matriz de parámetros de la empresa'
  },
  {
    step: '02',
    title: 'Aprovisionamiento de infraestructura y configuración',
    duration: '1 a 2 semanas',
    description: 'Instalamos tu entorno aislado en la nube con base de datos PostgreSQL dedicada, certificados de seguridad y parametrización de flujos de trabajo.',
    keyMilestones: [
      'Aprovisionamiento de servidor en la nube con redundancia',
      'Configuración de dominio corporativo y cifrado TLS 1.3',
      'Modelado de esquemas y reglas de negocio de la empresa',
      'Validación de conexiones API y webhooks activos'
    ],
    deliverableDocument: 'Credenciales maestras de acceso y reporte de aprovisionamiento'
  },
  {
    step: '03',
    title: 'Migración de datos históricos y capacitación',
    duration: '1 a 2 semanas',
    description: 'Importamos tu catálogo, clientes, inventario o expedientes previos desde Excel o sistemas anteriores. Entrenamos a tu equipo de trabajo en sesiones guiadas.',
    keyMilestones: [
      'Limpieza, formateo y carga masiva de datos existentes',
      'Pruebas de integridad relacional en entorno de prueba (staging)',
      'Talleres de capacitación operativa grabados para tu equipo',
      'Acompañamiento en vivo durante las primeras transacciones reales'
    ],
    deliverableDocument: 'Bitácora de migración validada y manuales de usuario'
  },
  {
    step: '04',
    title: 'Paso a producción y soporte SLA 99.9%',
    duration: 'Continuo durante la suscripción',
    description: 'Tu sistema queda operativo al 100%. Nuestro equipo monitorea el rendimiento, aplica respaldos automáticos y atiende consultas técnicas mediante canal preferente.',
    keyMilestones: [
      'Monitoreo activo de disponibilidad y tiempos de respuesta',
      'Copias de seguridad automáticas cada 24 horas con retención externa',
      'Atención prioritaria de incidencias en menos de 4 horas hábiles',
      'Actualizaciones continuas de seguridad y mejoras de plataforma'
    ],
    deliverableDocument: 'Acuerdo de nivel de servicio (SLA) firmado y canal directo de soporte'
  }
];
