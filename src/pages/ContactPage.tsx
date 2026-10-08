import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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

            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[color:var(--accent-subtle)]">
                  <Phone className="h-6 w-6 text-[color:var(--accent)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">Teléfono</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  +51 (1) XXXX-XXXX
                </p>
                <p className="text-xs text-[color:var(--text-faint)] mt-1">
                  Para consultas urgentes
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#25D366]/20">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#25D366]" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.968 1.495c-1.53.923-2.775 2.237-3.54 3.86-.765 1.624-.923 3.35-.46 5.038.463 1.687 1.423 3.127 2.796 4.204 1.373 1.077 3.127 1.65 4.956 1.65 1.828 0 3.582-.573 4.955-1.65 1.373-1.077 2.333-2.517 2.796-4.204.463-1.688.305-3.414-.46-5.038-.765-1.623-2.01-2.937-3.54-3.86a9.87 9.87 0 00-4.941-1.495z" />
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
