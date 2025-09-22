import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseAvia from "@/components/sections/WhyChooseAvia";
import Programs from "@/components/sections/Programs";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseAvia />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
