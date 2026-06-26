'use client';
import { useState } from 'react';
import '@/styles/info.css';

type Props = {
  product: any;
};

export default function ProductInfo({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.cores[0]);
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    if (!selectedSize) {
      alert('❗ Por favor, selecione um tamanho!');
      return;
    }

    alert(`✅ Adicionado ao carrinho!\n\n` +
      `${product.nome}\n` +
      `Tamanho: ${selectedSize}\n` +
      `Cor: ${selectedColor}\n` +
      `Quantidade: ${quantity}`);
  };

  return (
    <div className="product-info">
      <div className="breadcrumb">Início &gt; {product.categoria}</div>

      <h1 className="product-title">{product.nome}</h1>

      <div className="brand-info">
        Marca: <strong>{product.marca}</strong> • Código: {product.id.toString().padStart(6, '0')}
      </div>

      <div className="rating">★★★★☆ {product.avaliacao}</div>

      {/* Preços */}
      <div className="price-section">
        {product.precoAntigo && (
          <span className="old-price">R$ {product.precoAntigo.toFixed(2)}</span>
        )}
        <span className="current-price">R$ {product.preco.toFixed(2)}</span>
        <div className="pix-price">ou R$ {(product.preco * 0.9).toFixed(2)} no PIX (10% OFF)</div>
        <div className="installments">{product.parcelas}</div>
      </div>

      {/* Cores */}
      <div className="option-group">
        <label>Cor:</label>
        <div className="color-options">
          {product.cores.map((cor: string, i: number) => (
            <button
              key={i}
              className={`color-dot ${selectedColor === cor ? 'selected' : ''}`}
              style={{ backgroundColor: cor }}
              onClick={() => setSelectedColor(cor)}
            />
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div className="option-group">
        <label>Tamanho: <span className="selected-size">{selectedSize || 'Selecione'}</span></label>
        <div className="size-options">
          {product.tamanhos.map((tam: string) => (
            <button
              key={tam}
              className={`size-btn ${selectedSize === tam ? 'selected' : ''}`}
              onClick={() => setSelectedSize(tam)}
            >
              {tam}
            </button>
          ))}
        </div>
      </div>

      {/* Quantidade + Comprar */}
      <div className="buy-section">
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="buy-btn" onClick={handleBuy}>
          COMPRAR
        </button>
      </div>

      {/* Frete */}
      {/* Frete - Mais parecido com o site real */}
      <div className="shipping-section">
        <h4>🚚 Meios de Envio</h4>
        <div className="cep-box">
          <input
            type="text"
            placeholder="Seu CEP"
            maxLength={8}
            className="cep-input"
          />
          <button type="button" className="calculate-btn">CALCULAR</button>
        </div>
        <a href="#" className="cep-link">Não sei meu CEP</a>
      </div>
    </div>
  );
}