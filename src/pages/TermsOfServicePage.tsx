import React from 'react';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export const TermsOfServicePage: React.FC = () => {
  const lastUpdated = 'Octubre 2024';

  return (
    <section className="py-12 md:py-16 bg-[color:var(--surface-page)]">
      <Container>
        <SectionHeader
          title="Términos de Servicio"
          description={`Última actualización: ${lastUpdated}`}
        />

        <div className="max-w-4xl mx-auto prose prose-invert space-y-8 text-[color:var(--text-secondary)]">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar los servicios de HistroSoft S.A.C. (en adelante "la Empresa"),
              usted acepta estar vinculado por estos Términos de Servicio. Si no está de acuerdo
              con alguna parte de estos términos, no podrá utilizar nuestros servicios.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">2. Descripción del Servicio</h2>
            <p>
              HistroSoft S.A.C. proporciona consultoría de software, desarrollo de aplicaciones,
              sistemas de gestión empresarial y soluciones tecnológicas personalizadas.
              Los servicios se entregan conforme a los términos específicos acordados en cada contrato individual.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">3. Licencia y Uso Permitido</h2>
            <p>
              Se otorga licencia limitada, no exclusiva y revocable para acceder y utilizar nuestros
              servicios únicamente para propósitos autorizados. Usted se compromete a no:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modificar, copiar o distribuir nuestro software sin autorización</li>
              <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
              <li>Usar nuestros servicios para fines ilícitos o no autorizados</li>
              <li>Transferir los derechos de licencia a terceros sin consentimiento escrito</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">4. Información del Usuario</h2>
            <p>
              Usted es responsable de proporcionar información precisa y actualizada durante el registro
              y uso de nuestros servicios. Esto incluye nombre, email, teléfono e información de contacto.
              Garantiza que toda la información proporcionada es verdadera y autoriza a la Empresa a
              usar esta información conforme a nuestra Política de Privacidad.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">5. Planes y Precios</h2>
            <p>
              Los precios mostrados en nuestro sitio web están en Soles Peruanos (S/). Nos reservamos
              el derecho de cambiar precios con notificación previa. Los cambios no afectarán a
              suscripciones activas hasta su próximo período de renovación.
            </p>
            <p>
              Las suscripciones son recurrentes según el ciclo facturado (mensual o anual).
              Para cancelar, debe notificar por escrito con al menos 5 días de anticipación.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">6. Pagos y Facturación</h2>
            <p>
              Los pagos se procesan a través de medios seguros (Yape, Plin, transferencia bancaria).
              Usted autoriza a HistroSoft a cobrar el monto acordado en su tarjeta registrada o cuenta.
              La Empresa emitirá comprobantes de pago (boletas o facturas) según corresponda.
            </p>
            <p>
              En caso de falta de pago, se suspenderá el acceso a los servicios hasta la regularización.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">7. Garantía Limitada</h2>
            <p>
              Los servicios se proporcionan "tal cual". Aunque nos esforzamos por mantener
              disponibilidad y funcionalidad, no garantizamos que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Los servicios estarán disponibles sin interrupciones</li>
              <li>Los servicios funcionarán sin errores</li>
              <li>Se corregirán todos los defectos reportados</li>
            </ul>
            <p className="mt-4">
              Para garantías específicas, consulte nuestro Acuerdo SLA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">8. Limitación de Responsabilidad</h2>
            <p>
              EN NINGÚN CASO HISTROSOFT S.A.C. SERÁ RESPONSABLE POR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pérdidas de ganancias, ingresos o datos</li>
              <li>Daños incidentales, indirectos o consecuentes</li>
              <li>Interrupciones del negocio del usuario</li>
            </ul>
            <p className="mt-4">
              La responsabilidad total de la Empresa no excederá el monto pagado por el usuario
              en los últimos 12 meses.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">9. Propiedad Intelectual</h2>
            <p>
              Todo contenido, software, diseños y funcionalidades de HistroSoft son propiedad
              intelectual de la Empresa. Usted no adquiere derechos de propiedad, solo
              licencia de uso limitada conforme a estos términos.
            </p>
            <p>
              Los trabajos derivados, personalizaciones o desarrollos específicos según contrato
              serán propiedad de la Empresa, a menos que se acuerde lo contrario por escrito.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">10. Confidencialidad</h2>
            <p>
              Ambas partes se comprometen a mantener confidencial la información
              comercial sensible compartida durante la prestación del servicio.
              Esta obligación no aplica a información de dominio público.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">11. Terminación</h2>
            <p>
              La Empresa se reserva el derecho de suspender o terminar servicios si:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hay incumplimiento grave de estos términos</li>
              <li>Se detecta uso fraudulento o ilícito</li>
              <li>Hay falta de pago persistente</li>
              <li>El usuario viola derechos de terceros</li>
            </ul>
            <p className="mt-4">
              En caso de terminación, se reembolsarán montos pagados por servicios no utilizados,
              conforme a las políticas aplicables.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">12. Modificaciones de Términos</h2>
            <p>
              HistroSoft se reserva el derecho de modificar estos términos en cualquier momento.
              Los cambios se notificarán por email. El uso continuado de los servicios
              implica aceptación de los términos modificados.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">13. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos de Servicio se rigen por las leyes de la República del Perú.
              Cualquier disputa se resolverá ante los juzgados competentes de Lima, Perú,
              renunciando ambas partes a forum no conveniens.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">14. Contacto y Soporte</h2>
            <p>
              Para consultas sobre estos términos, contacte a:
            </p>
            <div className="bg-[color:var(--surface-sunken)] p-4 rounded-lg mt-3">
              <p className="font-semibold">HistroSoft S.A.C.</p>
              <p>Email: histrosoft.negocios@hotmail.com</p>
              <p>Disponible de lunes a viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="bg-[color:var(--accent-subtle)] border border-[color:var(--accent)] p-4 rounded-lg mt-8">
            <p className="text-sm text-[color:var(--text-secondary)]">
              <strong>Nota Legal:</strong> Este documento es de naturaleza general.
              Para asesoramiento legal específico, recomendamos consultar con un abogado.
              HistroSoft S.A.C. no es responsable por interpretaciones incorrectas de este documento.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
