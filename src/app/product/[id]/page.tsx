'use client';

import React, { useEffect, useState, use } from 'react';
import CustomImages from '@/components/images';
import { ProductType } from '@/interfaces';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';
import { toast } from 'react-toastify';

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch product data using useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        notFound(); // Handle not found case
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);

  // Handle adding to cart
  const handleClick = () => {
    if (product) {
      try {
        const products: ProductType[] = JSON.parse(localStorage.getItem('carts') || '[]');
        const isExistProduct = products.find((c) => c.id === product.id);

        if (isExistProduct) {
          const updatedData = products.map((c) => 
            c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
          );
          localStorage.setItem('carts', JSON.stringify(updatedData));
        } else {
          products.push({ ...product, quantity: 1 });
          localStorage.setItem('carts', JSON.stringify(products));
        }
        toast('Product added to your bag!');
      } catch (error) {
        console.error('Error updating cart:', error);
        toast('Failed to add product to bag. Please try again.');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can show a loading spinner or placeholder
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-4 pt-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <CustomImages product={product} 
          
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <div className="flex items-center text-sm my-4">
              <p>{product.rating?.rate}</p>
              {product.rating?.rate && (
                <div className="flex items-center ml-2 mr-6">
                  {Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                  {Array.from(
                    { length: 5 - Math.floor(product.rating.rate) },
                    (_, i) => (
                      <StarIconOutline key={i} className="h-4 w-4 text-yellow-500" />
                    )
                  )}
                </div>
              )}
              <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                See all {product.rating?.count} reviews
              </p>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              <button onClick={handleClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to bag
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

