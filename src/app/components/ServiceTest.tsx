import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Wedding & Events Planning",
      desc: "Traditional & modern event logistics with cultural care.",
      icon: "💍",
    },
    {
      title: "Full-Service Catering",
      desc: "Delicious Nigerian meals for all types of events.",
      icon: "🍛",
    },
    {
      title: "Event Decor & Styling",
      desc: "Beautiful, themed decor for any celebration.",
      icon: "🎈",
    },
    {
      title: "Custom Cakes & Pastries",
      desc: "Handcrafted cakes and pastries for every occasion.",
      icon: "🎂",
    },
    {
      title: "Party Rentals",
      desc: "Canopies, chairs, coolers, speakers & more.",
      icon: "🪑",
    },
    {
      title: "Kids & Family Events",
      desc: "Fun, safe setups for birthdays and family parties.",
      icon: "🎁",
    },
  ];

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
      {/* Top 4 CTA Buttons */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <a
          href="https://calendly.com/your-link"
          target="_blank"
          className="bg-[#C49A6C] text-white py-4 px-6 rounded-xl text-center font-semibold shadow hover:bg-[#b98d56]"
        >
          📅 Book an Event
        </a>
        <a
          href="/cakes"
          className="bg-white border-2 border-[#C49A6C] text-[#C49A6C] py-4 px-6 rounded-xl text-center font-semibold hover:bg-[#fff3e5]"
        >
          🎂 Order Cakes & Pastries
        </a>
        <a
          href="/food"
          className="bg-white border-2 border-[#C49A6C] text-[#C49A6C] py-4 px-6 rounded-xl text-center font-semibold hover:bg-[#fff3e5]"
        >
          🍛 Order Food packs/trays
        </a>
        <a
          href="/contact#rentals"
          className="bg-white border-2 border-[#C49A6C] text-[#C49A6C] py-4 px-6 rounded-xl text-center font-semibold hover:bg-[#fff3e5]"
        >
          🪑 Rentals & Equipment
        </a>
      </div>

      {/* Combo Deals Banner */}
      <div className="bg-[#FFEFE3] p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-[#3E2F21] mb-2">
            🎁 View Our Package Combos
          </h2>
          <p className="text-[#5C3B1E]">
            Birthday packages, wedding deals, and celebration bundles made
            simple.
          </p>
        </div>
        <Link
          href="/services/package-deals"
          className="bg-[#C49A6C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b98d56] transition"
        >
          See All Combos →
        </Link>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#3E2F21] mb-6">Our Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h4 className="text-lg font-semibold text-[#3E2F21] mb-1">
                {s.title}
              </h4>
              <p className="text-sm text-[#5C3B1E]">{s.desc}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-semibold text-[#7E3F41] hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Cooking Gig & Pricing */}
      <div className="bg-[#FFF3E5] p-8 rounded-2xl text-center shadow-sm">
        <h4 className="text-xl font-bold text-[#3E2F21] mb-2">
          👩🏾‍🍳 Hire Us for Cooking Gigs
        </h4>
        <p className="text-[#5C3B1E] mb-4">
          Need a cook for your event or private occasion? We offer professional
          cooking gigs by the day, event, or number of guests.
        </p>
        <a
          href="/contact#cooking"
          className="bg-[#C49A6C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b98d56]"
        >
          Request Pricing →
        </a>
      </div>
    </div>
  );
}
