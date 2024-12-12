import { ProductType } from '@/interfaces';
import Product from '@/components/product';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

const ProductsGrid = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;

