'use client';

import '@/styles/promoBanner.css';
import { Truck, CreditCard, Award } from 'lucide-react';

const promoItems = [
  {
    icon: <Award size={36} />,
    title: "PRODUTOS ORIGINAIS",
    description: "Trabalhamos apenas com marcas reconhecidas.",
  },
  {
    icon: <Truck size={36} />,
    title: "ENTREGA PARA TODO O BRASIL",
    description: "Enviamos com rapidez e segurança.",
  },
  {
    icon: <CreditCard size={36} />,
    title: "PARCELAMENTO FACILITADO",
    description: "Compre em até 10x nos cartões.",
  },
];

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-container">
        <div className="promo-content">
          {promoItems.map((item, index) => (
            <div key={index} className="promo-item">
              <div className="promo-icon">
                {item.icon}
              </div>
              <h3 className="promo-title">{item.title}</h3>
              <p className="promo-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}