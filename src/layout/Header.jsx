import {
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <div>
      <nav className="block md:text-center !m-2 md:flex md:flex-wrap  md:mx-auto md:mt-px  md:items-center md:justify-around md:px-6 md:py-4 bg-[#252B42] md:bg-white text-white md:text-gray-900 shadow-md">
        {/* Brand */}
        <div className="hidden md:block md:text-xl md:font-bold !md:mb-2">BrandName</div>

        {/* Menu Links */}
        <ul className=" hidden md:flex !items-center !font-semibold !text-sm !pb-2 !gap-6">
          <li><a href="#">Home</a></li>
          <li className="relative group hidden md:block">
            <a href="#" className="flex items-center gap-1">
              <span className="block text-center items-center">Shop</span>
              <ChevronDown className="w-4 h-4" />
            </a>
            {/* Dropdown içeriği sonra eklenecek */}
          </li>
          <li><a href="#" className="hidden md:block">About</a></li>
          <li><a href="#" className="hidden md:block">Blog</a></li>
          <li><a href="#" className="md:block">Product</a></li>
          <li><a href="#" className="md:block">Pricing</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"className="hidden md:block">Pages</a></li>
        </ul>

        {/* Right Side Icons */}
        <div className="hidden md:flex md:items-center gap-4 text-sm font-semibold">
          <a href="#" className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Login / Register</span>
          </a>
          <a href="#">
            <Search className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            <span>1</span>
          </a>
          <a href="#" className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>1</span>
          </a>
        </div>
        <div className="md:hidden !flex !items-center !justify-around !gap-4 !text-sm !font-semibold !p-4">
        {/* Mobile Menu Brand */}
        <div className="!text-xl !font-bold !mb-2 md:hidden">BrandName</div>

         {/* Mobile Right Side Icons */}
        <div className=" flex md:flex md:items-center md:gap-4 md:text-sm md:font-semibold md:hidden gap-6">
          
          <a href="#">
            <Search className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            
          </a>
          <a href="#" className="flex items-center gap-1">
            <Menu className="w-4 h-4" />
            
          </a>
        </div>
</div>
            {/*Mobile Menu Links */}
        <ul className="block items-center font-semibold text-sm !pb-2 !gap-6 md:hidden">
          <li><a href="#">Home</a></li>
          <li className="relative group hidden md:block">
            <a href="#" className="flex items-center gap-1">
              <span className="block text-center items-center">Shop</span>
              <ChevronDown className="w-4 h-4" />
            </a>
            {/* Dropdown içeriği sonra eklenecek */}
          </li>
          <li><a href="#" className="hidden md:block">About</a></li>
          <li><a href="#" className="hidden md:block">Blog</a></li>
          <li><a href="#" className="md:block">Product</a></li>
          <li><a href="#" className="md:block">Pricing</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"className="hidden md:block">Pages</a></li>
        </ul>

      </nav>
    </div>
  );
}
