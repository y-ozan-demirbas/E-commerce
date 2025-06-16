import { useState } from "react";

const tabs = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional Information" },
  { id: "reviews", label: "Reviews (0)" },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tab başlıkları */}
      <div className="flex space-x-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 font-medium transition-colors ${
              activeTab === tab.id
                ? "text-gray-900 border-b-2 border-gray-800"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab içerikleri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Sol: Görsel */}
        <div className="md:col-span-1">
          <img
            src="https://placehold.co/400x400?text=Room+Image"
            alt="Product"
            className="rounded-sm shadow"
          />
        </div>

        {/* Orta ve Sağ: İçerik */}
        <div className="md:col-span-2 space-y-6">
          {activeTab === "description" && (
            <>
              <h3 className="text-xl font-semibold text-gray-900">
                the quick fox jumps over
              </h3>
              <p className="text-gray-600">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
              </p>
              <p className="text-gray-600">
                Excitation venial consequent sent nostrum met.
              </p>
            </>
          )}

          {activeTab === "additional" && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900">
                  the quick fox jumps over
                </h4>
                <ul className="text-gray-600 list-disc pl-4 text-sm mt-2">
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  the quick fox jumps over
                </h4>
                <ul className="text-gray-600 list-disc pl-4 text-sm mt-2">
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <p className="text-gray-500 italic">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
