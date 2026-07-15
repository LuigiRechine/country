'use client';

// app/carrinho/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Breadcrumb from '@/components/products/Breadcrumb';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import '@/styles/cartPage.css';

export default function CarrinhoPage() {
  const { items, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-page-container">

          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Carrinho' },
            ]}
          />

          <header className="cart-page-header">
            <h1 className="cart-page-title">Meu Carrinho</h1>
            {items.length > 0 && (
              <button
                className="cart-page-clear"
                onClick={clearCart}
                aria-label="Esvaziar carrinho"
              >
                <Trash2 size={15} strokeWidth={1.8} />
                Esvaziar carrinho
              </button>
            )}
          </header>

          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="cart-layout">

              {/* Lista de itens */}
              <section className="cart-items-section">
                <ul className="cart-items-list">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              </section>

              {/* Resumo lateral */}
              <CartSummary />

            </div>
          )}

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
