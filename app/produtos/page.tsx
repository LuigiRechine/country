import { Suspense } from 'react';
import ProdutosClient from './ProdutosClient';

export default function ProdutosPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProdutosClient />
    </Suspense>
  );
}