'use client';

import Link from 'next/link';
import Image from 'next/image';
import '@/styles/categories.css';

interface Category {
  id: number;
  nome: string;
  imagem: string;
  href: string;
}

const categorias: Category[] = [
  { id: 1, nome: 'Botas',     imagem: '/botas.png',     href: '/produtos?categoria=Botas' },
  { id: 2, nome: 'Chapéus',   imagem: '/chapeus.png',   href: '/produtos?categoria=Chapéus' },
  { id: 3, nome: 'Camisas',   imagem: '/camisas.png',   href: '/produtos?categoria=Camisas' },
  { id: 4, nome: 'Calças',    imagem: '/calcas.jpg',    href: '/produtos?categoria=Calças' },
  { id: 5, nome: 'Cintos',    imagem: '/cintos.png',    href: '/produtos?categoria=Cintos' },
  { id: 6, nome: 'Acessorios',    imagem: '/acessorios.png',    href: '/produtos?categoria=Acessórios' },
  { id: 7, nome: 'Feminino',  imagem: '/feminino.jpg',  href: '/produtos?genero=Feminino' },
  { id: 8, nome: 'Masculino', imagem: '/masculino.jpg', href: '/produtos?genero=Masculino' },
];

export default function Categories() {
  return (
    <section className="categories-section">

      {/* Divisor decorativo superior */}
      <div className="categories-divider">
        <span className="categories-divider-line" />
        <span className="categories-divider-icon">✦</span>
        <span className="categories-divider-line" />
      </div>

      {/* Cabeçalho */}
      <div className="categories-header">
        <h2 className="categories-title">Navegue por Categoria</h2>
        <p className="categories-subtitle">
          Encontre os melhores produtos para viver o verdadeiro estilo country.
        </p>
      </div>

      {/* Grid de categorias */}
      <div className="categories-grid">
        {categorias.map((cat) => (
          <Link key={cat.id} href={cat.href} className="category-item">

            {/* Anel dourado externo (efeito "story") */}
            <div className="category-ring">

              {/* Círculo da imagem */}
              <div className="category-image-wrapper">
                <Image
                  src={cat.imagem}
                  alt={cat.nome}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 110px, 140px"
                />

                {/* Overlay sutil no hover */}
                <div className="category-image-overlay" />
              </div>
            </div>

            {/* Nome da categoria */}
            <span className="category-name">{cat.nome}</span>

          </Link>
        ))}
      </div>

    </section>
  );
}
