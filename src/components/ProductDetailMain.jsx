import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImageSlider from "./ProductImageSlider";

export default function ProductDetailMain({ product }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-30">
      {/* Ürün Görseli */}
        <div className="flex justify-center items-start">
            <ProductImageSlider
              images={[
                product.image,
               `https://placehold.co/600x400?text=${product.title}+1`
              ]}
                />
        </div>

      {/* Ürün Bilgisi */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500 text-sm">English Department</p>

        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through">${product.oldPrice}</span>
          <span className="text-green-600 font-semibold text-xl">${product.newPrice}</span>
        </div>

        

        <ProductInfo product={product} />
      </div>
    </div>
  );
}
