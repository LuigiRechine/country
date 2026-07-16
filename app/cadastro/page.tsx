'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/auth.css';

export default function CadastroPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1400));
    
    alert("Cadastro realizado com sucesso! (Mock)");
    router.push('/login');
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <h1>Criar Conta</h1>
          <p className="auth-subtitle">Cadastre-se e aproveite nossas promoções</p>

          <form onSubmit={handleCadastro} className="auth-form">
            <div className="input-group">
              <label>Nome completo</label>
              <input type="text" placeholder="Seu nome" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" required />
            </div>

            <div className="input-group">
              <label>Telefone</label>
              <input type="tel" placeholder="(11) 98765-4321" />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Crie uma senha" required />
            </div>

            <button type="submit" className="auth-btn" disabled={isLoading}>
              {isLoading ? 'Criando conta...' : 'Cadastrar'}
            </button>
          </form>

          <div className="auth-links">
            <Link href="/login">Já tem conta? Faça login</Link>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}