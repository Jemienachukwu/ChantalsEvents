"use client";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const servicesLeft = [
    {
      title: "Wedding & Events Planning",
      desc: "We handle everything you need to plan and execute unforgettable events.",
      color: "bg-[#F9F6F1]",
      icon: "💍",
      offers: [
        "Traditional & white wedding planning",
        "Burial and remembrance coordination",
        "Birthday & anniversary party planning",
        "Venue sourcing and booking",
        "Vendor coordination (photography, makeup, MCs, DJs, etc.)",
        "Budgeting and logistics management",
        "Guest list and RSVP tracking",
        "On-the-day coordination & supervision",
      ],
    },
    {
      title: "Full-Service Catering",
      desc: "Delicious, fresh meals served with professionalism and flavor.",
      color: "bg-[#E5F4E3]",
      icon: "🍛",
      offers: [
        "Jollof rice, fried rice, coconut rice",
        "Swallow & soups (Egusi, Ogbono, Afang, Oha, etc.)",
        "Continental dishes & buffet options",
        "Small chops & finger foods",
        "BBQ & grilled platters (chicken, fish, suya)",
        "Custom menu design for your event type",
        "Trained service staff & professional setup",
        "Packaged meals for takeaway / home delivery",
      ],
    },
    {
      title: "Event Decor & Styling",
      desc: "We transform spaces to match the mood and theme of your celebration.",
      color: "bg-[#FFF3CE]",
      icon: "🎈",
      offers: [
        "Balloon garlands and arches",
        "Floral arrangements (fresh & artificial)",
        "Table centerpieces and tablecloths",
        "Backdrop design and banner printing",
        "Traditional decor (Igbo, Yoruba, Hausa, etc.)",
        "Aisle and altar design (for weddings & burials)",
        "LED lighting and ambiance setup",
        "Thematic setups for kids, birthdays, bridal showers",
      ],
    },
  ];

  const servicesRight = [
    {
      title: "Custom Cakes & Pastries",
      desc: "Every cake is baked and decorated to reflect your celebration style.",
      color: "bg-[#FFEFE3]",
      icon: "🎂",
      offers: [
        "Birthday cakes (themed, photo, fondant, buttercream)",
        "Traditional wedding & white wedding cakes",
        "Cupcakes and mini cakes",
        "Pastries: chin-chin, meat pie, doughnuts, sausage rolls",
        "Dessert trays and sweets tables",
        "Multi-tiered and stacked cake options",
        "Personalized cake toppers and prints",
        "Home or venue delivery available",
      ],
    },
    {
      title: "Party Rentals",
      desc: "Get everything you need to furnish and equip your event hassle-free.",
      color: "bg-[#F1F1F1]",
      icon: "🪑",
      offers: [
        "Canopies, gazebos, and tents",
        "Chairs (plastic, gold Chiavari, throne chairs)",
        "Tables of various sizes",
        "Industrial and standing fans",
        "Generators and extension wiring",
        "Sound systems, mics, and speakers",
        "Coolers, food warmers, drink dispensers",
        "Red carpets, stages, and photo walls",
      ],
    },
    {
      title: "Kids & Family Events",
      desc: "Fun, safe, and memorable setups for the little ones and family-centered events.",
      color: "bg-[#FDE6ED]",
      icon: "🎉",
      offers: [
        "Themed decor for kids parties (cartoon characters, superheroes, etc.)",
        "Naming ceremony coordination",
        "Customized birthday cakes for children",
        "Games, bouncy castles, and props",
        "Face painting, clowns, mascots",
        "Kids catering (snacks, cupcakes, juices)",
        "Table setups with fun cutlery and colors",
        "Gifts and party packs for guests",
      ],
    },
  ];

  const [openModal, setOpenModal] = useState<{
    side: "left" | "right";
    index: number;
  } | null>(null);

  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-[35%] flex flex-col justify-center gap-6 p-4 sm:p-6">
          <div className="text-left flex flex-col gap-5 w-full p-4 sm:p-6">
            <p>Our services</p>
            <p className="text-xl font-semibold mb-2 text-[#3E2F21]">
              Discover Fun at JoyFest
            </p>
            <p className="text-sm text-[#5C3B1E] mb-3">
              Experience the perfect blend of fun and creativity with our
              personalized party planning services.
            </p>
          </div>
          {servicesLeft.map((service, index) => (
            <div
              key={index}
              className={`${service.color} w-full rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition h-auto min-h-[220px] md:h-[350px]`}
            >
              <div>
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#3E2F21]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5C3B1E] mb-3">{service.desc}</p>
                <button
                  className="text-sm font-semibold text-[#7E3F41] hover:underline cursor-pointer"
                  onClick={() => setOpenModal({ side: "left", index })}
                >
                  Read More →
                </button>
              </div>
              {openModal?.side === "left" && openModal.index === index && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-xs"
                  onClick={() => setOpenModal(null)}
                >
                  <div
                    className={`${service.color}  rounded-xl p-10 max-w-md w-[90vw] relative transform transition-all duration-300 scale-100`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-4 text-2xl cursor-pointer"
                      onClick={() => setOpenModal(null)}
                    >
                      &times;
                    </button>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-3xl font-bold mb-2 text-[#3E2F21]">
                        {service.title}
                      </h3>
                      <div className="text-3xl mb-4">{service.icon}</div>
                    </div>
                    <p className="text-md font-semibold text-[#5C3B1E] mb-3">
                      {service.desc}
                    </p>
                    <ul className="list-disc pl-5">
                      {service.offers.map((offer, offerIndex) => (
                        <li
                          key={offerIndex}
                          className="text-sm text-[#5C3B1E] mb-3"
                        >
                          {offer}
                        </li>
                      ))}
                    </ul>
                    <Link href="/services">
                      <button className="mt-4 px-4 py-2 bg-[#F94200] text-white rounded-lg hover:bg-[#D32F2F] transition cursor-pointer ">
                        view all services
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-6 p-4 sm:p-6">
          {servicesRight.map((service, index) => (
            <div
              key={index}
              className={`${service.color} w-full rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition h-auto min-h-[220px] md:h-[350px]`}
            >
              <div>
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#3E2F21]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5C3B1E] mb-3">{service.desc}</p>
                <button
                  className="text-sm font-semibold text-[#7E3F41] hover:underline cursor-pointer"
                  onClick={() => setOpenModal({ side: "right", index })}
                >
                  Read More →
                </button>
              </div>
              {openModal?.side === "right" && openModal.index === index && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-xs"
                  onClick={() => setOpenModal(null)}
                >
                  <div
                    className={`${service.color}  rounded-xl p-10 max-w-md w-[90vw] relative transform transition-all duration-300 scale-100`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-4 text-2xl cursor-pointer"
                      onClick={() => setOpenModal(null)}
                    >
                      &times;
                    </button>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-3xl font-bold mb-2 text-[#3E2F21]">
                        {service.title}
                      </h3>
                      <div className="text-3xl mb-4">{service.icon}</div>
                    </div>
                    <p className="text-md font-semibold text-[#5C3B1E] mb-3">
                      {service.desc}
                    </p>
                    <ul className="list-disc pl-5">
                      {service.offers.map((offer, offerIndex) => (
                        <li
                          key={offerIndex}
                          className="text-sm text-[#5C3B1E] mb-3"
                        >
                          {offer}
                        </li>
                      ))}
                    </ul>
                    <Link href="/services">
                      <button className="mt-4 px-4 py-2 bg-[#F94200] text-white rounded-lg hover:bg-[#D32F2F] transition cursor-pointer ">
                        view all services
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
