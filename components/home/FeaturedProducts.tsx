'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';
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
    imagens: ['/produtos/bota-texas.webp'],
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
    categoria: 'Calças',
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const [visibleCount, setVisibleCount] = useState(4); // 4 no SSR — igual ao servidor

useEffect(() => {
  function updateVisible() {
    if (window.innerWidth <= 600) setVisibleCount(1);
    else if (window.innerWidth <= 1024) setVisibleCount(2);
    else setVisibleCount(4);
  }
  updateVisible();
  window.addEventListener('resize', updateVisible);
  return () => window.removeEventListener('resize', updateVisible);
}, []);

const totalDots = Math.ceil(featuredProducts.length / visibleCount);

  const updateState = useCallback(() => {
  const track = trackRef.current;
  if (!track) return;
  const cardWidth = track.children[0]?.clientWidth ?? 0;
  const gap = 24;
  const currentIndex = Math.round(track.scrollLeft / (cardWidth + gap));
  setActiveIndex(Math.floor(currentIndex / visibleCount)); // ← usa o state
  setCanPrev(track.scrollLeft > 4);
  setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
}, [visibleCount]); // ← dependência adicionada

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateState, { passive: true });
    updateState();
    return () => track.removeEventListener('scroll', updateState);
  }, [updateState]);

  function scrollBy(direction: 'prev' | 'next') {
  const track = trackRef.current;
  if (!track) return;
  const cardWidth = track.children[0]?.clientWidth ?? 280;
  const gap = 24;
  const amount = (cardWidth + gap) * visibleCount; // ← era getVisibleCount()
  track.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
}

function scrollToIndex(dotIndex: number) {
  const track = trackRef.current;
  if (!track) return;
  const cardWidth = track.children[0]?.clientWidth ?? 280;
  const gap = 24;
  track.scrollTo({ left: dotIndex * visibleCount * (cardWidth + gap), behavior: 'smooth' }); // ← era getVisibleCount()
}

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

        <div className="featured-carousel-wrapper">
          {/* Seta anterior */}
          <button
            className="featured-arrow featured-arrow--prev"
            onClick={() => scrollBy('prev')}
            disabled={!canPrev}
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>

          {/* Track rolável */}
          <div className="featured-track" ref={trackRef}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Seta próxima */}
          <button
            className="featured-arrow featured-arrow--next"
            onClick={() => scrollBy('next')}
            disabled={!canNext}
            aria-label="Próximos produtos"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Dots */}
        <div className="featured-dots" role="tablist" aria-label="Navegação do carrossel">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={`featured-dot ${i === activeIndex ? 'featured-dot--active' : ''}`}
              onClick={() => scrollToIndex(i)}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Grupo ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
