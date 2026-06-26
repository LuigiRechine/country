'use client';

import Image from 'next/image';
import '@/styles/brands.css';

const brands = [
  { id: 1,  name: 'Wrangler',   logo: '/marcas/wrangler.png'   },
  { id: 2,  name: 'Ariat',      logo: '/marcas/ariat.svg'      },
  { id: 3,  name: 'King Farm', logo: '/marcas/kingFarm.png'    },
  { id: 4,  name: 'Stetson',    logo: '/marcas/stetson.png'    },
  { id: 5,  name: 'Resistol',   logo: '/marcas/resistol.png'   },
  { id: 6,  name: "Texas Farm",     logo: '/marcas/texasFarm.webp'      },
  { id: 7,  name: 'Radade',   logo: '/marcas/radade.png'   },
  { id: 8,  name: 'TXC',      logo: '/marcas/txc.png'      },
  { id: 9,  name: 'DGO',    logo: '/marcas/dgo.png'    },
  { id: 10, name: 'Goyazes',    logo: '/marcas/goyazes.png'    },
  { id: 11, name: 'Jacomo',  logo: '/marcas/jacomo.png'  },
  { id: 12, name: 'Cinch',      logo: '/marcas/cinch.avif'      },
  { id: 13, name: 'Self',      logo: '/marcas/self.webp'      },
  { id: 14, name: 'Estação Country',      logo: '/marcas/estacaoCountry.png'      },
  { id: 15, name: 'American Country',      logo: '/marcas/americanCountry.png'      },
  { id: 16, name: 'Best Rodeo',      logo: '/marcas/bestRodeo.png'      },
  { id: 17, name: 'Kaeru',      logo: '/marcas/kaeru.png'      },
  { id: 18, name: 'Tassa',      logo: '/marcas/Tassa.webp'      },
  { id: 19, name: 'Pralana',      logo: '/marcas/pralana.webp'      },
  { id: 20, name: 'El Dourado',      logo: '/marcas/elDourado.png'      },
  { id: 21, name: 'Marcatto',      logo: '/marcas/marcatto.png'      },
  { id: 22, name: 'Dallas',      logo: '/marcas/dallas.png'      },
  { id: 23, name: 'Pleno Cowboy',      logo: '/marcas/plenoCowboy.png'      },
  { id: 24, name: '2K',      logo: '/marcas/2k.png'      },
  { id: 25, name: 'Paul Western',      logo: '/marcas/paulWestern.png'      },
  { id: 26, name: 'Pyramid',      logo: '/marcas/pyramid.png'      },
  { id: 27, name: 'Grace',      logo: '/marcas/grace.png'      },
  { id: 28, name: 'Zens Western',      logo: '/marcas/zensWestern.webp'      },
  { id: 29, name: 'Miss Country',      logo: '/marcas/missCountry.png'      },
  { id: 30, name: 'Pura Raça',      logo: '/marcas/puraRaca.png'      },
  { id: 31, name: 'Austin',      logo: '/marcas/austin.png'      },
  { id: 32, name: 'Classic',      logo: '/marcas/classic.png'      },
  { id: 33, name: 'Cowboy 120X',      logo: '/marcas/cowboy120X.png'      },
  { id: 34, name: 'Vimar',      logo: '/marcas/vimar.jpg'      },
  { id: 35, name: 'Idere',      logo: '/marcas/idere.png'      },
];

export default function Brands() {
  return (
    <section className="brands-section">
      <div className="brands-container">

        {/* Cabeçalho */}
        <div className="brands-header">
          <div className="brands-eyebrow">
            <span className="brands-eyebrow-line" />
            <span className="brands-eyebrow-text">Marcas Parceiras</span>
            <span className="brands-eyebrow-line" />
          </div>
          <h2 className="brands-title">Nossas Marcas</h2>
          <p className="brands-subtitle">
            As principais marcas nacionais e importadas, reunidas em um só lugar.
          </p>
        </div>

      </div>

      {/* Carrossel — fora do container para sangrar até as bordas */}
      <div className="brands-track-wrapper">
        {/*
          Duplicamos o array para criar o loop visual contínuo.
          O CSS anima translateX(-50%), voltando ao início sem salto.
        */}
        <div className="brands-track" aria-hidden="false">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-card">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={130}
                height={60}
                className="brand-logo"
                quality={85}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
