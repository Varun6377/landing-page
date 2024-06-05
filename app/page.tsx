import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto p-10">
        <Hero />
        <Features />
        <Testimonial />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
