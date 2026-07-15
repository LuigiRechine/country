'use client';

// components/products/ProductCard.tsx

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Check } from 'lucide-react';
import type { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import '@/styles/productCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const [corSelecionada, setCorSelecionada] = useState(product.cores[0]);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(product.tamanhos[0]);
  const [adicionado, setAdicionado] = useState(false);

  const tagClass = product.destaque
    ? `tag tag-${product.destaque.toLowerCase().replace(/\s+/g, '-')}`
    : '';

  const desconto = product.precoAntigo
    ? Math.round(((product.precoAntigo - product.preco) / product.precoAntigo) * 100)
    : null;

  const estrelasCheias = Math.floor(product.avaliacao);
  const estrelasVazias = 5 - estrelasCheias;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addToCart(product, corSelecionada, tamanhoSelecionado);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1800);
  }

  return (
    <article className="pc-card">

      <div className="pc-image-wrap">
        {product.destaque && (
          <span className={tagClass}>{product.destaque}</span>
        )}
        {desconto && (
          <span className="pc-desconto">-{desconto}%</span>
        )}
        <button className="pc-fav-btn" aria-label="Adicionar aos favoritos">
          <Heart size={18} />
        </button>
        <Image
          src={product.imagens[0]}
          alt={product.nome}
          fill
          className="pc-image"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="pc-info">
        <p className="pc-marca">{product.marca}</p>
        <h3 className="pc-nome">{product.nome}</h3>

        <div className="pc-rating">
          <span className="pc-stars" aria-label={`${product.avaliacao} de 5 estrelas`}>
            {"★".repeat(estrelasCheias)}{"☆".repeat(estrelasVazias)}
          </span>
          <span className="pc-rating-num">{product.avaliacao}</span>
        </div>

        <div className="pc-preco-wrap">
          <span className="pc-preco">
            R$ {product.preco.toFixed(2).replace(".", ",")}
          </span>
          {product.precoAntigo && (
            <span className="pc-preco-antigo">
              R$ {product.precoAntigo.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>

        <p className="pc-parcelas">{product.parcelas}</p>

        <div className="pc-cores" aria-label="Cores disponíveis">
          {product.cores.map((cor, i) => (
            <button
              key={i}
              className={`pc-cor ${cor === corSelecionada ? "pc-cor--active" : ""}`}
              style={{ backgroundColor: cor }}
              onClick={() => setCorSelecionada(cor)}
              aria-label={`Cor ${i + 1}`}
              aria-pressed={cor === corSelecionada}
            />
          ))}
        </div>

        <div className="pc-tamanhos" aria-label="Tamanhos disponíveis">
          {product.tamanhos.slice(0, 4).map((tam) => (
            <button
              key={tam}
              className={`pc-tamanho ${tam === tamanhoSelecionado ? "pc-tamanho--active" : ""}`}
              onClick={() => setTamanhoSelecionado(tam)}
              aria-pressed={tam === tamanhoSelecionado}
            >
              {tam}
            </button>
          ))}
          {product.tamanhos.length > 4 && (
            <Link href={`/produtos/${product.id}`} className="pc-tamanho-more">
              +{product.tamanhos.length - 4}
            </Link>
          )}
        </div>

        <div className="pc-actions">
          <button
            className={`pc-add-btn ${adicionado ? "pc-add-btn--ok" : ""}`}
            onClick={handleAddToCart}
            aria-label="Adicionar ao carrinho"
          >
            {adicionado ? (
              <><Check size={16} strokeWidth={2.5} /> Adicionado!</>
            ) : (
              <><ShoppingCart size={16} strokeWidth={1.8} /> Adicionar</>
            )}
          </button>
          <Link href={`/produtos/${product.id}`} className="pc-btn">
            Ver
          </Link>
        </div>
      </div>
    </article>
  );
}
