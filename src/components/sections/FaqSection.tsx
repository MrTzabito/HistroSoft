import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQ_ITEMS } from '../../data/faq';
import { Accordion } from '../ui/Accordion';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const categories = [
    { id: 'todas', label: 'Todas' },
    { id: 'contratos', label: 'Contratos y código' },
    { id: 'proyectos', label: 'Plazos y pagos' },
    { id: 'planes', label: 'Planes empaquetados' },
    { id: 'tecnología', label: 'Garantía y soporte' },
  ];

  const filteredItems =
    activeCategory === 'todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const accordionItems = filteredItems.map((item, idx) => ({
    id: `faq-${idx}`,
    title: item.question,
    content: item.answer,
    category: item.category,
  }));

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#2B2B30]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Respuestas claras sobre productos, contratos y soporte."
          description="Transparencia total sobre aspectos técnicos, personalizaciones sobre productos, exportación de datos y niveles de servicio."
        />

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#2B2B30]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F2EEE6] text-[#0D0D0F]'
                  : 'bg-[#17171A] text-[#B5B0A6] border border-[#2B2B30] hover:text-[#F2EEE6] hover:border-[#4A4A52]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion items={accordionItems} defaultOpenId="faq-0" />
        </div>
      </Container>
    </section>
  );
};
