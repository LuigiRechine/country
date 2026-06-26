'use client';

// app/produtos/page.tsx

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';    // ← novo
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
  generos: [],

  marcas: [],

  precoMin: 0,
  precoMax: 2000,

  cores: [],
  tamanhos: [],
};

export default function ProdutosPage() {
  const searchParams = useSearchParams();                    // ← novo
  const generoParam = searchParams.get('genero');         // ← novo
  const categoriaParam = searchParams.get('categoria');     // ← novo
  const marcaParam = searchParams.get('marca');          // ← novo

  const [filters, setFilters] = useState<ProductFilters>(INITIAL_FILTERS);
  const [sort, setSort] = useState<SortOption>('mais-vendidos');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Filtragem ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      // Filtros da URL (Navbar)
      if (generoParam && p.genero !== generoParam) return false;       // ← novo
      if (categoriaParam && p.categoria !== categoriaParam) return false; // ← novo
      if (marcaParam && p.marca !== marcaParam) return false;          // ← novo

      if (filters.generos.length > 0 && !filters.generos.includes(p.genero)) return false;

      // Filtros da sidebar
      if (filters.categorias.length > 0 && !filters.categorias.includes(p.categoria)) return false;
      if (filters.marcas.length > 0 && !filters.marcas.includes(p.marca)) return false;
      if (p.preco > filters.precoMax) return false;
      if (filters.cores.length > 0 && !p.cores.some((c) => filters.cores.includes(c))) return false;
      if (filters.tamanhos.length > 0 && !p.tamanhos.some((t) => filters.tamanhos.includes(t))) return false; // ← novo
      return true;
    });
  }, [filters, generoParam, categoriaParam, marcaParam]);

  // ── Título dinâmico baseado na URL ─────────────────────────────────────────
  const pageTitle = useMemo(() => {                                    // ← novo
    if (generoParam && categoriaParam) return `${categoriaParam} ${generoParam}`;
    if (generoParam) return `Produtos ${generoParam}`;
    if (categoriaParam) return categoriaParam;
    return 'Todos os Produtos';
  }, [generoParam, categoriaParam]);

  // ── Ordenação ──────────────────────────────────────────────────────────────
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case 'menor-preco': return arr.sort((a, b) => a.preco - b.preco);
      case 'maior-preco': return arr.sort((a, b) => b.preco - a.preco);
      case 'mais-recentes': return arr.sort((a, b) => b.id - a.id);
      case 'maior-desconto': return arr.sort((a, b) => {
        const da = a.precoAntigo ? ((a.precoAntigo - a.preco) / a.precoAntigo) : 0;
        const db = b.precoAntigo ? ((b.precoAntigo - b.preco) / b.precoAntigo) : 0;
        return db - da;
      });
      case 'a-z': return arr.sort((a, b) => a.nome.localeCompare(b.nome));
      default: return arr.sort((a, b) => b.avaliacao - a.avaliacao);
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

          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Produtos' },
            ]}
          />

          <header className="products-page-header">
            <h1 className="products-page-title">{pageTitle}</h1>  {/* ← dinâmico */}
            <p className="products-page-subtitle">
              Encontre botas, chapéus, roupas e acessórios das melhores marcas country.
            </p>
          </header>

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