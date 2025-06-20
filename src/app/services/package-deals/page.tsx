import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function PackagesPage() {
  const combos = [
    {
      id: "1",
      name: "🎉 Birthday Combo",
      price: "Starts from ₦150,000",
      includes: [
        "Custom 2-tier cake",
        "Event decor & balloon setup",
        "Full Nigerian food catering",
        "Party packs for 20 kids",
        "1-hour photography",
        "Balloons & signage",
      ],
    },
    {
      id: "2",

      name: "💍 Wedding Combo",
      price: "Starts from ₦500,000",
      includes: [
        "Wedding cake (3-tier)",
        "Venue decoration (traditional + white)",
        "Catering for 100 guests",
        "Bridal shower setup",
        "Stage, canopies, chairs",
        "MC + DJ (optional)",
      ],
    },
    {
      id: "3",

      name: "⚰ Burial Combo",
      price: "Starts from ₦300,000",
      includes: [
        "Full catering (swallow & rice dishes)",
        "Coolers, chairs & canopies",
        "Burial signage & floral arrangements",
        "MC or announcer (optional)",
        "Drinks & service staff",
      ],
    },
    {
      id: "4",

      name: "👶 Naming Ceremony Combo",
      price: "Starts from ₦100,000",
      includes: [
        "Mini cake + cupcakes",
        "Light decor & balloon arch",
        "Finger foods & drinks",
        "Traditional naming props",
        "Gift packs for guests",
      ],
    },
    {
      id: "5",
      name: "🎊 Housewarming Combo",
      price: "Starts from ₦120,000",
      includes: [
        "Rice & swallow buffet",
        "Basic home-themed decor",
        "Cake & cupcakes",
        "Rental of chairs, fans",
        "Waiters + serving trays",
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className="bg-[#FFF8F3] py-12 px-6 sm:px-10 lg:px-20 min-h-screen">
        <Link
          href="/services"
          className="inline-block mb-8 text-[#C49A6C] hover:underline"
        >
          ← Back to Services
        </Link>
        <div className="max-w-3xl  text-left mb-16">
          <h1 className="text-4xl font-bold text-[#3E2F21] mb-4">
            Our Combo Packages
          </h1>
          <p className="text-[#5C3B1E] text-lg mb-6">
            From birthdays to weddings and burials, we have created affordable,
            beautiful bundles so you can relax and enjoy your event.
          </p>
          <a
            href="/contact#custom"
            className="inline-block bg-[#C49A6C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b68654] transition"
          >
            Request a Custom Package →
          </a>
        </div>

        {/* Combo Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {combos.map((combo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-[#3E2F21] mb-2">
                  {combo.name}
                </h2>
                <p className="text-[#7E3F41] font-semibold mb-4">
                  {combo.price}
                </p>
                <ul className="text-sm text-[#5C3B1E] list-disc list-inside space-y-1">
                  {combo.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                {/* <a
                href="/booking"
                className="block text-center bg-[#C49A6C] text-white py-2 rounded-full font-semibold hover:bg-[#b68654] transition"
              >
                Book This Package
              </a> */}
                <Link
                  href={`/services/booking-combo?packageId=${combo.id}`}
                  className="block text-center bg-[#C49A6C] text-white py-2 rounded-full font-semibold hover:bg-[#b68654] transition cursor-pointer"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
