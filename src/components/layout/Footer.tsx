import React from 'react';
import { Link } from 'react-router-dom';
import { Wordmark } from '../ui/Wordmark';
import { Container } from './Container';
import { ArrowUpRight } from 'lucide-react';

export interface FooterProps {
  onOpenAgenda: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAgenda }) => {
  return (
    <footer className="theme-dark w-full bg-[color:var(--surface-inverse)] border-t border-[color:var(--border-subtle)] pt-16 pb-12 text-left">
      <Container>
        {/* Top principles bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[color:var(--border-subtle)]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)] mb-2">
              01 — Puesta en marcha rápida
            </h4>
            <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
              Servidores, bases de datos y parametrización inicial aprovisionados en menos de 48 horas.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)] mb-2">
              02 — Disponibilidad y SLA 99.9%
            </h4>
            <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
              Infraestructura redundante, respaldos diarios automatizados y atención técnica prioritaria de incidencias.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)] mb-2">
              03 — Adaptabilidad y propiedad
            </h4>
            <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
              Módulos e integraciones adaptables a tu flujo de trabajo, con propiedad y exportación total de tus datos.
            </p>
          </div>
        </div>

        {/* Main footer navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[color:var(--border-subtle)]">
          {/* Col 1-5: Brand & description */}
          <div className="md:col-span-5 space-y-4">
            <Wordmark size="md" tone="dark" />
            <p className="text-xs text-[color:var(--text-muted)] max-w-sm leading-relaxed">
              Impulsa tu negocio con soluciones digitales que simplifican procesos, automatizan tareas y mejoran tu gestión. Desarrollamos software a medida, adaptado a las necesidades de tu negocio.
            </p>
            <div className="pt-2 text-xs text-[color:var(--text-faint)] font-mono">
              Contacto directo: <a href="https://wa.me/51944017041" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent)] hover:underline">+51 944 017 041</a>
            </div>
          </div>

          {/* Col 6-8: Soluciones ya creadas */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-primary)]">
              Soluciones con planes
            </div>
            <ul className="space-y-2 text-xs text-[color:var(--text-muted)]">
              <li><Link to="/productos" className="hover:text-[color:var(--accent)] transition-colors">Sistema de Ventas </Link></li>
              <li><Link to="/productos" className="hover:text-[color:var(--accent)] transition-colors">MiPaguito </Link></li>
            </ul>
          </div>

          {/* Col 9-12: Enfoque y contacto */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-primary)]">
              Navegación y consultas
            </div>
            <div className="space-y-2 text-xs text-[color:var(--text-muted)]">
              <p>
                <Link to="/metodologia" className="hover:text-[color:var(--accent)] transition-colors block">Metodología de 4 etapas</Link>
              </p>
              <p>
                <Link to="/casos" className="hover:text-[color:var(--accent)] transition-colors block">Casos de estudio cuantificados</Link>
              </p>
              <p>
                <Link to="/preguntas" className="hover:text-[color:var(--accent)] transition-colors block">Preguntas frecuentes</Link>
              </p>
              <p>
                <Link to="/software" className="text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition-colors flex items-center gap-1 font-semibold">
                  Consultar software personalizado →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[color:var(--text-faint)]">
          <div>
            © 2026 HistroSoft. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[color:var(--text-secondary)] cursor-pointer">Términos del servicio</span>
            <span className="hover:text-[color:var(--text-secondary)] cursor-pointer">Política de privacidad</span>
            <span className="hover:text-[color:var(--text-secondary)] cursor-pointer">Acuerdos SLA</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
