import { Suspense } from 'react';
import Cta from '@/components/cta';
import Feature from '@/components/feature';
import ProductsGrid from './ProductsGrid';
import ErrorBoundary from '@/components/ErrorBoundary';


const ProductsPage = () => {
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 '>
      <Feature />
      <section className='flex flex-col space-y-12'>
        <ErrorBoundary fallback={<div>Error loading products. Please try again later.</div>}>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsGrid />
          </Suspense>
        </ErrorBoundary>
      </section>
      <Cta />
    </main>
  );
};

export default ProductsPage;

