'use client';

import Link from 'next/link';
import '@/styles/Footer.css';
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

// ─── Dados editáveis ──────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5515981335846'; // ex: 5515999990000
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e gostaria de saber mais sobre os produtos.';

const footerData = {
  descricao:
    'Há mais de uma década levando o melhor do universo country para todo o Brasil.',
  redes: [
    { nome: 'Instagram', href: 'https://instagram.com/estacao.country', icone: 'IG' },
    { nome: 'Facebook', href: 'https://www.facebook.com/100064565327834', icone: 'FB' },
    { nome: 'WhatsApp', href: `https://wa.me/${5515981335846}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, icone: 'WA' },
  ],
  institucional: [
    { label: 'Sobre Nós', href: '/#sobre' },
    { label: 'Nossa História', href: '/#sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Trocas e Devoluções', href: '/trocas-e-devolucoes' },
    { label: 'Política de Envios', href: '/envios' },
    { label: 'Pagamentos', href: '/pagamentos' },
    { label: 'Garantia dos Produtos', href: '/garantia' },
    { label: 'Cancelamentos', href: '/cancelamentos' },
  ],
  categorias: [
    { label: 'Botas', href: '/produtos?categoria=Botas' },
    { label: 'Chapéus', href: '/produtos?categoria=Chapéus' },
    { label: 'Camisas', href: '/produtos?categoria=Camisas' },
    { label: 'Calças', href: '/produtos?categoria=Calças' },
    { label: 'Cintos', href: '/produtos?categoria=Cintos' },
    { label: 'Acessórios', href: '/produtos?categoria=Acessórios' },
    { label: 'Feminino', href: '/produtos?genero=Feminino' },
    { label: 'Masculino', href: '/produtos?genero=Masculino' },
  ],
  atendimento: {
    telefone: '(15) 3527-7550',
    whatsapp: '(15) 9 8133-5846',
    email: 'estacaodamoda.itape@gmail.com',
    horario: 'Seg–Sex: 9h às 18h\nSáb: 9h às 16h30',
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

  const pathname = usePathname();
  const router = useRouter();

  const irParaSobre = () => {
    if (pathname === '/') {
      document.getElementById('sobre')?.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      router.push('/#sobre');
    }
  };

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
                {item.href === '/#sobre' ? (
                  <button
                    type="button"
                    onClick={irParaSobre}
                    className="footer-link footer-link-button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                )}
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
