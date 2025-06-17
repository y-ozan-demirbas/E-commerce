import {
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full shadow-md">
      {/*  MASAÜSTÜ  */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white text-gray-900">
        {/* Sol taraf: Brand (Logo) */}
        <div className="text-xl font-bold">BrandName</div>

        {/* Orta: Menü linkleri */}
        <ul className="flex items-center gap-6 font-semibold text-sm">
          <li><Link to="/#">Home</Link></li>
          <li className="relative group">
            <Link to="/shop" className="flex items-center gap-1">
              <span>Shop</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg p-4 rounded-sm opacity-0 border border-blue-300 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold mb-2">Kadın</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Erkek</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#">Pages</a></li>
        </ul>

        {/* Sağ taraf: İkonlar */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a href="#" className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Login / Register</span>
          </a>
          <a href="#"><Search className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" /><span>1</span>
          </a>
          <a href="#" className="flex items-center gap-1">
            <Heart className="w-4 h-4" /><span>1</span>
          </a>
        </div>
      </nav>

      {/*  MOBİL  */}
      <nav className="block md:hidden bg-[#252B42] text-white px-4 py-3">
        {/* Üst sıra: Brand + İkonlar */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">BrandName</div>
          <div className="flex items-center gap-4">
            <User className="w-4 h-4" />
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Menu className="w-5 h-5" />
          </div>
        </div>

        {/* Alt sıra: Menü Linkleri */}
        <ul className="flex flex-col items-center gap-2 space-y-2 font-semibold text-sm m-7">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
