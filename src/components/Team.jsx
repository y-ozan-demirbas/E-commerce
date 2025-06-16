import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Gökhan Özdemir",
    profession: "Project Manager",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGZ6AQgHfqMCg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718896706308?e=2147483647&v=beta&t=2WOA6ZifmWBEITKxx20Y8RkOpxhWu7rvx2sQSVyByxI",
    bg: "bg-yellow-400",
    linkedin: "https://www.linkedin.com/in/ozdemir-gokhan/?originalSubdomain=tr",
  },
  {
    name: "Yusuf Ozan Demirbaş",
    profession: "Full Stack Developer",
    image: "",
    bg: "bg-gray-100",
    linkedin: "https://www.linkedin.com/in/ozan-demirbaş-152054260/",
  },
  {
    name: "Edward Norton",
    profession: "Profession",
    image: "",
    bg: "bg-blue-700",
    linkedin: "",
  }
];

export default function Team() {
  return (
    <section className="min-h-screen bg-linear-to-r from-cyan-400 to-green-300 flex flex-col items-center py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#252B42] text-center mb-3 mt-8">
        Meet Our Team
      </h2>
      <p className="text-gray-400 text-lg text-center max-w-2xl mb-12">
        Problems trying to resolve the conflict between<br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-sm overflow-hidden flex flex-col shadow-lg">
            <div className={`w-full h-80 flex items-center justify-center ${member.bg}`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-b-sm"
              />
            </div>
            <div className="flex flex-col items-center py-8">
              <h3 className="text-xl font-bold text-[#252B42] mb-1">{member.name}</h3>
              <p className="text-gray-500 font-semibold mb-4">{member.profession}</p>
              <div className="flex gap-6">
                <a href={member.linkedin} className="text-[#252B42] hover:text-blue-500 text-2xl transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-[#252B42] hover:text-pink-500 text-2xl transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-[#252B42] hover:text-sky-500 text-2xl transition">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}