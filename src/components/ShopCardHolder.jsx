import { useState } from "react";
import ShopCards from "./ShopCards";

export default function ShopCardHolder() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  // Kart verilerini al (şimdilik placeholder)
  const allCards = ShopCards;

  // Sayfa hesaplamaları
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="w-full px-4 py-10 flex flex-col items-center">
      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
        {currentCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center text-center">
            <img
              src={card.image}
              alt={`Product ${card.id}`}
              className="w-full h-auto rounded-sm shadow-md"
            />
            <h3 className="text-sm font-bold mt-2">{card.title}</h3>
            <p className="text-xs text-gray-500">{card.subtitle}</p>
            <div className="mt-1 text-sm text-gray-800 line-through">${card.oldPrice}</div>
            <div className="text-sm text-green-600 font-semibold">${card.newPrice}</div>
          </div>
        ))}
      </div>

      {/* Sayfa Geçişi */}
      <div className="flex items-center rounded overflow-hidden border shadow-sm">
  <button
    onClick={() => handlePageChange(1)}
    className={`px-4 py-2 text-sm border-r ${
      currentPage === 1
        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100 text-gray-700"
    }`}
    disabled={currentPage === 1}
  >
    First
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`px-4 py-2 text-sm border-r ${
        currentPage === index + 1
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() => handlePageChange(currentPage + 1)}
    className={`px-4 py-2 text-sm ${
      currentPage === totalPages
        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100 text-blue-600"
    }`}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

    </section>
  );
}
