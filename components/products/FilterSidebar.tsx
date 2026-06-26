'use client';

// components/products/FilterSidebar.tsx
import { useState } from 'react';
import type { ProductFilters } from '@/types/filters';
import type { ProductCategory, ProductGender } from '@/types/product';
import '@/styles/filterSidebar.css';

const CATEGORIAS: ProductCategory[] = [
  'Botas',
  'Chapéus',
  'Camisas',
  'Calças',
  'Cintos',
  'Acessórios'
];

const GENEROS: ProductGender[] = [
  'Masculino',
  'Feminino',
  'Unissex',
];

const MARCAS = ['Wrangler', 'Ariat', "Dock's", 'Goyazes', "Levi's", 'West Dust'];

const CORES = [
  { label: 'Preto', valor: '#000000' },
  { label: 'Marrom', valor: '#3B1F0A' },
  { label: 'Caramelo', valor: '#C68642' },
  { label: 'Azul', valor: '#1E3A8A' },
  { label: 'Branco', valor: '#F5F5F5' },
];

const TAMANHOS = ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'];

interface FilterSidebarProps {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ filters, onChange, isOpen, onClose }: FilterSidebarProps) {
  const [preco, setPreco] = useState(filters.precoMax);

  function toggleCategoria(cat: ProductCategory) {
    const next = filters.categorias.includes(cat)
      ? filters.categorias.filter((c) => c !== cat)
      : [...filters.categorias, cat];
    onChange({ ...filters, categorias: next });
  }

  function toggleGenero(genero: ProductGender) {
    const next = filters.generos.includes(genero)
      ? filters.generos.filter((g) => g !== genero)
      : [...filters.generos, genero];

    onChange({
      ...filters,
      generos: next,
    });
  }

  function toggleMarca(marca: string) {
    const next = filters.marcas.includes(marca)
      ? filters.marcas.filter((m) => m !== marca)
      : [...filters.marcas, marca];
    onChange({ ...filters, marcas: next });
  }

  function toggleCor(cor: string) {
    const next = filters.cores.includes(cor)
      ? filters.cores.filter((c) => c !== cor)
      : [...filters.cores, cor];
    onChange({ ...filters, cores: next });
  }

  function toggleTamanho(tam: string) {
    const next = filters.tamanhos.includes(tam)
      ? filters.tamanhos.filter((t) => t !== tam)
      : [...filters.tamanhos, tam];
    onChange({ ...filters, tamanhos: next });
  }

  function handlePreco(val: number) {
    setPreco(val);
    onChange({ ...filters, precoMax: val });
  }

  function limparFiltros() {
    setPreco(2000);

    onChange({
      categorias: [],
      generos: [],

      marcas: [],

      precoMin: 0,
      precoMax: 2000,

      cores: [],
      tamanhos: [],
    });
  }

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />}

      <aside className={`filter-sidebar ${isOpen ? 'filter-sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Filtros</h2>
          <div className="sidebar-header-actions">
            <button className="sidebar-clear-btn" onClick={limparFiltros}>
              Limpar tudo
            </button>
            <button className="sidebar-close-btn" onClick={onClose} aria-label="Fechar filtros">
              ✕
            </button>
          </div>
        </div>

        {/* Categorias */}
        <div className="filter-group">
          <h3 className="filter-group-title">Categorias</h3>
          <ul className="filter-radio-list">
            {CATEGORIAS.map((cat) => (
              <li key={cat}>
                <label className="filter-radio-item">
                  <input
                    type="checkbox"
                    checked={filters.categorias.includes(cat)}
                    onChange={() => toggleCategoria(cat)}
                    className="filter-checkbox"
                  />
                  <span className="filter-radio-label">{cat}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-divider" />

        <div className="filter-group">
          <h3 className="filter-group-title">Público</h3>

          <ul className="filter-radio-list">
            {GENEROS.map((genero) => (
              <li key={genero}>
                <label className="filter-radio-item">
                  <input
                    type="checkbox"
                    checked={filters.generos.includes(genero)}
                    onChange={() => toggleGenero(genero)}
                    className="filter-checkbox"
                  />

                  <span className="filter-radio-label">
                    {genero}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-divider" />

        {/* Marcas */}
        <div className="filter-group">
          <h3 className="filter-group-title">Marcas</h3>
          <ul className="filter-radio-list">
            {MARCAS.map((marca) => (
              <li key={marca}>
                <label className="filter-radio-item">
                  <input
                    type="checkbox"
                    checked={filters.marcas.includes(marca)}
                    onChange={() => toggleMarca(marca)}
                    className="filter-checkbox"
                  />
                  <span className="filter-radio-label">{marca}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-divider" />

        {/* Faixa de preço */}
        <div className="filter-group">
          <h3 className="filter-group-title">Faixa de Preço</h3>
          <div className="filter-price-range">
            <input
              type="range"
              min={0}
              max={2000}
              step={10}
              value={preco}
              onChange={(e) => handlePreco(Number(e.target.value))}
              className="filter-range-input"
            />
            <div className="filter-price-labels">
              <span>R$ 0</span>
              <span>R$ {preco.toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>

        <div className="filter-divider" />

        {/* Cores */}
        <div className="filter-group">
          <h3 className="filter-group-title">Cores</h3>
          <div className="filter-colors">
            {CORES.map((cor) => (
              <button
                key={cor.valor}
                className={`filter-color-btn ${filters.cores.includes(cor.valor) ? 'filter-color-btn--active' : ''}`}
                style={{ backgroundColor: cor.valor }}
                onClick={() => toggleCor(cor.valor)}
                aria-label={cor.label}
                title={cor.label}
              />
            ))}
          </div>
        </div>

        <div className="filter-divider" />

        {/* Tamanhos */}
        <div className="filter-group">
          <h3 className="filter-group-title">Tamanhos</h3>
          <div className="filter-sizes">
            {TAMANHOS.map((tam) => (
              <button
                key={tam}
                className={`filter-size-btn ${filters.tamanhos.includes(tam) ? 'filter-size-btn--active' : ''}`}
                onClick={() => toggleTamanho(tam)}
              >
                {tam}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
