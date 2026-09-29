import React from 'react';
import { Wordmark } from '../ui/Wordmark';
import { Container } from './Container';
import { ArrowUpRight } from 'lucide-react';

export interface FooterProps {
  onOpenAgenda: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAgenda }) => {
  return (
    <footer className="w-full bg-[#1F1F23] border-t border-[#2B2B30] pt-16 pb-12 text-left">
      <Container>
        {/* Top principles bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#2B2B30]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5B82E] mb-2">
              01 — Puesta en marcha rápida
            </h4>
            <p className="text-xs text-[#B5B0A6] leading-relaxed">
              Servidores, bases de datos PostgreSQL y parametrización inicial aprovisionados en menos de 48 horas.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5B82E] mb-2">
              02 — Disponibilidad y SLA 99.9%
            </h4>
            <p className="text-xs text-[#B5B0A6] leading-relaxed">
              Infraestructura redundante, respaldos diarios automatizados y atención técnica prioritaria de incidencias.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5B82E] mb-2">
              03 — Adaptabilidad y propiedad
            </h4>
            <p className="text-xs text-[#B5B0A6] leading-relaxed">
              Módulos e integraciones adaptables a tu flujo de trabajo, con propiedad y exportación total de tus datos.
            </p>
          </div>
        </div>

        {/* Main footer navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#2B2B30]">
          {/* Col 1-5: Brand & description */}
          <div className="md:col-span-5 space-y-4">
            <Wordmark size="md" />
            <p className="text-xs text-[#B5B0A6] max-w-sm leading-relaxed">
              Soluciones de software ya creadas con planes listos para operar: Sistema de Ventas para tu negocio y MyYapes para control de transferencias. Con opción de desarrollo a la medida.
            </p>
            <div className="pt-2 text-xs text-[#8C877E] font-mono">
              Contacto directo: <a href="https://wa.me/51913862963" target="_blank" rel="noopener noreferrer" className="text-[#F5B82E] hover:underline">+51 913 862 963</a>
            </div>
          </div>

          {/* Col 6-8: Soluciones ya creadas */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F2EEE6]">
              Soluciones con planes
            </div>
            <ul className="space-y-2 text-xs text-[#B5B0A6]">
              <li><a href="#productos" className="hover:text-[#F5B82E] transition-colors">Sistema de Ventas (Punto de venta y stock)</a></li>
              <li><a href="#productos" className="hover:text-[#F5B82E] transition-colors">MyYapes (Registro y reenvío de pagos)</a></li>
              <li><a href="#consultar" className="hover:text-[#F5B82E] transition-colors">Software a la medida (Desarrollo propio)</a></li>
            </ul>
          </div>

          {/* Col 9-12: Enfoque y contacto */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F2EEE6]">
              Navegación y consultas
            </div>
            <div className="space-y-2 text-xs text-[#B5B0A6]">
              <p>
                <a href="#metodologia" className="hover:text-[#F5B82E] transition-colors block">Metodología de 4 etapas</a>
              </p>
              <p>
                <a href="#casos" className="hover:text-[#F5B82E] transition-colors block">Casos de estudio cuantificados</a>
              </p>
              <p>
                <a href="#faq" className="hover:text-[#F5B82E] transition-colors block">Preguntas frecuentes</a>
              </p>
              <p>
                <a href="#consultar" className="text-[#F5B82E] hover:text-[#FFD36B] transition-colors flex items-center gap-1 font-semibold">
                  Consultar software personalizado →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C877E]">
          <div>
            © 2026 HistroSoft. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#D8D3C9] cursor-pointer">Términos del servicio</span>
            <span className="hover:text-[#D8D3C9] cursor-pointer">Política de privacidad</span>
            <span className="hover:text-[#D8D3C9] cursor-pointer">Acuerdos SLA</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
