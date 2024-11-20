"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface Props {
  product: ProductCardProps;
}

export const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  console.log(product);
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const handleClick = () => {
    // Encode the product data as URL-safe string
    const encodedProduct = encodeURIComponent(JSON.stringify(product));
    router.push(`/product/${product.slug}?data=${encodedProduct}`);
  };
  return (
    <div onClick={handleClick} className="relative bg-white cursor-pointer">
      <img
        src={"/showcase/card1.webp"}
        alt={product.title}
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="bg-white p-3 rounded-b-xl">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm text-gray-500 line-through">
            ₹{product.mrp.toFixed(2)}
          </p>
          <p className="text-sm text-red-600 font-semibold">{discount}% OFF</p>
        </div>
        <p className="text-lg font-bold text-gray-800 mt-1">
          ₹{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
