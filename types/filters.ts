// types/filters.ts
// Tipagem dos filtros da página de listagem.
 
import type { ProductCategory } from './product';
 
export interface ProductFilters {
  categorias: ProductCategory[];
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
 