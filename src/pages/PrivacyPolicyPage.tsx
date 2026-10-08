import React from 'react';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'Octubre 2024';

  return (
    <section className="py-12 md:py-16 bg-[color:var(--surface-page)]">
      <Container>
        <SectionHeader
          title="Política de Privacidad"
          description={`Última actualización: ${lastUpdated}`}
        />

        <div className="max-w-4xl mx-auto prose prose-invert space-y-8 text-[color:var(--text-secondary)]">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">1. Introducción</h2>
            <p>
              HistroSoft S.A.C. ("la Empresa") se compromete a proteger su privacidad.
              Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y
              protegemos su información cuando utiliza nuestros servicios y sitio web.
            </p>
            <p>
              Por favor, lea esta política cuidadosamente. Si no está de acuerdo con nuestras
              prácticas de privacidad, no use nuestros servicios.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">2. Información que Recopilamos</h2>
            <p>
              Recopilamos información de la siguiente manera:
            </p>

            <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">2.1 Información Proporcionada Directamente</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos de registro:</strong> Nombre, email, teléfono, empresa</li>
              <li><strong>Información de contacto:</strong> Dirección, ubicación geográfica</li>
              <li><strong>Información de pago:</strong> Datos bancarios, historial de compras</li>
              <li><strong>Comunicaciones:</strong> Mensajes de soporte, consultas, feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mt-4">2.2 Información Recopilada Automáticamente</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo en sitio, clics</li>
              <li><strong>Información del dispositivo:</strong> Tipo de navegador, IP, sistema operativo</li>
              <li><strong>Cookies y tecnologías similares:</strong> Para mejorar experiencia</li>
              <li><strong>Logs de acceso:</strong> Fecha, hora y duración de acceso a servicios</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">3. Uso de Información</h2>
            <p>
              Usamos su información para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Procesar pagos y transacciones</li>
              <li>Enviar comunicaciones y actualizaciones sobre el servicio</li>
              <li>Responder consultas y brindar soporte técnico</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Detectar y prevenir fraude o abuso</li>
              <li>Realizar análisis estadísticos y mejorar nuestro sitio web</li>
              <li>Enviar promociones (solo con consentimiento previo)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">4. Compartir Información</h2>
            <p>
              HistroSoft S.A.C. NO vende ni alquila su información personal a terceros.
              Sin embargo, compartimos información en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Proveedores de servicios:</strong> Empresas de hosting, pago y análisis que nos ayudan a operar</li>
              <li><strong>Cumplimiento legal:</strong> Cuando requerido por autoridades peruanas</li>
              <li><strong>Protección de derechos:</strong> Para proteger derechos, privacidad o seguridad</li>
              <li><strong>Transferencia empresarial:</strong> En caso de fusión o venta (con notificación previa)</li>
            </ul>
            <p className="mt-4">
              Todos los proveedores terceros están obligados contractualmente a mantener
              la confidencialidad de su información.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">5. Seguridad de Datos</h2>
            <p>
              HistroSoft S.A.C. implementa medidas de seguridad técnicas, administrativas
              y físicas para proteger su información contra acceso no autorizado, alteración,
              divulgación o destrucción. Estas incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encriptación SSL/TLS para transmisión de datos</li>
              <li>Almacenamiento seguro de contraseñas con hash</li>
              <li>Acceso restringido a información personal por empleados autorizados</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Monitoreo continuo de vulnerabilidades</li>
            </ul>
            <p className="mt-4">
              Sin embargo, ningún sistema de seguridad es 100% impenetrable.
              Si se detecta una violación de seguridad, la notificaremos según lo requerido por ley.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">6. Retención de Datos</h2>
            <p>
              Retenemos su información personal durante el tiempo que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sea necesario para proporcionar servicios</li>
              <li>Esté activa su cuenta o servicio</li>
              <li>Sea requerido por leyes peruanas (p. ej., registros contables por 6 años)</li>
              <li>Sea necesario para resolver disputas o hacer valer derechos</li>
            </ul>
            <p className="mt-4">
              Puede solicitar la eliminación de sus datos en cualquier momento,
              sujeto a obligaciones legales de retención.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">7. Sus Derechos</h2>
            <p>
              De conformidad con la Ley 29733 (Ley de Protección de Datos Personales en Perú),
              usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Acceso:</strong> Solicitar copia de sus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Solicitar borrado de sus datos (derecho al olvido)</li>
              <li><strong>Oposición:</strong> Rechazar el procesamiento de datos para ciertos fines</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctenos a: <strong>histrosoft.negocios@hotmail.com</strong>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">8. Cookies y Tecnologías de Rastreo</h2>
            <p>
              Nuestro sitio web utiliza cookies para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Recordar preferencias de usuario</li>
              <li>Mantener sesiones de inicio de sesión</li>
              <li>Analizar el tráfico del sitio</li>
              <li>Mejorar experiencia del usuario</li>
            </ul>
            <p className="mt-4">
              Puede configurar su navegador para rechazar cookies, pero esto puede afectar
              la funcionalidad del sitio.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">9. Enlaces Externos</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios web de terceros.
              HistroSoft S.A.C. no es responsable por las políticas de privacidad
              de estos sitios externos. Le recomendamos revisar sus políticas antes de
              proporcionar información personal.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">10. Cambios a esta Política</h2>
            <p>
              HistroSoft S.A.C. puede actualizar esta Política de Privacidad en cualquier momento.
              Los cambios se publicarán en esta página con una fecha de actualización.
              El uso continuado de nuestros servicios implica aceptación de la política modificada.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">11. Responsable de Protección de Datos</h2>
            <p>
              Para consultas sobre privacidad y protección de datos, contacte a:
            </p>
            <div className="bg-[color:var(--surface-sunken)] p-4 rounded-lg mt-3">
              <p className="font-semibold">HistroSoft S.A.C.</p>
              <p>Email: histrosoft.negocios@hotmail.com</p>
              <p>Responsable de Datos: Equipo Legal</p>
              <p>Horario: Lunes a viernes, 9:00 AM - 6:00 PM (Hora Perú)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">12. Ley Aplicable</h2>
            <p>
              Esta Política de Privacidad se rige por la Ley 29733 (Protección de Datos Personales),
              el Reglamento de la Ley 29733, y demás normas de privacidad aplicables en Perú.
            </p>
          </div>

          <div className="bg-[color:var(--accent-subtle)] border border-[color:var(--accent)] p-4 rounded-lg mt-8">
            <p className="text-sm text-[color:var(--text-secondary)]">
              <strong>Importante:</strong> Esta política cumple con regulaciones peruanas.
              Si tiene dudas sobre cómo se manejan sus datos, no dude en contactarnos directamente.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
