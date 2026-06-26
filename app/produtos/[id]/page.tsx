import { products } from '@/data/products';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import '@/styles/produtosId.css';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="not-found">Produto não encontrado 😢</div>;
  }

  const handleAddToCart = (product: any, tamanho: string, cor: string, quantidade: number) => {
    alert(`✅ Adicionado ao carrinho!\n\n${product.nome}\nTamanho: ${tamanho}\nCor: ${cor}\nQuantidade: ${quantidade}`);
    // Aqui vamos integrar o carrinho global depois
  };

  return (
    <div className="product-detail-page">
      <div className="product-main">
        <ProductImageGallery imagens={product.imagens} nome={product.nome} />
        <ProductInfo product={product} onAddToCart={handleAddToCart} />
      </div>

      {/* Descrição */}
      <section className="description-section">
        <h2>Descrição do Produto</h2>
        <p>{product.descricaoCurta}</p>
      </section>

      {/* Produtos Relacionados */}
      <section className="related-section">
        <h2>Você também pode gostar</h2>
        <div className="related-grid">
          {products
            .filter(p => p.categoria === product.categoria && p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <a key={p.id} href={`/produtos/${p.id}`} className="related-card">
                <img src={p.imagens[0]} alt={p.nome} />
                <p>{p.nome}</p>
                <strong>R$ {p.preco.toFixed(2)}</strong>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}