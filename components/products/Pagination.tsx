'use client';

// components/products/Pagination.tsx
import '@/styles/pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Paginação de produtos">
      <button
        className="pagination-btn pagination-btn--prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        ← Anterior
      </button>

      <div className="pagination-pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-page ${page === currentPage ? 'pagination-page--active' : ''}`}
            onClick={() => onPageChange(page)}
            aria-label={`Ir para a página ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-btn pagination-btn--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        Próximo →
      </button>
    </nav>
  );
}
