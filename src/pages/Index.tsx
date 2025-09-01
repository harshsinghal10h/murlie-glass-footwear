import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductUpload from "@/components/ProductUpload";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ProductUpload />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
