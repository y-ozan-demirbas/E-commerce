import React from "react";
const productList = [
  {
    id: 1,
    image: "https://placehold.co/300x300?text=Image+1",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "https://placehold.co/300x300?text=Image+2",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "https://placehold.co/300x300?text=Image+3",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "https://placehold.co/300x300?text=Image+4",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: "https://placehold.co/300x300?text=Image+5",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: "https://placehold.co/300x300?text=Image+6",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: "https://placehold.co/300x300?text=Image+7",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: "https://placehold.co/300x300?text=Image+8",
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

export default function ProductBestSeller() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">
        Bestseller Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <div className="mt-2">
                <span className="text-sm line-through text-gray-400 mr-2">
                  {product.oldPrice}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  {product.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
