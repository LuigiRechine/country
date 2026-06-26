'use client';

import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';   // ← importa daqui, não do ProductCard
import '@/styles/featuredProducts.css';

const featuredProducts: Product[] = [
  {
    id: 1,
    nome: 'Bota Texas Masculina',
    marca: 'Wrangler',
    categoria: 'Botas',
    genero: 'Masculino',
    preco: 399.90,
    precoAntigo: 459.90,
    parcelas: '10x de R$ 39,99',
    avaliacao: 4.8,
    imagens: ['/produtos/bota-texas.webp'],   // ← era imagem
    destaque: 'Mais Vendido',
    cores: ['#3b2a1d', '#000000', '#8b5a2b'],
    tamanhos: ['39', '40', '41', '42', '43'],
    descricaoCurta: '',
  },
  {
    id: 2,
    nome: 'Chapéu Cowboy Premium',
    marca: 'Stetson',
    categoria: 'Chapéus',
    genero: 'Unissex',
    preco: 289.90,
    precoAntigo: 329.90,
    parcelas: '8x de R$ 36,24',
    avaliacao: 4.9,
    imagens: ['/produtos/chapeu-stetson.jpg'],
    destaque: 'Novo',
    cores: ['#d2b48c', '#2c2c2c', '#8b4513'],
    tamanhos: ['P', 'M', 'G', 'GG'],
    descricaoCurta: '',
  },
  {
    id: 3,
    nome: 'Camisa Xadrez Western',
    marca: 'Ariat',
    categoria: 'Camisas',
    genero: 'Masculino',
    preco: 189.90,
    parcelas: '6x de R$ 31,65',
    avaliacao: 4.7,
    imagens: ['/produtos/camisa-xadrez.webp'],
    cores: ['#8b0000', '#003366', '#4b2e1a'],
    tamanhos: ['P', 'M', 'G', 'GG', 'XGG'],
    descricaoCurta: '',
  },
  {
    id: 4,
    nome: 'Calça Jeans Rodeio',
    marca: 'Rockies',
    categoria: 'Calças',
    genero: 'Masculino',
    preco: 279.90,
    precoAntigo: 319.90,
    parcelas: '8x de R$ 34,99',
    avaliacao: 4.8,
    imagens: ['/produtos/calca-jeans.webp'],
    destaque: 'Oferta',
    cores: ['#1e3a8a', '#334155', '#4f46e5'],
    tamanhos: ['38', '40', '42', '44', '46'],
    descricaoCurta: '',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Seleção Especial</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="featured-title">Produtos em Destaque</h2>
          <p className="featured-subtitle">
            Os produtos mais procurados por nossos clientes.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
