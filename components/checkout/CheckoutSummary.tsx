import { ShoppingCart } from 'lucide-react';
import type { CartItem } from '@/types/cart';
import '@/styles/checkoutSummary.css';

interface CheckoutSummaryProps {
  cart: CartItem[];
  subtotal: number;
  frete: number;
  total: number;
  isProcessing: boolean;
  onFinalizar: () => void;
}

export default function CheckoutSummary({ cart, subtotal, frete, total, isProcessing, onFinalizar }: CheckoutSummaryProps) {
  return (
    <div className="checkout-summary">
      <h2>Resumo do Pedido</h2>

      <div className="summary-items">
        {cart.map((item) => (
          <div key={item.id} className="summary-item">
            <span>{item.nome} ({item.quantidade}x)</span>
            <span>R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
          </div>
        ))}
      </div>

      <div className="summary-totals">
        <div className="total-line">
          <span>Subtotal</span>
          <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="total-line">
          <span>Frete</span>
          <span>R$ {frete.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="total-line total-final">
          <span>Total</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      <button 
        className="finalizar-btn" 
        onClick={onFinalizar}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processando pagamento...' : 'Confirmar Pedido'}
      </button>

      <p className="secure-info">🔒 Pagamento seguro via Estação Country</p>
    </div>
  );
}