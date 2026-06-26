'use client';

// app/produtos/page.tsx
// Ponto de entrada da listagem de produtos.
// Ao integrar com o Spring Boot, substitua o import de `products`
// por uma chamada ao serviço: const products = await productService.getAll(filters);

import { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Breadcrumb from '@/components/products/Breadcrumb';
import FilterSidebar from '@/components/products/FilterSidebar';
import SortBar from '@/components/products/SortBar';
import ProductGrid from '@/components/products/ProductGrid';
import Pagination from '@/components/products/Pagination';
import { products as allProducts } from '@/data/products';
import type { ProductFilters, SortOption } from '@/types/filters';
import '@/styles/productsPage.css';

const PRODUCTS_PER_PAGE = 8;

const INITIAL_FILTERS: ProductFilters = {
  categorias: [],
  marcas: [],
  precoMin: 0,
  precoMax: 2000,
  cores: [],
  tamanhos: [],
};

export default function ProdutosPage() {
  const [filters, setFilters] = useState<ProductFilters>(INITIAL_FILTERS);
  const [sort, setSort] = useState<SortOption>('mais-vendidos');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Filtragem ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      if (filters.categorias.length > 0 && !filters.categorias.includes(p.categoria)) return false;
      if (filters.marcas.length > 0 && !filters.marcas.includes(p.marca)) return false;
      if (p.preco > filters.precoMax) return false;
      if (filters.cores.length > 0 && !p.cores.some((c) => filters.cores.includes(c))) return false;
      return true;
    });
  }, [filters]);

  // ── Ordenação ──────────────────────────────────────────────────────────────
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case 'menor-preco':    return arr.sort((a, b) => a.preco - b.preco);
      case 'maior-preco':    return arr.sort((a, b) => b.preco - a.preco);
      case 'mais-recentes':  return arr.sort((a, b) => b.id - a.id);
      case 'maior-desconto': return arr.sort((a, b) => {
        const da = a.precoAntigo ? ((a.precoAntigo - a.preco) / a.precoAntigo) : 0;
        const db = b.precoAntigo ? ((b.precoAntigo - b.preco) / b.precoAntigo) : 0;
        return db - da;
      });
      case 'a-z':            return arr.sort((a, b) => a.nome.localeCompare(b.nome));
      default:               return arr.sort((a, b) => b.avaliacao - a.avaliacao);
    }
  }, [filtered, sort]);

  // ── Paginação ──────────────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(sorted.length / PRODUCTS_PER_PAGE));
  const paginated = sorted.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  function handlePageChange(p: number) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleFiltersChange(next: ProductFilters) {
    setFilters(next);
    setPage(1);
  }

  return (
    <>
      <Navbar />

      <main className="products-page">
        <div className="products-page-container">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Produtos' },
            ]}
          />

          {/* Cabeçalho da página */}
          <header className="products-page-header">
            <h1 className="products-page-title">Todos os Produtos</h1>
            <p className="products-page-subtitle">
              Encontre botas, chapéus, roupas e acessórios das melhores marcas country.
            </p>
          </header>

          {/* Área principal: sidebar + grid */}
          <div className="products-layout">

            <FilterSidebar
              filters={filters}
              onChange={handleFiltersChange}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            <div className="products-main">
              <SortBar
                total={sorted.length}
                sort={sort}
                onSort={(s) => { setSort(s); setPage(1); }}
                onOpenFilters={() => setSidebarOpen(true)}
              />

              <ProductGrid products={paginated} />

              {totalPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
