// app/produtos/[id]/page.tsx
import { products } from '@/data/products';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/products/ProductCard';   // ← Importando o seu card
import '@/styles/produtosId.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="not-found">Produto não encontrado 😢</div>;
  }

  // Produtos relacionados (mesma categoria, exceto o atual)
  const relatedProducts = products
    .filter(p => p.categoria === product.categoria && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-main">
          <ProductImageGallery imagens={product.imagens} nome={product.nome} />
          <ProductInfo product={product} />
        </div>

        {/* Descrição */}
        <section className="description-section">
          <h2>Descrição do Produto</h2>
          <p>{product.descricaoCurta}</p>
        </section>

        {/* Produtos Relacionados - Usando seu ProductCard */}
        <section className="related-section">
          <h2>Você também pode gostar</h2>
          <div className="related-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}