'use client';

import Link from 'next/link';
import ProductCard, { type Product } from '@/components/products/ProductCard';
import '@/styles/WomenProducts.css';

const womenProducts: Product[] = [
  {
    id: 101,
    nome: 'Bota Texas Feminina',
    marca: 'Wrangler',
    preco: 389.90,
    precoAntigo: 429.90,
    parcelas: '10x de R$ 38,99',
    avaliacao: 4.9,
    imagem: '/produtos/feminino/bota-texas-feminina.webp',
    destaque: 'Mais Vendido',
    cores: ['#4E342E', '#000000', '#8B4513'],
  },
  {
    id: 102,
    nome: 'Chapéu Country Feminino',
    marca: 'Resistol',
    preco: 259.90,
    precoAntigo: 299.90,
    parcelas: '8x de R$ 32,49',
    avaliacao: 4.8,
    imagem: '/produtos/feminino/chapeu-feminino.webp',
    destaque: 'Novo',
    cores: ['#D2B48C', '#F5F5DC', '#8B4513'],
  },
  {
    id: 103,
    nome: 'Blusa Floral Western',
    marca: 'Wrangler',
    preco: 149.90,
    parcelas: '5x de R$ 29,98',
    avaliacao: 4.7,
    imagem: '/produtos/feminino/blusa-floral.webp',
    cores: ['#8B0000', '#E8DABD', '#4B2E1A'],
  },
  {
    id: 104,
    nome: 'Calça Jeans Feminina Country',
    marca: 'Ariat',
    preco: 249.90,
    precoAntigo: 289.90,
    parcelas: '8x de R$ 31,24',
    avaliacao: 4.8,
    imagem: '/produtos/feminino/calca-jeans-feminina.webp',
    destaque: 'Oferta',
    cores: ['#1E3A8A', '#2C2C2C', '#5C4033'],
  },
];

export default function WomenProducts() {
  return (
    <section className="women-section">
      <div className="women-container">

        {/* Cabeçalho com eyebrow + título + botão "Ver Todos" */}
        <div className="gender-header">
          <div className="gender-header-left">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Coleção Exclusiva</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="gender-title">Moda Feminina</h2>
            <p className="gender-subtitle">
              Peças selecionadas para quem vive o estilo country com elegância.
            </p>
          </div>
          <Link href="/feminino" className="ver-todos-btn">
            Ver Todos
            <span className="ver-todos-arrow">→</span>
          </Link>
        </div>

        {/* Banner editorial + grid */}
        <div className="gender-layout">

          {/* Banner lateral */}
          <div className="gender-banner gender-banner--women">
            <div className="gender-banner-overlay" />
            <div className="gender-banner-content">
              <p className="gender-banner-tag">Nova Coleção</p>
              <p className="gender-banner-text">Elegância<br />Country</p>
            </div>
          </div>

          {/* Grid de produtos */}
          <div className="gender-grid">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
