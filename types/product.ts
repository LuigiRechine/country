// types/product.ts

export type ProductTag = 'Novo' | 'Oferta' | 'Mais Vendido';

export type ProductCategory =
  | 'Botas'
  | 'Chapéus'
  | 'Camisas'
  | 'Calças'
  | 'Cintos'
  | 'Acessórios';

export type ProductGender = 'Masculino' | 'Feminino' | 'Unissex';

export interface Product {
  id: number;
  nome: string;
  marca: string;
  categoria: ProductCategory;
  genero: ProductGender;       // ← novo
  preco: number;
  precoAntigo?: number;
  parcelas: string;
  avaliacao: number;
  imagens: string[];           // ← era `imagem: string`
  cores: string[];
  tamanhos: string[];          // ← novo (ex: ['37', '38', '39'] ou ['P', 'M', 'G'])
  destaque?: ProductTag;
  descricaoCurta: string;
}