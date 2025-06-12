const ShopCards = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  // 36 tane kart gelmesi gerekiyor, şimdilik 1 tanesini çoğaltıyorum.
];

const cards = Array.from({ length: 36 }, (_, i) => ({
  ...ShopCards[i % ShopCards.length],
  id: i + 1,
  image: `https://placehold.co/300x400?text=Product+${i + 1}`
}));

export default cards;
