import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-12 mx-auto mt-px flex items-center justify-around px-6 m-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-600">
        
        {/* Get In Touch */}
        <div>
          <h4 className="!text-2xl !font-bold text-gray-900 !mb-5">Get In Touch</h4>
          <p className="!mb-4">the quick fox jumps over the lazy dog</p>
          <div className="flex items-center space-x-4 text-sky-500 gap-5">
            <a href="#"><FaFacebook className="w-5 h-5" /></a>
            <a href="#"><FaInstagram className="w-5 h-5" /></a>
            <a href="#"><FaTwitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="!text-2xl !font-bold text-gray-900 !mb-5">Company info</h4>
          <ul className="!space-y-2 font-semibold text-gray-700 gap-5">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="!text-2xl !font-bold text-gray-900 !mb-5">Features</h4>
          <ul className="!space-y-2 font-semibold text-gray-700 gap-5">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="!text-2xl !font-bold text-gray-900 !mb-5">Resources</h4>
          <ul className="!space-y-2 font-semibold text-gray-700 gap-5">
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
