import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Layout from "../components/layout";

export default function ContactPage() {
  return (
    <Layout>
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-cyan-400 to-green-300">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#252B42] text-center mb-6 mt-10">
        Get answers to all your<br />questions.
      </h1>
      <p className="text-gray-400 text-lg text-center max-w-xl mb-8">
        Problems trying to resolve the conflict between the two<br />
        major realms of Classical physics;
      </p>
      <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded mb-10 transition">
        CONTACT OUR COMPANY
      </button>
      <div className="flex gap-8 mt-2">
        <a href="#" className="text-gray-300 hover:text-sky-500 text-2xl transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-sky-500 text-2xl transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-300 hover:text-sky-500 text-2xl transition">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-300 hover:text-sky-500 text-2xl transition">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
    </Layout>
  );
}