'use client';

// components/products/ProductCard.tsx
// Este componente é idêntico ao da Home, mas linka para /produtos/[id].
// Futuramente, unifique os dois em um único componente em components/shared/.

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import type { Product } from '@/types/product';
import '@/styles/productCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const tagClass = product.destaque
    ? `tag tag-${product.destaque.toLowerCase().replace(/\s+/g, '-')}`
    : '';

  const desconto = product.precoAntigo
    ? Math.round(((product.precoAntigo - product.preco) / product.precoAntigo) * 100)
    : null;

  const estrelasCheias = Math.floor(product.avaliacao);
  const estrelasVazias = 5 - estrelasCheias;

  return (
    <article className="pc-card">
      {/* Imagem */}
      <div className="pc-image-wrap">
        {product.destaque && (
          <span className={tagClass}>{product.destaque}</span>
        )}
        {desconto && (
          <span className="pc-desconto">-{desconto}%</span>
        )}
        <button
          className="pc-fav-btn"
          aria-label="Adicionar aos favoritos"
        >
          <Heart size={18} />
        </button>
        <Image
          src={product.imagem}
          alt={product.nome}
          fill
          className="pc-image"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Informações */}
      <div className="pc-info">
        <p className="pc-marca">{product.marca}</p>
        <h3 className="pc-nome">{product.nome}</h3>

        <div className="pc-rating">
          <span className="pc-stars" aria-label={`${product.avaliacao} de 5 estrelas`}>
            {'★'.repeat(estrelasCheias)}{'☆'.repeat(estrelasVazias)}
          </span>
          <span className="pc-rating-num">{product.avaliacao}</span>
        </div>

        <div className="pc-preco-wrap">
          <span className="pc-preco">
            R$ {product.preco.toFixed(2).replace('.', ',')}
          </span>
          {product.precoAntigo && (
            <span className="pc-preco-antigo">
              R$ {product.precoAntigo.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        <p className="pc-parcelas">{product.parcelas}</p>

        <div className="pc-cores" aria-label="Cores disponíveis">
          {product.cores.map((cor, i) => (
            <span
              key={i}
              className="pc-cor"
              style={{ backgroundColor: cor }}
              aria-label={`Cor ${i + 1}`}
            />
          ))}
        </div>

        <Link href={`/produtos/${product.id}`} className="pc-btn">
          Ver Produto
        </Link>
      </div>
    </article>
  );
}
