import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Download,
  Clock,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function ProductCard() {
  return (
    <div className="w-2/5 !rounded-xl !bg-white !shadow-md !p-6 !flex !flex-col !gap-4 border border-gray-100">
      
      {/* Görsel */}
      <div className="relative !w-full !h-56 !rounded-xl overflow-hidden bg-gray-200">
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded !p-1">
          Sale
        </div>
        {/* Butonlar */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex !gap-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow">
          <button className="!p-2 bg-white rounded-full shadow">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="!p-2 bg-white rounded-full shadow">
            <ShoppingCart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="!p-2 bg-white rounded-full shadow">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Metin İçeriği */}
      <div className="flex flex-col gap-1">
        <p className="text-sm !text-sky-600 font-semibold">English Department</p>
        <div className="flex justify-between items-center">
          <h3 className="text-base !font-bold text-gray-800">Graphic Design</h3>
          <span className="flex items-center gap-1 text-sm text-gray-700">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            4.9
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-snug text-left">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
      </div>

      {/* Satış Bilgisi */}
      <div className="flex items-center text-sm text-gray-500 gap-1">
        <Download className="w-4 h-4" />
        <span>15 Sales</span>
      </div>

      {/* Fiyatlar */}
      <div className="text-sm text-left">
        <span className="text-gray-400">$16.48</span>
        <span className="text-green-600 font-bold ml-2"> $6.48</span>
      </div>

      {/* Renk Seçenekleri */}
      <div className="flex gap-2 mt-2">
        <span className="w-3 h-3 rounded-full bg-cyan-500 border border-white shadow-sm"></span>
        <span className="w-3 h-3 rounded-full bg-orange-500 border border-white shadow-sm"></span>
        <span className="w-3 h-3 rounded-full bg-rose-500 border border-white shadow-sm"></span>
        <span className="w-3 h-3 rounded-full bg-black border border-white shadow-sm"></span>
      </div>

      {/* Alt Bilgi */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-cyan-500" />
          <span>22hr 30min</span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span>64 Lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart3 className="w-4 h-4 text-lime-500" />
          <span>Progress</span>
        </div>
      </div>

      {/* Buton */}
      <div className="pt-4">
        <button className="w-full !bg-white !text-sky-600 !border !border-sky-600 !rounded-full !py-2 !font-semibold hover:!bg-sky-600 hover:!text-white transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
