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
  { id: 1, nome: 'Botas',     imagem: '/botas.png',     href: '/botas' },
  { id: 2, nome: 'Chapéus',   imagem: '/chapeus.png',   href: '/chapeus' },
  { id: 3, nome: 'Camisas',   imagem: '/camisas.png',   href: '/camisas' },
  { id: 4, nome: 'Calças',    imagem: '/botas.png',    href: '/calcas' },
  { id: 5, nome: 'Cintos',    imagem: '/chapeus.png',    href: '/cintos' },
  { id: 6, nome: 'Acessorios',    imagem: '/chapeus.png',    href: '/acessorios' },
  { id: 7, nome: 'Feminino',  imagem: '/camisas.png',  href: '/feminino' },
  { id: 8, nome: 'Masculino', imagem: '/botas.png', href: '/masculino' },
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
