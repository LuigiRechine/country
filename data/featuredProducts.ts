export type Product = {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  precoAntigo?: number;
  parcelas: string;
  avaliacao: number;
  imagem: string;
  destaque?: 'Novo' | 'Mais Vendido' | 'Oferta';
  cores: string[];
};

export const featuredProducts: Product[] = [
  {
    id: 1,
    nome: "Bota Texas Masculina",
    marca: "Wrangler",
    preco: 399.90,
    precoAntigo: 459.90,
    parcelas: "10x de R$ 39,99",
    avaliacao: 4.8,
    imagem: "/produtos/bota-texas.jpg",
    destaque: "Mais Vendido",
    cores: ["#3b2a1d", "#000000", "#8b5a2b"],
  },
  {
    id: 2,
    nome: "Chapéu Cowboy Premium",
    marca: "Stetson",
    preco: 289.90,
    precoAntigo: 329.90,
    parcelas: "8x de R$ 36,24",
    avaliacao: 4.9,
    imagem: "/produtos/chapeu-stetson.jpg",
    destaque: "Novo",
    cores: ["#d2b48c", "#2c2c2c", "#8b4513"],
  },
  {
    id: 3,
    nome: "Camisa Xadrez Western",
    marca: "Ariat",
    preco: 189.90,
    precoAntigo: undefined,
    parcelas: "6x de R$ 31,65",
    avaliacao: 4.7,
    imagem: "/produtos/camisa-xadrez.jpg",
    destaque: undefined,
    cores: ["#8b0000", "#003366", "#4b2e1a"],
  },
  {
    id: 4,
    nome: "Calça Jeans Rodeio",
    marca: "Rockies",
    preco: 279.90,
    precoAntigo: 319.90,
    parcelas: "8x de R$ 34,99",
    avaliacao: 4.8,
    imagem: "/produtos/calca-jeans.jpg",
    destaque: "Oferta",
    cores: ["#1e3a8a", "#334155", "#4f46e5"],
  },
];