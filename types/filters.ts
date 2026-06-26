// types/filters.ts

import type { ProductCategory, ProductGender } from './product';

export interface ProductFilters {
  categorias: ProductCategory[];
  generos: ProductGender[];

  marcas: string[];

  precoMin: number;
  precoMax: number;

  cores: string[];
  tamanhos: string[];
}

export type SortOption =
  | 'mais-vendidos'
  | 'menor-preco'
  | 'maior-preco'
  | 'mais-recentes'
  | 'maior-desconto'
  | 'a-z';