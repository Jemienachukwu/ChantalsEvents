import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <SubHero />
      <Services />
    </div>
  );
}
