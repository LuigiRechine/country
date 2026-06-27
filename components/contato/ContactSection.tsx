'use client';

import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import '@/styles/contactSection.css';

interface Contato {
  Icone: LucideIcon;
  titulo: string;
  valor: string;
  href: string | null;
  externo: boolean;
}

const contatos: Contato[] = [
  {
    Icone: MessageCircle,
    titulo: 'WhatsApp',
    valor: '(15) 99790-2393',
    href: 'https://wa.me/5515997902393',
    externo: true,
  },
  {
    Icone: Phone,
    titulo: 'Telefone',
    valor: '(15) 99790-2393',
    href: 'tel:+5515997902393',
    externo: false,
  },
  {
    Icone: Mail,
    titulo: 'E-mail',
    valor: 'suportecountrystyle@hotmail.com',
    href: 'mailto:suportecountrystyle@hotmail.com',
    externo: false,
  },
  {
    Icone: MapPin,
    titulo: 'Endereço',
    valor: 'Rua Zulmira De Almeida Carvalho, Nº 20\nJd. Campestre, Pilar do Sul – SP, 18187-152',
    href: 'https://maps.google.com/?q=Rua+Zulmira+De+Almeida+Carvalho+20+Pilar+do+Sul+SP',
    externo: true,
  },
  {
    Icone: Clock,
    titulo: 'Horários de Atendimento',
    valor: 'Segunda à sexta-feira, das 9h00 às 18h00\nSábado, das 9h00 às 17h00',
    href: null,
    externo: false,
  },
];

const redes = [
  {
    nome: 'Instagram',
    href: 'https://instagram.com/estacaocountry',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    nome: 'Facebook',
    href: 'https://facebook.com/estacaocountry',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Eyebrow */}
        <div className="contact-eyebrow">
          <span className="contact-eyebrow-line" />
          <span className="contact-eyebrow-text">Fale Conosco</span>
          <span className="contact-eyebrow-line" />
        </div>

        <h1 className="contact-title">Entre em Contato</h1>
        <p className="contact-subtitle">
          Estamos prontos para atender você e ajudar a encontrar o produto ideal.
        </p>

        {/* Card principal */}
        <div className="contact-card">

          <div className="contact-card-header">
            <h2 className="contact-card-title">Estação Country</h2>
          </div>

          <ul className="contact-list">
            {contatos.map((item, i) => {
              const { Icone } = item;
              return (
                <li key={i} className="contact-item">
                  <div className="contact-item-icon">
                    <Icone size={18} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="contact-item-body">
                    <span className="contact-item-label">{item.titulo}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-item-value contact-item-link"
                        target={item.externo ? '_blank' : undefined}
                        rel={item.externo ? 'noopener noreferrer' : undefined}
                      >
                        {item.valor.split('\n').map((linha, j) => (
                          <span key={j}>{linha}</span>
                        ))}
                      </a>
                    ) : (
                      <span className="contact-item-value">
                        {item.valor.split('\n').map((linha, j) => (
                          <span key={j}>{linha}</span>
                        ))}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Divisor + redes sociais */}
          <div className="contact-socials-wrap">
            <span className="contact-socials-label">Nos siga nas redes</span>
            <div className="contact-socials">
              {redes.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.href}
                  className="contact-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                >
                  {rede.svg}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
