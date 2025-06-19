import React from "react";
import Link from "next/link";
const Nav = () => {
  const nav = [
    { name: " home", link: "/" },
    { name: "Bakery", link: "/Bakery" },
    { name: "Events", link: "/Events" },
    { name: "Bundles", link: "/Bundles" },
    { name: "Dashboard", link: "/Dashboard" },
  ];
  return (
    <div className="flex justify-center items-center px-5 md:px-20 py-2   bg-white ">
      <div className="flex gap-4">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="cursor-pointer flex items-center gap-1 "
          >
            <button className="transition border-b-2 border-b-transparent hover:border-b-[#f94200] cursor-pointer">
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
