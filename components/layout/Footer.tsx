'use client';

import Link from 'next/link';
import '@/styles/Footer.css';
import Image from "next/image";

// ─── Dados editáveis ──────────────────────────────────────────────────────────
const footerData = {
  descricao:
    'Há mais de uma década levando o melhor do universo country para todo o Brasil.',
  redes: [
    { nome: 'Instagram', href: 'https://instagram.com/estacaocountry', icone: 'IG' },
    { nome: 'Facebook', href: 'https://facebook.com/estacaocountry', icone: 'FB' },
    { nome: 'WhatsApp', href: 'https://wa.me/55SEUNUMERO', icone: 'WA' },
  ],
  institucional: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Nossa História', href: '/historia' },
    { label: 'Contato', href: '/contato' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  categorias: [
    { label: 'Botas', href: '/botas' },
    { label: 'Chapéus', href: '/chapeus' },
    { label: 'Camisas', href: '/camisas' },
    { label: 'Calças', href: '/calcas' },
    { label: 'Feminino', href: '/feminino' },
    { label: 'Masculino', href: '/masculino' },
  ],
  atendimento: {
    telefone: '(15) 0000-0000',
    whatsapp: '(15) 00000-0000',
    email: 'contato@estacaocountry.com.br',
    horario: 'Seg–Sex: 8h às 18h\nSáb: 8h às 13h',
  },
  pagamentos: [
    { label: 'Visa', sigla: 'VISA' },
    { label: 'Mastercard', sigla: 'MC' },
    { label: 'PIX', sigla: 'PIX' },
    { label: 'Mercado Pago', sigla: 'MP' },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ── Coluna 1 — Logo + descrição + redes ── */}
        <div className="footer-col footer-col--brand">
          <Link
            href="/"
            className="footer-logo"
            aria-label="Ir para a Home"
          >
            <Image
              src="/logo.png"
              alt="Estação Country"
              width={190}
              height={75}
              className="footer-logo-image"
            />
          </Link>

          <p className="footer-desc">{footerData.descricao}</p>

          <div className="footer-socials">
            {footerData.redes.map((rede) => (
              <a
                key={rede.nome}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={rede.nome}
              >
                {/* Substitua o conteúdo abaixo pelo ícone SVG real da rede */}
                <span aria-hidden="true">{rede.icone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Coluna 2 — Institucional ── */}
        <div className="footer-col">
          <h3 className="footer-col-title">Institucional</h3>
          <ul className="footer-links">
            {footerData.institucional.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Coluna 3 — Categorias ── */}
        <div className="footer-col">
          <h3 className="footer-col-title">Categorias</h3>
          <ul className="footer-links">
            {footerData.categorias.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Coluna 4 — Atendimento ── */}
        <div className="footer-col">
          <h3 className="footer-col-title">Atendimento</h3>
          <ul className="footer-contact">
            <li>
              <span className="footer-contact-label">Telefone</span>
              <span className="footer-contact-value">{footerData.atendimento.telefone}</span>
            </li>
            <li>
              <span className="footer-contact-label">WhatsApp</span>
              <a
                href={`https://wa.me/55SEUNUMERO`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-value footer-contact-link"
              >
                {footerData.atendimento.whatsapp}
              </a>
            </li>
            <li>
              <span className="footer-contact-label">E-mail</span>
              <a
                href={`mailto:${footerData.atendimento.email}`}
                className="footer-contact-value footer-contact-link"
              >
                {footerData.atendimento.email}
              </a>
            </li>
            <li>
              <span className="footer-contact-label">Horário</span>
              <span className="footer-contact-value footer-contact-horario">
                {footerData.atendimento.horario.split('\n').map((linha, i) => (
                  <span key={i}>{linha}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Rodapé inferior ── */}
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <p className="footer-copy">
            © {ano} Estação Country. Todos os direitos reservados.
          </p>

          {/* Formas de pagamento — substitua pelas imagens/ícones reais */}
          <div className="footer-payments" aria-label="Formas de pagamento aceitas">
            {footerData.pagamentos.map((p) => (
              <div key={p.label} className="footer-payment-badge" title={p.label}>
                {p.sigla}
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
