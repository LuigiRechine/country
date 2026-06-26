// components/products/ProductGrid.tsx
import type { Product } from '@/types/product';
import ProductCard from './ProductCard';
import '@/styles/productGrid.css';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <p className="product-grid-empty-title">Nenhum produto encontrado</p>
        <p className="product-grid-empty-sub">Tente ajustar os filtros para ver mais resultados.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
