import {
  About,
  Contact,
  Footer,
  Governance,
  Hero,
  Navbar,
  Operations,
  Sustainability,
  Testimonials,
} from "../components/site";

export default function Home() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <Hero />
      <About />
      <Operations />
      <Sustainability />
      <Governance />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
