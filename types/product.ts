// types/product.ts
// Interface central do produto — será reutilizada em toda a aplicação.
// Ao integrar com o Spring Boot, basta apontar os campos para os da API.
 
export type ProductTag = 'Novo' | 'Oferta' | 'Mais Vendido';
 
export type ProductCategory =
  | 'Botas'
  | 'Chapéus'
  | 'Camisas'
  | 'Calças'
  | 'Cintos'
  | 'Feminino'
  | 'Masculino';
 
export interface Product {
  id: number;
  nome: string;
  marca: string;
  categoria: ProductCategory;
  preco: number;
  precoAntigo?: number;
  parcelas: string;
  avaliacao: number;
  imagem: string;
  cores: string[];
  destaque?: ProductTag;
  descricaoCurta: string;
}