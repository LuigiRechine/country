'use client';

import { RefreshCw, CornerDownLeft, AlertTriangle, FileText, MessageCircle } from 'lucide-react';
import '@/styles/returnsSection.css';

export default function ReturnsSection() {
  return (
    <section className="returns-section">
      <div className="returns-container">

        <header className="returns-header">
          <h1 className="returns-title">Trocas e Devoluções</h1>
          <div className="returns-divider" />
          <p className="returns-intro">
            Na Estação Country, buscamos garantir a satisfação dos nossos clientes em todas as compras. Nossa Política de Trocas e Devoluções segue as disposições do Código de Defesa do Consumidor, estabelecendo regras claras e transparentes para oferecer um atendimento seguro e eficiente.
          </p>
        </header>

        <div className="returns-content">

          {/* ── Trocas ── */}
          <div className="returns-card">
            <div className="returns-card-eyebrow">
              <RefreshCw size={14} strokeWidth={2} aria-hidden="true" />
              <span>Política de Trocas</span>
            </div>
            <h2 className="returns-card-title">Trocas</h2>
            <p>A Estação Country oferece a primeira troca com reenvio gratuito (exceto para produtos em promoção). Confira abaixo as condições para realizar sua solicitação:</p>

            <ul className="returns-list">
              <li>
                <strong>Primeira Troca:</strong> A primeira troca conta com um reenvio gratuito realizado pela Estação Country. O envio do produto até nossa loja é de responsabilidade do cliente. Em caso de novas trocas referentes ao mesmo pedido, os custos de frete serão de responsabilidade do cliente.
              </li>

              <li>
                <strong>Prazo para Solicitação:</strong> O pedido de troca deverá ser realizado em até 7 dias corridos após o recebimento do produto.
              </li>

              <li>
                <strong>Condições do Produto:</strong> O produto deverá estar sem indícios de uso, em perfeitas condições, com etiquetas originais, embalagem original e acompanhado de todos os acessórios enviados.
              </li>

              <li>
                <strong>Escolha do Novo Produto:</strong> O cliente poderá optar por outro item disponível em estoque. Caso o novo produto possua valor superior, será necessário efetuar o pagamento da diferença. Se o valor for inferior, poderá ser gerado um crédito para futuras compras ou realizado o reembolso da diferença, conforme o caso.
              </li>

              <li>
                <strong>Envio para Troca:</strong> O produto deverá ser enviado acompanhado da Nota Fiscal (DANFE) ou Declaração de Conteúdo. O envio poderá ser realizado pelos Correios ou pela transportadora indicada pela Estação Country.
              </li>

              <li>
                <strong>Proteção da Embalagem:</strong> Recomendamos que a embalagem original seja protegida por outra embalagem durante o transporte, evitando danos causados por fitas adesivas, etiquetas ou avarias.
              </li>

              <li>
                Cada pedido possui direito a <strong>uma única troca gratuita</strong>, exceto nos casos de defeito de fabricação.
              </li>
            </ul>

            <div className="returns-alert">
              <RefreshCw size={18} strokeWidth={2} className="returns-alert-icon" aria-hidden="true" />
              <p>
                <strong>Trocas adicionais:</strong> Após a realização da primeira troca, eventuais novas solicitações relacionadas ao mesmo pedido poderão ter os custos de envio cobrados do cliente, exceto quando houver defeito de fabricação constatado.
              </p>
            </div>

            <div className="returns-cta-wrap">
              <p>
                Para solicitar uma troca, utilize nossa Central de Trocas e Devoluções ou entre em contato pelo WhatsApp.
              </p>
              <div className="returns-cta-group">
                <a
                  href="https://countrystyle.troque.app.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="returns-cta-btn returns-cta-btn--primary"
                >
                  Central de Trocas e Devoluções
                </a>
                <a
                  href="https://wa.me/5515997586603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="returns-cta-btn returns-cta-btn--outline"
                >
                  WhatsApp (15) 99758-6603
                </a>
              </div>
            </div>
          </div>

          {/* ── Devolução ── */}
          <div className="returns-card">
            <div className="returns-card-eyebrow">
              <CornerDownLeft size={14} strokeWidth={2} aria-hidden="true" />
              <span>Arrependimento ou Desistência</span>
            </div>
            <h2 className="returns-card-title">Devolução por Arrependimento</h2>
            <p>
              Caso deseje desistir da compra, você poderá solicitar a devolução do produto dentro do prazo previsto pelo Código de Defesa do Consumidor, observando as condições abaixo.
            </p>

            <ul className="returns-list">
              <li>
                <strong>Prazo para Devolução:</strong> A solicitação deverá ser realizada em até 7 dias corridos após o recebimento do pedido.
              </li>

              <li>
                <strong>Condições do Produto:</strong> O item deverá estar sem sinais de uso, com etiquetas originais, embalagem original e acompanhado de todos os acessórios enviados.
              </li>

              <li>
                <strong>Documentação:</strong> O produto deverá ser enviado juntamente com a Nota Fiscal (DANFE) ou Declaração de Conteúdo, informando o motivo da devolução.
              </li>

              <li>
                <strong>Reembolso:</strong> Após o recebimento e análise das condições do produto pela equipe da Estação Country, o reembolso será realizado conforme o meio de pagamento utilizado na compra, respeitando os prazos das instituições financeiras quando aplicável.
              </li>
            </ul>

            <div className="returns-cta-wrap">
              <p>
                Para iniciar uma devolução, utilize nossa Central de Trocas e Devoluções ou entre em contato pelo WhatsApp.
              </p>
              <div className="returns-cta-group">
                <a
                  href="https://countrystyle.troque.app.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="returns-cta-btn returns-cta-btn--primary"
                >
                  Central de Trocas e Devoluções
                </a>
                <a
                  href="https://wa.me/5515997586603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="returns-cta-btn returns-cta-btn--outline"
                >
                  WhatsApp (15) 99758-6603
                </a>
              </div>
            </div>
          </div>

          {/* ── Defeito / Divergência ── */}
          <div className="returns-card">
            <div className="returns-card-eyebrow">
              <AlertTriangle size={14} strokeWidth={2} aria-hidden="true" />
              <span>Produto com Problema</span>
            </div>
            <h2 className="returns-card-title">Divergência ou Defeito no Produto</h2>
            <p>
              Caso você receba um produto com defeito de fabricação, avariado durante o transporte ou diferente daquele adquirido, entre em contato conosco o quanto antes. Após a análise e confirmação da ocorrência, a Estação Country providenciará a substituição do produto ou outra solução adequada, sem custos adicionais para o cliente.
            </p>

            <div className="returns-notice">
              <strong>Importante:</strong> Confira sempre os produtos recebidos no momento da entrega. Pequenas variações de cor, tonalidade ou textura podem ocorrer devido às configurações de tela dos dispositivos utilizados para visualização das imagens, não sendo consideradas defeitos de fabricação.
            </div>
          </div>

          {/* ── Rodapé informativo ── */}
          <div className="returns-footer-card">
            <div className="returns-footer-row">
              <div className="returns-footer-item">
                <FileText size={22} strokeWidth={1.6} className="returns-footer-icon" aria-hidden="true" />
                <div>
                  <strong>Código de Defesa do Consumidor</strong>
                  <p>
                    Para conhecer melhor seus direitos e deveres nas relações de consumo, consulte o Código de Defesa do Consumidor.
                  </p>
                </div>
              </div>
              <div className="returns-footer-item">
                <MessageCircle size={22} strokeWidth={1.6} className="returns-footer-icon" aria-hidden="true" />
                <div>
                  <strong>Atendimento</strong>
                  <p>
                    Em caso de dúvidas, nossa equipe está à disposição para atendê-lo pelo WhatsApp durante o horário de atendimento da Estação Country.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
