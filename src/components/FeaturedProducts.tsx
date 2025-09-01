import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pinkKnitSneakers from "@/assets/pink-knit-sneakers.jpg";
import pinkSlipSneakers from "@/assets/pink-slip-sneakers.jpg";
import decorativeSandals from "@/assets/decorative-sandals.jpg";
import blackSlippers from "@/assets/black-glitter-slippers.jpg";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "AeroFlex Knit Pro",
      category: "Athletic Sneakers",
      price: 285,
      originalPrice: 320,
      image: pinkKnitSneakers,
      rating: 4.9,
      reviews: 156,
      badge: "Bestseller",
      gradient: "from-primary to-accent"
    },
    {
      id: 2,
      name: "ComfortSlip Elite",
      category: "Casual Sneakers",
      price: 275,
      originalPrice: null,
      image: pinkSlipSneakers,
      rating: 4.8,
      reviews: 89,
      badge: "New",
      gradient: "from-secondary to-primary-light"
    },
    {
      id: 3,
      name: "Heritage Craft Sandals",
      category: "Traditional Footwear",
      price: 265,
      originalPrice: 300,
      image: decorativeSandals,
      rating: 4.7,
      reviews: 203,
      badge: "Artisan",
      gradient: "from-accent to-secondary-glow"
    },
    {
      id: 4,
      name: "Sparkle Comfort Slippers",
      category: "Casual Footwear", 
      price: 250,
      originalPrice: null,
      image: blackSlippers,
      rating: 4.6,
      reviews: 124,
      badge: "Popular",
      gradient: "from-primary-glow to-accent-soft"
    }
  ];

  return (
    <section id="products" className="py-20 relative bg-background/50 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our premium collection, loved by customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Container */}
              <div className="relative p-8 bg-gradient-to-br from-muted/20 to-transparent">
                {/* Product Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${product.gradient} text-white`}>
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 glass-card rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:glow-accent">
                  <Heart className="h-4 w-4 text-accent" />
                </button>

                {/* Product Image */}
                <div className="relative float-product group-hover:scale-110 transition-transform duration-500">
                  <div className="flex items-center justify-center h-40">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Floating Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 blur-xl scale-150 animate-glow-pulse`} />
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-x-4 bottom-4 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="glass-button"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="glass-button bg-gradient-primary">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-accent font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 
                    className="font-bold text-lg text-foreground group-hover:text-accent transition-colors cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-accent' : 'text-muted-foreground/30'}`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-xl font-bold text-accent">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full glass-button group/cart"
                  size="sm"
                >
                  Add to Cart
                  <ShoppingCart className="ml-2 h-4 w-4 group-hover/cart:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="glass-card px-8 py-6 text-lg font-semibold border-glass-border/30 hover:border-accent/50 group"
          >
            View All Products
            <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;