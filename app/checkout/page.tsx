'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import '@/styles/checkout.css';

export default function CheckoutPage() {
  const { items: cart, clearCart } = useCart();   // ← Corrigido aqui
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const frete = 29.90;
  const total = subtotal + frete;

  const handleFinalizarCompra = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1800));

    router.push('/checkout/sucesso');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <Navbar />
        <div className="empty-state">
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione produtos antes de finalizar a compra.</p>
          <button onClick={() => router.push('/produtos')}>Ver Produtos</button>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div className="checkout-container">
          <h1 className="checkout-title">Finalizar Compra</h1>

          <div className="checkout-grid">
            <div className="checkout-left">
              <CheckoutForm />
            </div>

            <div className="checkout-right">
              <CheckoutSummary 
                cart={cart} 
                subtotal={subtotal} 
                frete={frete} 
                total={total} 
                isProcessing={isProcessing}
                onFinalizar={handleFinalizarCompra}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}