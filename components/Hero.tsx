'use client';

import Link from 'next/link';
import Image from 'next/image';
import '@/styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">

      {/* Imagem de fundo via Next.js Image (otimizada: lazy load, WebP automático) */}
      <Image
        src="/hero.jpg"
        alt="Estação Country - Coleção 2026"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="hero-bg-image"
      />

      {/* Overlay escuro */}
      <div className="hero-overlay" />

      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          NOVA COLEÇÃO 2026
        </div>

        {/* Título */}
        <h1 className="hero-title">
          ESTILO COUNTRY<br />DE VERDADE
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          Botas, roupas e acessórios premium.<br />
          As melhores marcas nacionais e importadas.
        </p>

        {/* Botão CTA — Link estilizado diretamente, sem <button> aninhado */}
        <Link href="/colecao" className="hero-button">
          EXPLORAR COLEÇÃO AGORA
        </Link>

        {/* Benefícios */}
        <p className="hero-benefits">
          <span>✓ Frete Grátis acima de R$ 399</span>
          <span>✓ Parcelamento em até 6x</span>
        </p>
      </div>
    </section>
  );
}