'use client';

import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';
import '@/styles/WomenProducts.css';

const womenProducts: Product[] = [
  {
    id: 5,
    nome: 'Bota Texas Feminina',
    marca: 'Wrangler',
    categoria: 'Botas',
    genero: 'Feminino',
    preco: 389.90,
    precoAntigo: 429.90,
    parcelas: '10x de R$ 38,99',
    avaliacao: 4.9,
    imagens: ['/produtos/feminino/bota-texas-feminina.webp'],
    cores: ['#4E342E', '#000000', '#8B4513'],
    tamanhos: ['34', '35', '36', '37', '38', '39'],
    destaque: 'Mais Vendido',
    descricaoCurta: 'Bota feminina estilo Texas com bordado artesanal e salto quadrado.',
  },
  {
    id: 7,
    nome: 'Chapéu Country Feminino Palha',
    marca: 'Resistol',
    categoria: 'Chapéus',
    genero: 'Feminino',
    preco: 259.90,
    precoAntigo: 299.90,
    parcelas: '8x de R$ 32,49',
    avaliacao: 4.8,
    imagens: ['/produtos/feminino/chapeu-feminino.webp'],
    cores: ['#D2B48C', '#F5F5DC'],
    tamanhos: ['P', 'M', 'G'],
    destaque: 'Novo',
    descricaoCurta: 'Chapéu de palha natural com laço decorativo e acabamento artesanal.',
  },
  {
    id: 8,
    nome: 'Camisa Flanela Western Feminina',
    marca: 'Ariat',
    categoria: 'Camisas',          // ← era 'Feminino'
    genero: 'Feminino',
    preco: 169.90,
    parcelas: '5x de R$ 33,98',
    avaliacao: 4.7,
    imagens: ['/produtos/feminino/blusa-floral.webp'],
    cores: ['#8B0000', '#E8DABD', '#4B2E1A'],
    tamanhos: ['PP', 'P', 'M', 'G', 'GG'],
    descricaoCurta: 'Camisa de flanela feminina com bordado country e botões de pressão.',
  },
  {
    id: 10,
    nome: 'Calça Jeans Feminina Country',
    marca: 'Ariat',
    categoria: 'Calças',           // ← era 'Feminino'
    genero: 'Feminino',
    preco: 249.90,
    precoAntigo: 289.90,
    parcelas: '8x de R$ 31,24',
    avaliacao: 4.8,
    imagens: ['/produtos/feminino/calca-jeans-feminina.webp'],
    cores: ['#1E3A8A', '#2C2C2C', '#5C4033'],
    tamanhos: ['34', '36', '38', '40', '42', '44'],
    destaque: 'Oferta',
    descricaoCurta: 'Calça jeans feminina de cintura alta com strass e bordado floral.',
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
