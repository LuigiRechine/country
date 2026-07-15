// app/produtos/[id]/page.tsx
import { products } from '@/data/products';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/products/ProductCard';
import DescriptionSection from '@/components/product/DescriptionSection'; // ← Novo componente
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/produtosId.css';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="not-found">Produto não encontrado 😢</div>;
  }

  const relatedProducts = products
    .filter(p => p.categoria === product.categoria && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className='produto-page'>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-main">
          <div className="esquerda">
            <ProductImageGallery imagens={product.imagens} nome={product.nome} />
            
            <DescriptionSection descricao={product.descricao} />
          </div>
          
          <ProductInfo product={product} />
        </div>

        {/* Produtos Relacionados */}
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
    </div>
  );
}