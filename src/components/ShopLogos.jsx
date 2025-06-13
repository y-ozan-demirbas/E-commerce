import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLyft,
  faPagelines,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

export default function ShopLogos() {
  return (
    <section className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-35">
        <div title="Lyft">
          <FontAwesomeIcon
            icon={faLyft}
            className="text-gray-500 text-9xl"
          />
        </div>
        <div title="Leaf">
          <FontAwesomeIcon
            icon={faPagelines}
            className="text-gray-500 text-9xl"
          />
        </div>
        <div title="Stripe">
          <FontAwesomeIcon
            icon={faStripe}
            className="text-gray-500 text-9xl"
          />
        </div>
        <div title="AWS">
          <FontAwesomeIcon
            icon={faAws}
            className="text-gray-500 text-9xl"
          />
        </div>
        <div title="Reddit">
          <FontAwesomeIcon
            icon={faRedditAlien}
            className="text-gray-500 text-9xl"
          />
        </div>
      </div>
    </section>
  );
}
