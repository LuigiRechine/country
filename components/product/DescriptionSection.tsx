'use client';

import { useState } from 'react';
import '@/styles/descriptionSection.css';

interface DescriptionSectionProps {
  descricao: string;
}

export default function DescriptionSection({ descricao }: DescriptionSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 320;
  const isLong = descricao.length > maxLength;

  const previewText = expanded || !isLong 
    ? descricao 
    : descricao.slice(0, maxLength) + '...';

  // Divide mantendo quebras de linha
  const paragraphs = previewText
    .split(/\n+/)                    // divide por qualquer quantidade de \n
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <section className="description-section">
      <h2>Descrição do Produto</h2>
      
      <div className={`description-text ${expanded ? 'expanded' : ''}`}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="description-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {isLong && (
        <button 
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Ver menos ▲' : 'Ler descrição completa ▼'}
        </button>
      )}
    </section>
  );
}