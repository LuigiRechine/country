'use client';

import { useState } from 'react';
import '@/styles/checkoutForm.css';

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');

  return (
    <div className="checkout-form">
      <h2>Endereço de Entrega</h2>
      <div className="form-grid">
        <input type="text" placeholder="Nome completo" />
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <div className="form-row">
          <input type="text" placeholder="Número"/>
          <input type="text" placeholder="Bairro"  />
        </div>
        <input type="text" placeholder="Cidade"/>
        <input type="text" placeholder="Estado"/>
      </div>

      <h2>Forma de Pagamento</h2>
      
      <div className="payment-methods">
        <button
          type="button"
          className={`payment-card ${paymentMethod === 'pix' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('pix')}
        >
          <div className="payment-content">
            <strong>PIX</strong>
            <span>Desconto de 5%</span>
          </div>
        </button>

        <button
          type="button"
          className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <div className="payment-content">
            <strong>Cartão de Crédito</strong>
            <span>Até 12x sem juros</span>
          </div>
        </button>

        <button
          type="button"
          className={`payment-card ${paymentMethod === 'boleto' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('boleto')}
        >
          <div className="payment-content">
            <strong>Boleto Bancário</strong>
            <span>Vencimento em 3 dias</span>
          </div>
        </button>
      </div>

      {paymentMethod === 'pix' && (
        <p className="pix-info">O QR Code será gerado após a confirmação do pedido.</p>
      )}
    </div>
  );
}