'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import '@/styles/emptyCart.css';

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-icon-wrap">
        <ShoppingCart size={48} strokeWidth={1.4} />
      </div>
      <h2 className="empty-cart-title">Seu carrinho está vazio</h2>
      <p className="empty-cart-sub">
        Explore nossa coleção e encontre produtos que combinam com o seu estilo.
      </p>
      <Link href="/produtos" className="empty-cart-btn">
        Ver Produtos
      </Link>
    </div>
  );
}
