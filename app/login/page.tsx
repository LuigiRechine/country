'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/auth.css';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    alert("Login realizado com sucesso! (Mock)");
    router.push('/minha-conta');
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <h1>Bem-vindo de volta</h1>
          <p className="auth-subtitle">Faça login para acessar sua conta</p>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" required />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="password-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  
                  required 
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-btn" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="auth-links">
            <p>
              Não tem conta?{' '}
              <Link href="/cadastro" className="auth-link">Cadastre-se</Link>
            </p>
            <p>
              <a href="/esqueci-senha" className="auth-link">Esqueci minha senha</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}