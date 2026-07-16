'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ProfileTab from '@/components/account/ProfileTab';
import OrdersTab from '@/components/account/OrdersTab';
import FavoritesTab from '@/components/account/FavoritesTab';
import AddressesTab from '@/components/account/AddressesTab';
import '@/styles/account.css';

const tabs = [
  { id: 'profile', label: 'Meu Perfil' },
  { id: 'orders', label: 'Meus Pedidos' },
  { id: 'favorites', label: 'Favoritos' },
  { id: 'addresses', label: 'Endereços' },
];

export default function MinhaContaPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          <h1>Minha Conta</h1>

          {/* Wrapper do Grid de duas colunas */}
          <div className="account-layout">
            
            {/* Coluna 1: Menu de Abas (Lado Esquerdo) */}
            <div className="account-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Coluna 2: Conteúdo Dinâmico (Lado Direito) */}
            <div className="account-content">
              {activeTab === 'profile' && <ProfileTab />}
              {activeTab === 'orders' && <OrdersTab />}
              {activeTab === 'favorites' && <FavoritesTab />}
              {activeTab === 'addresses' && <AddressesTab />}
            </div>

          </div>

        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}