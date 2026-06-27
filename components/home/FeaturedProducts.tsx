'use client';

import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';   // ← importa daqui, não do ProductCard
import '@/styles/featuredProducts.css';

const featuredProducts: Product[] = [
  {
    id: 1,
    nome: 'Bota Texana Masculina Couro',
    marca: 'Bota Gringa',
    categoria: 'Botas',
    genero: 'Masculino',
    preco: 549.90,
    precoAntigo: 619.90,
    parcelas: '12x de R$ 45,82',
    avaliacao: 4.9,
    imagens: ['/produtos/bota-texas.webp', '/produtos/bota-texas.webp', '/produtos/bota-texas.webp'],
    cores: ['#3B1F0A', '#000000', '#8B4513'],
    tamanhos: ['38', '39', '40', '41', '42', '43'],
    destaque: 'Mais Vendido',
    descricaoCurta: 'Bota de couro legítimo com solado de borracha. Alta durabilidade e conforto.',
  },
  {
    id: 2,
    nome: 'Chapéu Cowboy Felt Premium',
    marca: 'Stetson',
    categoria: 'Chapéus',
    genero: 'Unissex',
    preco: 319.90,
    precoAntigo: 359.90,
    parcelas: '10x de R$ 31,99',
    avaliacao: 4.8,
    imagens: ['/produtos/chapeu-stetson.jpg'],
    cores: ['#2C2C2C', '#704214', '#D2B48C'],
    tamanhos: ['P', 'M', 'G', 'GG'],
    destaque: 'Novo',
    descricaoCurta: 'Chapéu de felt importado com aba larga e acabamento premium.',
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
    id: 10,
    nome: 'Calça Jeans Feminina Country',
    marca: 'Ariat',
    categoria: 'Calças',           // ← era 'Feminino'
    genero: 'Feminino',
    preco: 249.90,
    precoAntigo: 289.90,
    parcelas: '8x de R$ 31,24',
    avaliacao: 4.8,
    imagens: ['/produtos/calca-jeans.webp'],
    cores: ['#1E3A8A', '#2C2C2C', '#5C4033'],
    tamanhos: ['34', '36', '38', '40', '42', '44'],
    destaque: 'Oferta',
    descricaoCurta: 'Calça jeans feminina de cintura alta com strass e bordado floral.',
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
