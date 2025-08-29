import { Button } from "@/components/ui/button";
import { Award, Users, Globe, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every product meets our highest standards of craftsmanship and durability"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction drives everything we do, from design to delivery"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with innovative footwear solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-accent/15 rounded-full blur-xl animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">About Murlie Enterprises</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">Crafting the </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Future of Footwear
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Murlie Enterprises has been at the forefront of footwear innovation. 
                We blend cutting-edge technology with timeless craftsmanship to create shoes that don't 
                just meet expectations—they exceed them.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our premium sneaker collections to luxury formal wear, every pair tells a story 
                of dedication, quality, and style. We believe that great shoes are more than just 
                accessories—they're the foundation of confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
              <div className="text-center glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-accent">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="glass-button group px-8 py-6 text-lg font-semibold glow-primary"
            >
              Our Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <div className="glass-panel rounded-3xl p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Our Core Values
              </h3>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:glow-accent transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-foreground">Our Mission</h4>
                <p className="text-sm text-muted-foreground italic">
                  "To empower every step of your journey with footwear that combines 
                  innovation, comfort, and style—because you deserve nothing less than exceptional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;