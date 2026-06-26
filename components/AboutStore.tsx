'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import '@/styles/AboutStore.css';

// ─── Dados editáveis — substitua pelo conteúdo real da loja ───────────────────
const aboutData = {
  desde: 'DESDE 2012',
  titulo: 'Mais que uma loja,\num estilo de vida.',
  texto:
    'A Estação Country nasceu da paixão pelo universo country e pela busca constante por qualidade. Trabalhamos com as melhores marcas nacionais e importadas, oferecendo produtos originais para quem valoriza tradição, conforto e autenticidade. Nosso compromisso é proporcionar uma experiência completa, desde o atendimento até a entrega.',
  imagem: '/sobre/fachada-loja.webp',
  imagemAlt: 'Fachada da Estação Country em Itapetininga',
  diferenciais: [
    { icone: '✔', texto: 'Produtos Originais' },
    { icone: '✔', texto: 'Atendimento Especializado' },
    { icone: '✔', texto: 'Envio para Todo o Brasil' },
  ],
  ctaTexto: 'Conheça Nossa História',
  ctaHref: '/sobre',
};
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutStore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('about-visible');
          observer.disconnect(); // dispara só uma vez
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container" ref={containerRef}>

        {/* Coluna esquerda — imagem */}
        <div className="about-image-col">
          <div className="about-image-frame">
            <Image
              src={aboutData.imagem}
              alt={aboutData.imagemAlt}
              fill
              className="about-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge flutuante sobre a imagem */}
            <div className="about-badge">
              <span className="about-badge-number">12+</span>
              <span className="about-badge-label">anos de tradição</span>
            </div>
          </div>
        </div>

        {/* Coluna direita — conteúdo */}
        <div className="about-content-col">

          {/* Eyebrow */}
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="about-eyebrow-text">{aboutData.desde}</span>
          </div>

          {/* Título */}
          <h2 className="about-title">
            {aboutData.titulo.split('\n').map((linha, i) => (
              <span key={i}>
                {linha}
                {i < aboutData.titulo.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>

          {/* Linha decorativa dourada */}
          <div className="about-divider" />

          {/* Texto institucional */}
          <p className="about-text">{aboutData.texto}</p>

          {/* Diferenciais */}
          <ul className="about-diferenciais">
            {aboutData.diferenciais.map((item, i) => (
              <li key={i} className="about-diferencial-item">
                <span className="about-diferencial-icone" aria-hidden="true">
                  {item.icone}
                </span>
                <span className="about-diferencial-texto">{item.texto}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href={aboutData.ctaHref} className="about-cta">
            {aboutData.ctaTexto}
            <span className="about-cta-arrow" aria-hidden="true">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
