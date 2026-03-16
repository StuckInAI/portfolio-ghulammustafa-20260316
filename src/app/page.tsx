import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
