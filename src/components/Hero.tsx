import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-sneakers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary-glow/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Premium Footwear Collection</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-sky-400">
                Step Into
              </span>
              <br />
              <span className="text-foreground">The Future</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover our premium collection of footwear designed for the modern lifestyle. 
              Where innovation meets style, crafted to perfection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="glass-button group px-8 py-6 text-lg font-semibold glow-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card px-8 py-6 text-lg font-medium border-glass-border/30 hover:border-accent/50"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="flex space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Premium Styles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Hero Product */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Glowing Background Circle */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-150 animate-glow-pulse" />
            
            {/* Product Image Container */}
            <div className="relative glass-panel rounded-3xl p-8 float-product animate-slide-up">
              <img
                src={heroImage}
                alt="Premium Sneakers"
                className="w-full h-auto max-w-md mx-auto object-contain"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 glass-card rounded-xl p-3 animate-float">
                <div className="text-xs font-semibold text-accent">New</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xs font-semibold text-secondary">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;