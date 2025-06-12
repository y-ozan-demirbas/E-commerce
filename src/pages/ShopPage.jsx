import React from 'react'
import Layout from '../components/layout'
import { ChevronRight } from 'lucide-react'
import ShopCardHolder from '../components/ShopCardHolder';

const cardData = [
  {
    title: "CLOTHS",
    items: "5 Items",
    image: "https://placehold.co/300x400?text=Product+1",
  },
  {
    title: "CLOTHS",
    items: "5 Items",
    image: "https://placehold.co/300x400?text=Product+2",
  },
  {
    title: "CLOTHS",
    items: "5 Items",
    image: "https://placehold.co/300x400?text=Product+3",
  },
  {
    title: "CLOTHS",
    items: "5 Items",
    image: "https://placehold.co/300x400?text=Product+4",
  },
  {
    title: "CLOTHS",
    items: "5 Items",
    image: "https://placehold.co/300x400?text=Product+5",
  },
];

export default function ShopPage() {
  return (
    <Layout>
      <div className="bg-gray-100 ">
        <header className="w-full shadow-md">
          {/*  MASAÜSTÜ  */}
          <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white text-gray-900">
            {/* Sol taraf: Brand (Logo) */}
            <div className="text-xl font-bold">Shop</div>
            {/* Sağ taraf: İkonlar */}
            <div className="flex items-center gap-4 text-sm font-semibold">
              <a className="flex items-center gap-1">
                <span>Home</span>
              </a>
              <a><ChevronRight className="w-4 h-4" /></a>
              <a className="flex items-center gap-1 text-gray-500">
                <span>Shop</span>
              </a>
            </div>
          </nav>
        </header>
        <section className="w-full px-4 py-10 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative rounded-sm overflow-hidden group cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.items}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ShopCardHolder />
    </Layout>
  )
}