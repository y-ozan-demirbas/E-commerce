import React from "react";

export default function ProductInfo({ product }) {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h2 className="text-2xl font-semibold">{product.title}</h2>

      <div className="flex items-center gap-2">
        <div className="text-yellow-400">★★★★★</div>
        <span className="text-sm text-gray-600">10 Reviews</span>
      </div>

      <div className="text-2xl font-bold text-gray-800">${product.newPrice}</div>

      <div className="text-sm">
        Availability :{" "}
        <span className="text-green-600 font-medium">In Stock</span>
      </div>

      <p className="text-sm text-gray-600">{product.description}</p>

      {/* Renk Seçenekleri */}
      <div className="flex gap-2">
        {product.colors?.map((color, i) => (
          <span
            key={i}
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      {/* Butonlar */}
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Select Options
        </button>
        <button className="border rounded-full p-2 hover:bg-gray-100">♡</button>
        <button className="border rounded-full p-2 hover:bg-gray-100">🛒</button>
        <button className="border rounded-full p-2 hover:bg-gray-100">👁</button>
      </div>
    </div>
  );
}
