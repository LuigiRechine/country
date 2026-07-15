'use client';

import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { CartItem as CartItemType } from '@/types/cart';
import '@/styles/cartItem.css';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { increment, decrement, removeFromCart } = useCart();

  const total = (item.preco * item.quantidade).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const unitario = item.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <li className="cart-item">

      {/* Imagem */}
      <div className="cart-item-image-wrap">
        <Image
          src={item.imagem}
          alt={item.nome}
          fill
          className="cart-item-image"
          sizes="96px"
        />
      </div>

      {/* Informações */}
      <div className="cart-item-info">
        <p className="cart-item-marca">{item.marca}</p>
        <h3 className="cart-item-nome">{item.nome}</h3>

        <div className="cart-item-attrs">
          <span
            className="cart-item-cor"
            style={{ backgroundColor: item.cor }}
            title={`Cor: ${item.cor}`}
          />
          <span className="cart-item-tamanho">Tam. {item.tamanho}</span>
        </div>

        <p className="cart-item-unitario">{unitario} por unidade</p>
      </div>

      {/* Controles + preço + remover */}
      <div className="cart-item-controls">
        <div className="cart-item-qty">
          <button
            className="cart-item-qty-btn"
            onClick={() => decrement(item.id)}
            aria-label="Diminuir quantidade"
          >
            <Minus size={14} strokeWidth={2.5} />
          </button>
          <span className="cart-item-qty-value">{item.quantidade}</span>
          <button
            className="cart-item-qty-btn"
            onClick={() => increment(item.id)}
            aria-label="Aumentar quantidade"
          >
            <Plus size={14} strokeWidth={2.5} />
          </button>
        </div>

        <p className="cart-item-total">{total}</p>

        <button
          className="cart-item-remove"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remover ${item.nome} do carrinho`}
        >
          <Trash2 size={16} strokeWidth={1.8} />
        </button>
      </div>

    </li>
  );
}
