export default function Services() {
  const servicesLeft = [
    {
      title: "Wedding & Events Planning",
      desc: "Full logistics for traditional and formal ceremonies.",
      color: "bg-[#F9F6F1]",
      icon: "💍",
    },
    {
      title: "Full-Service Catering",
      desc: "Nigerian meals for every event: jollof, soups, grills, and small chops.",
      color: "bg-[#E5F4E3]",
      icon: "🍛",
    },
    {
      title: "Event Decor & Styling",
      desc: "From balloons to elegant floral setups — we create the mood.",
      color: "bg-[#FFF3CE]",
      icon: "🎈",
    },
  ];
  const servicesRight = [
    {
      title: "Custom Cakes & Pastries",
      desc: "Beautiful, personalized cakes for birthdays, weddings, and events.",
      color: "bg-[#FFEFE3]",
      icon: "🎂",
    },
    {
      title: "Party Rentals",
      desc: "Tents, chairs, coolers, sound, MCs, DJs — all arranged for you.",
      color: "bg-[#F1F1F1]",
      icon: "🪑",
    },
    {
      title: "Kids & Family Events",
      desc: "Birthdays, naming ceremonies, and playful setups for children.",
      color: "bg-[#FDE6ED]",
      icon: "🎁",
    },
  ];
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
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#3E2F21]">
                {service.title}
              </h3>
              <p className="text-sm text-[#5C3B1E] mb-3">{service.desc}</p>
              <a
                href="/services"
                className="text-sm font-semibold text-[#7E3F41] hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-6 p-4 sm:p-6">
          {servicesRight.map((service, index) => (
            <div
              key={index}
              className={`${service.color} w-full rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition h-auto min-h-[220px] md:h-[350px]`}
              //           className={` ${service.color} w-full  ${
              //             service.title === "Kids & Family Events"
              //               ? "rounded-[48px]"
              //               : "rounded-2xl"
              //           }
              //   p-4 sm:p-6 shadow-sm hover:shadow-md transition h-auto min-h-[220px] md:h-[350px]`}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#3E2F21]">
                {service.title}
              </h3>
              <p className="text-sm text-[#5C3B1E] mb-3">{service.desc}</p>
              <a
                href="/services"
                className="text-sm font-semibold text-[#7E3F41] hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
