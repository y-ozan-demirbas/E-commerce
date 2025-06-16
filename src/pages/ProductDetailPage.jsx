import { useParams } from "react-router-dom";
import ShopCards from "../components/ShopCards";
import Layout from "../components/layout";
import ShopLogos from "../layout/ShopLogos";
import ProductDetailMain from "../components/ProductDetailMain";
import ShopHeader from "../layout/ShopHeader";
import ProductTabs from "../components/ProductTabs";
import ProductBestSeller from "../components/ProductBestSeller";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = ShopCards.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Ürün bulunamadı.</p>;
  }

  return (
    <Layout>
      <ShopHeader />
      <ProductDetailMain product={product} />
      <ProductTabs />
      <ProductBestSeller />
      <ShopLogos />
    </Layout>
  );
}
