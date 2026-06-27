'use client';

import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';
import '@/styles/MenProducts.css';

const menProducts: Product[] = [
  {
    id: 14,
    nome: 'Bota Masculina Solado Tratorado',
    marca: "Dock's",
    categoria: 'Botas',            // ← era 'Masculino'
    genero: 'Masculino',
    preco: 429.90,
    parcelas: '10x de R$ 42,99',
    avaliacao: 4.7,
    imagens: ['/produtos/masculino/bota-couro-masculina.jpg'],
    cores: ['#000000', '#3B1F0A'],
    tamanhos: ['39', '40', '41', '42', '43', '44'],
    destaque: 'Novo',
    descricaoCurta: 'Bota masculina com solado tratorado, ideal para uso rural e urbano.',
  },
  {
    id: 12,
    nome: 'Chapéu Felt Masculino Clássico',
    marca: 'Stetson',
    categoria: 'Chapéus',
    genero: 'Masculino',
    preco: 349.90,
    precoAntigo: 399.90,
    parcelas: '10x de R$ 34,99',
    avaliacao: 4.9,
    imagens: ['/produtos/masculino/chapeu-felt.webp'],
    cores: ['#1A0A00', '#704214'],
    tamanhos: ['P', 'M', 'G', 'GG'],
    destaque: 'Mais Vendido',
    descricaoCurta: 'O clássico da marca Stetson em felt premium. Acabamento impecável.',
  },
  {
    id: 3,
    nome: 'Camisa Xadrez Slim Country',
    marca: 'Ariat',
    categoria: 'Camisas',
    genero: 'Masculino',
    preco: 199.90,
    parcelas: '6x de R$ 33,32',
    avaliacao: 4.7,
    imagens: ['/produtos/camisa-xadrez.webp'],
    cores: ['#8B0000', '#003366', '#006400'],
    tamanhos: ['P', 'M', 'G', 'GG', 'XGG'],
    descricaoCurta: 'Camisa xadrez slim fit, tecido resistente com fechamento em botões de pérola.',
  },
  {
    id: 4,
    nome: 'Cinto Couro Rodeio Fivela',
    marca: 'Wrangler',
    categoria: 'Cintos',
    genero: 'Masculino',
    preco: 179.90,
    precoAntigo: 209.90,
    parcelas: '6x de R$ 29,98',
    avaliacao: 4.6,
    imagens: ['/produtos/masculino/cinto-rodeio.webp'],
    cores: ['#3B1F0A', '#000000'],
    tamanhos: ['38', '40', '42', '44', '46'],
    destaque: 'Oferta',
    descricaoCurta: 'Cinto de couro legítimo com fivela estilo rodeio banhada a ouro.',
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
