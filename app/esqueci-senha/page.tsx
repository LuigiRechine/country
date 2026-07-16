'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/auth.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSent(true);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          {!sent ? (
            <>
              <h1>Esqueci minha senha</h1>
              <p className="auth-subtitle">
                Digite seu email e enviaremos um link para redefinir sua senha.
              </p>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="input-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>

                <button type="submit" className="auth-btn" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar link de recuperação'}
                </button>
              </form>

              <div className="auth-links">
                <Link href="/login">Voltar para o Login</Link>
              </div>
            </>
          ) : (
            /* Tela de sucesso */
            <div className="success-message">
              <h1>Link enviado!</h1>
              <p>
                Enviamos um link de recuperação para <strong>{email}</strong>.<br />
                Verifique sua caixa de entrada (e também a pasta de spam).
              </p>
              <Link href="/login" className="auth-btn">
                Voltar para o Login
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}