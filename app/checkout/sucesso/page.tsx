'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Link from 'next/link';
import '@/styles/success.css';

export default function SuccessPage() {
  const router = useRouter();
  const [orderNumber] = useState(`EC-${Date.now().toString().slice(-8)}`);

  // Redireciona automaticamente para home após 15 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 1500000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="success-page">
        <div className="success-container">
          <div className="success-icon">
            <CheckCircle size={110} strokeWidth={2} />
          </div>

          <h1>Pedido Realizado com Sucesso!</h1>
          <p className="success-subtitle">
            Obrigado por comprar na Estação Country. Seu pedido foi confirmado.
          </p>

          <div className="order-info">
            <p><strong>Número do Pedido:</strong> <span>{orderNumber}</span></p>
            <p><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="success-details">
            <div className="detail-card">
              <Truck size={28} />
              <div>
                <strong>Entrega</strong>
                <p>Previsão: 5 a 8 dias úteis</p>
              </div>
            </div>

            <div className="detail-card">
              <Package size={28} />
              <div>
                <strong>Pagamento</strong>
                <p>PIX • Confirmado</p>
              </div>
            </div>
          </div>

          <div className="success-actions">
            <Link href="/" className="btn-primary">
              Voltar para a Loja <ArrowRight size={20} />
            </Link>
            
            <Link href="/minha-conta" className="btn-secondary">
              Acompanhar Pedido
            </Link>
          </div>

          <p className="success-note">
            Você receberá um e-mail com os detalhes do seu pedido.
          </p>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}