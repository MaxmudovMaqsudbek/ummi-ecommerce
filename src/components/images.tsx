"use client"
import { ProductType } from '@/interfaces'
import Image from 'next/image';
import React, { FC, useState } from 'react'

interface Props{
        product:ProductType;
        fill?:boolean;
        sizes?:string
}
const CustomImages: FC <Props> = ({product,fill}) => {
    const [isLoading, setIsLoading] = useState(true)
  return (
    <>
        
                {fill? (
                    <Image 
                    src={product.image}
                    alt={product.title}
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
						isLoading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					}}`}
                    onLoad={()=>setIsLoading(false)}

                    />
                ) : (
                    <Image
                    src={product.image}
                    alt={product.title}
                    priority
                    width={400}
                    height={1000}
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
						isLoading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					}}`}
                    onLoad={()=>setIsLoading(false)}
                    />
                )  }  
    </>
  )
}

export default CustomImages;
