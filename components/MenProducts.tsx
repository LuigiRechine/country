'use client';

import Link from 'next/link';
import ProductCard, { type Product } from '@/components/ProductCard';
import '@/styles/MenProducts.css';

const menProducts: Product[] = [
  {
    id: 201,
    nome: 'Bota Texana Masculina Couro',
    marca: 'Bota Gringa',
    preco: 549.90,
    precoAntigo: 619.90,
    parcelas: '12x de R$ 45,82',
    avaliacao: 4.9,
    imagem: '/produtos/masculino/bota-couro-masculina.jpg',
    destaque: 'Mais Vendido',
    cores: ['#3B1F0A', '#000000', '#8B4513'],
  },
  {
    id: 202,
    nome: 'Chapéu Felt Masculino',
    marca: 'Stetson',
    preco: 319.90,
    precoAntigo: 359.90,
    parcelas: '10x de R$ 31,99',
    avaliacao: 4.8,
    imagem: '/produtos/masculino/chapeu-felt.webp',
    destaque: 'Novo',
    cores: ['#2C2C2C', '#704214', '#D2B48C'],
  },
  {
    id: 203,
    nome: 'Camisa Xadrez Slim Country',
    marca: 'Ariat',
    preco: 199.90,
    parcelas: '6x de R$ 33,32',
    avaliacao: 4.7,
    imagem: '/produtos/masculino/camisa-xadrez-slim.webp',
    cores: ['#8B0000', '#003366', '#006400'],
  },
  {
    id: 204,
    nome: 'Cinto Couro Rodeio Fivela',
    marca: 'Wrangler',
    preco: 179.90,
    precoAntigo: 209.90,
    parcelas: '6x de R$ 29,98',
    avaliacao: 4.6,
    imagem: '/produtos/masculino/cinto-rodeio.webp',
    destaque: 'Oferta',
    cores: ['#3B1F0A', '#000000'],
  },
];

export default function MenProducts() {
  return (
    <section className="men-section">
      <div className="men-container">

        {/* Cabeçalho */}
        <div className="gender-header men-header">
          <Link href="/masculino" className="ver-todos-btn men-ver-todos">
            Ver Todos
            <span className="ver-todos-arrow">→</span>
          </Link>
          <div className="gender-header-right">
            <div className="section-eyebrow men-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Coleção Exclusiva</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="gender-title men-title">Moda Masculina</h2>
            <p className="gender-subtitle men-subtitle">
              Botas, camisas, calças e acessórios para o verdadeiro estilo country.
            </p>
          </div>
        </div>

        {/* Grid + Banner (invertido: grid à esquerda, banner à direita) */}
        <div className="gender-layout men-layout">

          {/* Grid de produtos */}
          <div className="gender-grid">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Banner lateral */}
          <div className="gender-banner gender-banner--men">
            <div className="gender-banner-overlay" />
            <div className="gender-banner-content">
              <p className="gender-banner-tag">Nova Coleção</p>
              <p className="gender-banner-text">Estilo<br />Country</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
