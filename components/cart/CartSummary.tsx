'use client';

import Link from 'next/link';
import { ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import '@/styles/cartSummary.css';

const FRETE_GRATIS_ACIMA = 399;
const FRETE_MOCK = 29.90;

export default function CartSummary() {
  const { subtotal, totalItens } = useCart();

  const freteGratis = subtotal >= FRETE_GRATIS_ACIMA;
  const frete = freteGratis ? 0 : FRETE_MOCK;
  const total = subtotal + frete;
  const faltaParaFreteGratis = FRETE_GRATIS_ACIMA - subtotal;
  const progressoPct = Math.min((subtotal / FRETE_GRATIS_ACIMA) * 100, 100);

  function fmt(val: number) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <aside className="cart-summary">

      <h2 className="cart-summary-title">Resumo do Pedido</h2>

      {/* Barra de progresso frete grátis */}
      <div className="cart-summary-frete-progress">
        <div className="cart-summary-frete-bar">
          <div
            className="cart-summary-frete-fill"
            style={{ width: `${progressoPct}%` }}
          />
        </div>
        {freteGratis ? (
          <p className="cart-summary-frete-msg cart-summary-frete-msg--ok">
            🎉 Você ganhou frete grátis!
          </p>
        ) : (
          <p className="cart-summary-frete-msg">
            Faltam <strong>{fmt(faltaParaFreteGratis)}</strong> para frete grátis
          </p>
        )}
      </div>

      {/* Linhas de valores */}
      <div className="cart-summary-rows">
        <div className="cart-summary-row">
          <span>Subtotal ({totalItens} {totalItens === 1 ? 'item' : 'itens'})</span>
          <span>{fmt(subtotal)}</span>
        </div>
        <div className="cart-summary-row">
          <span>Frete</span>
          <span className={freteGratis ? 'cart-summary-gratis' : ''}>
            {freteGratis ? 'Grátis' : fmt(frete)}
          </span>
        </div>
        <div className="cart-summary-divider" />
        <div className="cart-summary-row cart-summary-row--total">
          <span>Total</span>
          <span>{fmt(total)}</span>
        </div>
        <p className="cart-summary-parcelas">
          ou em até 10x sem juros
        </p>
      </div>

      {/* CTA */}
      <Link href="/checkout" className="cart-summary-btn">
        Finalizar Compra
      </Link>

      <Link href="/produtos" className="cart-summary-continue">
        Continuar Comprando
      </Link>

      {/* Selos de confiança */}
      <div className="cart-summary-trust">
        <div className="cart-summary-trust-item">
          <ShieldCheck size={16} strokeWidth={1.8} />
          <span>Pagamento 100% seguro</span>
        </div>
        <div className="cart-summary-trust-item">
          <Truck size={16} strokeWidth={1.8} />
          <span>Entrega para todo o Brasil</span>
        </div>
      </div>

    </aside>
  );
}
