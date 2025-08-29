import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Premium Sneakers",
      description: "Street-style meets luxury comfort",
      image: "🦶", // Placeholder - you can replace with actual images
      count: "120+ Styles",
      gradient: "from-primary to-primary-light"
    },
    {
      id: 2,
      name: "Formal Collection",
      description: "Elegant designs for every occasion",
      image: "👔", // Placeholder - you can replace with actual images
      count: "85+ Styles",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      id: 3,
      name: "Sport Performance",
      description: "Built for athletes and achievers",
      image: "⚡", // Placeholder - you can replace with actual images
      count: "95+ Styles",
      gradient: "from-accent-soft to-accent"
    },
    {
      id: 4,
      name: "Luxury Sandals",
      description: "Comfort redefined with style",
      image: "🌊", // Placeholder - you can replace with actual images
      count: "65+ Styles",
      gradient: "from-primary-glow to-secondary"
    },
    {
      id: 5,
      name: "Limited Edition",
      description: "Exclusive drops and collaborations",
      image: "✨", // Placeholder - you can replace with actual images
      count: "12+ Styles",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="categories" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Collections
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover curated footwear collections designed for every lifestyle, 
            from everyday comfort to luxury statements.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                  {category.image}
                </div>
                <div className="text-sm text-accent font-medium">
                  {category.count}
                </div>
              </div>

              {/* Category Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Category Action */}
              <div className="mt-6 flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="glass-button group/btn text-accent hover:text-accent-foreground"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="glass-button px-8 py-6 text-lg font-semibold glow-secondary group"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;