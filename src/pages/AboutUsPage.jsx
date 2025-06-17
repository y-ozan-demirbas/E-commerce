import AboutUs from "../components/AboutUs";
import Layout from "../components/layout";
import Team from "../components/Team";
import VideoBox from "../components/VideoBox";
import WorkWithUs from "../components/WorkWithUs";
import ShopLogos from "../layout/ShopLogos";

export default function AboutUsPage() {
  return (
    <Layout>
      <AboutUs />
      {/* Problem ve açıklama bölümü */}
      <section className=" py-12 bg-white flex justify-between md:ml-30 md:mr-20">
        <div className="max-w-7xl flex flex-col gap-4 justify-between md:ml-30">
          <div className="text-red-500 font-semibold mb-0 text-sm md:text-base">
            Problems trying
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-40 items-start">
            <div className="flex-1 flex flex-col items-start">
              <div className="text-2xl md:text-3xl font-extrabold text-[#252B42] mb-2">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </div>
            </div>
            <div className="flex-1 flex items-start">
              <div className="text-gray-500 text-lg">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* İstatistikler bölümü */}
      <section className="w-full py-12 bg-white flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col items-center flex-1">
            <div className="text-5xl font-extrabold text-[#252B42]">15K</div>
            <div className="mt-2 text-lg font-semibold text-gray-600 text-center">Happy Customers</div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-5xl font-extrabold text-[#252B42]">150K</div>
            <div className="mt-2 text-lg font-semibold text-gray-600 text-center">Monthly Visitors</div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-5xl font-extrabold text-[#252B42]">15</div>
            <div className="mt-2 text-lg font-semibold text-gray-600 text-center">Countries Worldwide</div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="text-5xl font-extrabold text-[#252B42]">100+</div>
            <div className="mt-2 text-lg font-semibold text-gray-600 text-center">Top Partners</div>
          </div>
        </div>
      </section>
      <Team />
      <VideoBox />
      <WorkWithUs />    
        <section className=" py-8 bg-white flex justify-center">
        <div className="max-w-7xl flex flex-col gap-4 items-center">
          <div className="text-2xl md:text-3xl font-extrabold text-[#252B42] mb-2">
            Big Companies Are Here
          </div>
              <div className="text-lg md:text-lg font-light text-[#252B42]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </div>
        </div>
      </section>
      
      <ShopLogos />
    </Layout>
  );
}