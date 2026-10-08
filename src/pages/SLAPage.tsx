import React from 'react';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export const SLAPage: React.FC = () => {
  const lastUpdated = 'Octubre 2024';

  return (
    <section className="py-12 md:py-16 bg-[color:var(--surface-page)]">
      <Container>
        <SectionHeader
          title="Acuerdo de Nivel de Servicio (SLA)"
          description={`Última actualización: ${lastUpdated}`}
        />

        <div className="max-w-4xl mx-auto prose prose-invert space-y-8 text-[color:var(--text-secondary)]">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">1. Definición y Alcance</h2>
            <p>
              Este Acuerdo de Nivel de Servicio (SLA) define los estándares de disponibilidad
              y rendimiento que HistroSoft S.A.C. se compromete a proporcionar para sus servicios.
              Aplica a todos los planes de suscripción activos.
            </p>
            <p>
              El SLA es vinculante entre HistroSoft S.A.C. y el cliente. Las excepciones se
              detallan en la sección 5 de este documento.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">2. Métricas de Disponibilidad</h2>

            <div className="bg-[color:var(--surface-sunken)] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-4">
                Garantía de Disponibilidad por Plan
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[color:var(--text-primary)]">Plan Básico</p>
                  <p>Disponibilidad: 95% mensual</p>
                  <p className="text-sm text-[color:var(--text-faint)]">Tiempo de inactividad permitido: ~36 horas/mes</p>
                </div>

                <div>
                  <p className="font-semibold text-[color:var(--text-primary)]">Plan Profesional</p>
                  <p>Disponibilidad: 98% mensual</p>
                  <p className="text-sm text-[color:var(--text-faint)]">Tiempo de inactividad permitido: ~14.4 horas/mes</p>
                </div>

                <div>
                  <p className="font-semibold text-[color:var(--text-primary)]">Plan Empresarial</p>
                  <p>Disponibilidad: 99% mensual</p>
                  <p className="text-sm text-[color:var(--text-faint)]">Tiempo de inactividad permitido: ~7.2 horas/mes</p>
                </div>

                <div>
                  <p className="font-semibold text-[color:var(--text-primary)]">Plan Personalizado</p>
                  <p>Disponibilidad: Según contrato específico</p>
                  <p className="text-sm text-[color:var(--text-faint)]">Contactar para detalles</p>
                </div>
              </div>
            </div>

            <p className="mt-4">
              <strong>Nota:</strong> La disponibilidad se mide como el porcentaje de tiempo
              que el servicio es accesible durante un mes calendario (de 00:00 a 23:59 UTC-5).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">3. Tiempos de Respuesta a Incidentes</h2>

            <div className="bg-[color:var(--surface-sunken)] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-4">
                Tiempos de Atención por Severidad
              </h3>

              <div className="space-y-3">
                <div className="border-b border-[color:var(--border-subtle)] pb-3">
                  <p className="font-semibold text-red-400">Crítico (Severidad 1)</p>
                  <p>Sistema completamente inoperativo</p>
                  <p className="text-sm">Respuesta: 1 hora | Resolución: 4 horas</p>
                </div>

                <div className="border-b border-[color:var(--border-subtle)] pb-3">
                  <p className="font-semibold text-orange-400">Alto (Severidad 2)</p>
                  <p>Funcionalidad principal afectada</p>
                  <p className="text-sm">Respuesta: 4 horas | Resolución: 8 horas</p>
                </div>

                <div className="border-b border-[color:var(--border-subtle)] pb-3">
                  <p className="font-semibold text-yellow-400">Medio (Severidad 3)</p>
                  <p>Funcionalidad parcial afectada</p>
                  <p className="text-sm">Respuesta: 8 horas | Resolución: 24 horas</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-400">Bajo (Severidad 4)</p>
                  <p>Problemas menores o consultas</p>
                  <p className="text-sm">Respuesta: 24 horas | Resolución: 5 días hábiles</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-[color:var(--text-faint)]">
              * Tiempos en horas hábiles (lunes a viernes, 9:00 AM - 6:00 PM, Hora Perú)
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">4. Reporte de Incidentes</h2>
            <p>
              Para reportar un incidente, contacte al equipo de soporte:
            </p>
            <div className="bg-[color:var(--surface-sunken)] p-4 rounded-lg">
              <p className="font-semibold">Email: soporte@histrosoft.com</p>
              <p>Teléfono: +51 (1) XXXX-XXXX (a confirmar)</p>
              <p className="text-sm text-[color:var(--text-faint)] mt-2">
                Disponible: Lunes a viernes, 9:00 AM - 6:00 PM (Hora Perú)
              </p>
            </div>
            <p className="mt-4">
              Por favor proporcione: descripción detallada del problema, pasos para reproducir,
              capturas de pantalla y cualquier mensaje de error.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">5. Exclusiones y Excepciones</h2>
            <p>
              HistroSoft S.A.C. NO será responsable de incumplimientos del SLA en caso de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Desastres naturales, actos de Dios o eventos de fuerza mayor</li>
              <li>Ataques cibernéticos o problemas de seguridad no atribuibles a la Empresa</li>
              <li>Fallos de conectividad o servicios de terceros (ISP, DNS, hosting)</li>
              <li>Problemas causados por uso indebido del cliente o violación de términos</li>
              <li>Mantenimiento programado comunicado con al menos 48 horas de anticipación</li>
              <li>Interrupciones causadas por configuración incorrecta del cliente</li>
              <li>Restricciones de la autoridad regulatoria o legal peruana</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">6. Mantenimiento Programado</h2>
            <p>
              HistroSoft S.A.C. puede realizar mantenimiento programado que requiera
              suspensión temporal del servicio. El mantenimiento se realiza típicamente:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Ventana:</strong> Domingos, 2:00 AM - 6:00 AM (Hora Perú)</li>
              <li><strong>Frecuencia:</strong> Máximo 2 veces al mes</li>
              <li><strong>Duración típica:</strong> 2 horas</li>
              <li><strong>Notificación:</strong> Mínimo 5 días de anticipación</li>
            </ul>
            <p className="mt-4">
              El mantenimiento programado no se contabiliza contra el SLA de disponibilidad.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">7. Créditos por Incumplimiento</h2>
            <p>
              Si HistroSoft incumple el SLA de disponibilidad en un mes, el cliente
              tendrá derecho a un crédito en su cuenta:
            </p>

            <div className="bg-[color:var(--surface-sunken)] p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>95-98% disponibilidad: Crédito del 5%</li>
                <li>90-95% disponibilidad: Crédito del 10%</li>
                <li>85-90% disponibilidad: Crédito del 25%</li>
                <li>Menor a 85%: Crédito del 50% o cancelación sin penalidad</li>
              </ul>
            </div>

            <p className="mt-4">
              El crédito se aplicará al próximo período de facturación.
              Para reclamar, contacte a soporte dentro de 30 días del incidente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">8. Responsabilidades del Cliente</h2>
            <p>
              Para mantener el SLA, el cliente debe:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Usar el servicio de acuerdo con los Términos de Servicio</li>
              <li>Mantener contraseñas seguras y confidenciales</li>
              <li>Reportar incidentes oportunamente</li>
              <li>Proporcionar acceso a información necesaria para diagnosticar problemas</li>
              <li>Actualizar información de contacto y pago regularmente</li>
              <li>Respaldar datos críticos regularmente</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">9. Cambios al SLA</h2>
            <p>
              HistroSoft S.A.C. se reserva el derecho de modificar este SLA.
              Cambios significativos se comunicarán con 30 días de anticipación.
              Los cambios que mejoren el servicio pueden implementarse inmediatamente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">10. Limitaciones de Responsabilidad</h2>
            <p>
              El crédito del SLA es el único recurso disponible por incumplimiento
              de disponibilidad. HistroSoft NO será responsable por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pérdidas de ganancias o ingresos del cliente</li>
              <li>Daños indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos o información (el cliente es responsable de backups)</li>
              <li>Interrupciones del negocio del cliente</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">11. Monitoreo y Reporte</h2>
            <p>
              HistroSoft S.A.C. monitorea continuamente la disponibilidad del servicio
              mediante sistemas automatizados. Se genera un reporte mensual de disponibilidad
              que se pone a disposición del cliente.
            </p>
            <p>
              El cliente puede acceder a un dashboard en tiempo real que muestra
              el estado del servicio y el historial de incidentes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">12. Resolución de Disputas</h2>
            <p>
              En caso de disputa sobre incumplimiento del SLA, se seguirá el siguiente proceso:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Cliente notifica a soporte por escrito dentro de 30 días</li>
              <li>HistroSoft investiga y responde dentro de 10 días hábiles</li>
              <li>Si persiste la disputa, se escala a nivel gerencial</li>
              <li>Resolución final conforme a leyes peruanas</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">13. Contacto y Soporte</h2>
            <div className="bg-[color:var(--surface-sunken)] p-4 rounded-lg">
              <p className="font-semibold">HistroSoft S.A.C.</p>
              <p>Email: histrosoft.negocios@hotmail.com</p>
              <p>Horario: Lunes a viernes, 9:00 AM - 6:00 PM (Hora Perú)</p>
            </div>
          </div>

          <div className="bg-[color:var(--accent-subtle)] border border-[color:var(--accent)] p-4 rounded-lg mt-8">
            <p className="text-sm text-[color:var(--text-secondary)]">
              <strong>Nota Legal:</strong> Este SLA es de naturaleza general.
              Para clientes con contrato personalizado, aplican los términos específicos del contrato.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
