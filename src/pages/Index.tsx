import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutAvia from "@/components/sections/AboutAvia";
import Programs from "@/components/sections/Programs";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <AboutAvia />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
