'use client';

import Link from 'next/link';
import Image from 'next/image';
import '@/styles/hero.css';

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{
        backgroundImage: "url('/hero.jpg')" // Use a imagem que eu gerei anteriormente
      }}
    >
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

        {/* Botão CTA */}
        <Link href="/colecao">
          <button className="hero-button">
            EXPLORAR COLEÇÃO AGORA
          </button>
        </Link>

        {/* Benefícios */}
        <p className="mt-8 text-[#D7CCC8] text-sm flex items-center gap-6">
          <span>✓ Frete Grátis acima de R$ 399</span>
          <span>✓ Parcelamento em até 6x</span>
        </p>
      </div>
    </section>
  );
}