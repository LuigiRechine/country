'use client';

// components/products/SortBar.tsx
import type { SortOption } from '@/types/filters';
import '@/styles/sortBar.css';

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'mais-vendidos',   label: 'Mais Vendidos' },
  { value: 'menor-preco',     label: 'Menor Preço' },
  { value: 'maior-preco',     label: 'Maior Preço' },
  { value: 'mais-recentes',   label: 'Mais Recentes' },
  { value: 'maior-desconto',  label: 'Maior Desconto' },
  { value: 'a-z',             label: 'A–Z' },
];

interface SortBarProps {
  total: number;
  sort: SortOption;
  onSort: (value: SortOption) => void;
  onOpenFilters: () => void;
}

export default function SortBar({ total, sort, onSort, onOpenFilters }: SortBarProps) {
  return (
    <div className="sort-bar">
      <p className="sort-bar-count">
        <strong>{total}</strong> produto{total !== 1 ? 's' : ''} encontrado{total !== 1 ? 's' : ''}
      </p>

      <div className="sort-bar-right">
        {/* Botão "Filtros" visível apenas em mobile */}
        <button className="sort-bar-filter-btn" onClick={onOpenFilters}>
          <span aria-hidden="true">⚙</span> Filtros
        </button>

        <div className="sort-bar-select-wrap">
          <label htmlFor="sort-select" className="sort-bar-label">Ordenar por:</label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => onSort(e.target.value as SortOption)}
            className="sort-bar-select"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
