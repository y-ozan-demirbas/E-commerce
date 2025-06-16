const ShopCards = [
  {
  id: 1,
  title: "Product İmages",
  description: "Met minim Mollie non desert Alamo est sit cliquey dolor...",
  newPrice: "1139.33",
  oldPrice: "1639.99",
  image: "https://placehold.co/300x400?text=Productİmages",
  colors: ["#3cc8f0", "#48c774", "#f97316", "#1e293b"]
  },
  // 36 tane kart gelmesi gerekiyor, şimdilik 1 tanesini çoğaltıyorum.
];

const cards = Array.from({ length: 36 }, (_, i) => ({
  ...ShopCards[i % ShopCards.length],
  id: i + 1,
  image: `https://placehold.co/300x400?text=Product+${i + 1}`
}));

export default cards;

// pagination (TanstackQuerry ile yapılacak)!!!