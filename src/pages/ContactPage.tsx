import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ahora, simularemos una respuesta exitosa
      console.log('Formulario enviado:', formData);

      // Simulamos un delay de envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[color:var(--surface-page)]">
      <Container>
        <SectionHeader
          title="Escríbanos"
          description="¿Tienes preguntas o necesitas más información? Nuestro equipo está listo para ayudarte."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Información de Contacto */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent-subtle)]">
                  <Mail className="h-6 w-6 text-[color:var(--accent)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">Email</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  histrosoft.negocios@hotmail.com
                </p>
                <p className="text-xs text-[color:var(--text-faint)] mt-1">
                  Respondemos en máximo 24 horas
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#25D366]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.528 4.185 1.469 5.974L0 24l6.372-1.436A11.973 11.973 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.954 0-3.845-.469-5.499-1.297l-.394-.21-4.088.926.943-3.876-.213-.394A9.968 9.968 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.5-9.5c-.3-.15-1.762-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3 0-.46.14-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.04-.54-.08-.16-.67-1.6-.92-2.2-.24-.56-.49-.49-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.08-.12-.27-.2-.56-.34z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">WhatsApp</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  +51 944 017 041
                </p>
                <p className="text-xs text-[color:var(--text-faint)] mt-1">
                  Disponible de lunes a viernes
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent-subtle)]">
                  <Clock className="h-6 w-6 text-[color:var(--accent)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">Horario de Atención</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  Lunes a viernes
                </p>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  9:00 AM - 6:00 PM (Hora Perú)
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-[color:var(--surface-sunken)] rounded-[22px] border border-[color:var(--border-subtle)] p-6 sm:p-8">

              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[color:var(--green-soft)] mb-4">
                    <svg className="w-8 h-8 text-[color:var(--green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[color:var(--text-primary)] mb-2">
                    ¡Mensaje enviado exitosamente!
                  </h3>
                  <p className="text-[color:var(--text-secondary)] mb-6">
                    Gracias por contactarnos. Responderemos tu mensaje en breve.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Nombre completo"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <Input
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                  />

                  <Input
                    label="Asunto"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                  />

                  <Textarea
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos detalles sobre tu consulta..."
                    rows={6}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      className="w-full justify-center"
                    >
                      {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                  </div>

                  <p className="text-xs text-[color:var(--text-faint)] text-center">
                    Garantizamos la privacidad de tus datos conforme a nuestra{' '}
                    <a href="/privacidad" className="text-[color:var(--accent)] hover:underline">
                      Política de Privacidad
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sección adicional: Preguntas frecuentes sobre contacto */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-[color:var(--border-subtle)]">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-8">
            Preguntas Frecuentes sobre Contacto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-[color:var(--text-primary)]">
                ¿Cuál es el mejor horario para contactar?
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Nuestro equipo atiende de lunes a viernes de 9:00 AM a 6:00 PM (Hora Perú).
                WhatsApp disponible durante estos horarios.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-[color:var(--text-primary)]">
                ¿En cuánto tiempo responden?
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Respondemos correos dentro de 24 horas. Para emergencias, use WhatsApp
                o llame directamente.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-[color:var(--text-primary)]">
                ¿Puedo agendar una llamada?
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Sí, en la página de inicio encontrarás el botón "Agenda una llamada"
                para coordinar una reunión.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-[color:var(--text-primary)]">
                ¿Dónde están ubicados?
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Somos una empresa peruana con sede en Lima. Atendemos clientes
                en todo el territorio nacional y el extranjero.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
