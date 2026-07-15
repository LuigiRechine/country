// types/cart.ts
 
export interface CartItem {
  id: string;          // único por produto + cor + tamanho (ex: "1-#000000-42")
  productId: number;
  nome: string;
  marca: string;
  imagem: string;
  preco: number;
  cor: string;
  tamanho: string;
  quantidade: number;
}
 