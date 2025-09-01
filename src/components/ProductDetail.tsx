import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, ShoppingCart, Share } from "lucide-react";
import { toast } from "sonner";

interface ColorVariant {
  id: string;
  name: string;
  color: string;
  image: string;
}

interface ProductDetailProps {
  onBack?: () => void;
}

const ProductDetail = ({ onBack }: ProductDetailProps) => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: 299,
    originalPrice: 349,
    description: "The Nike Air Max series continues to evolve, blending technology, fashion and comfort in perfect harmony. Experience the ultimate in style and performance.",
    rating: 4.8,
    reviews: 124
  };

  const colorVariants: ColorVariant[] = [
    { 
      id: "blue", 
      name: "Ocean Blue", 
      color: "bg-blue-400",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    },
    { 
      id: "green", 
      name: "Forest Green", 
      color: "bg-green-600",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    },
    { 
      id: "red", 
      name: "Crimson Red", 
      color: "bg-red-500",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    }
  ];

  const sizes = ["IND 6", "IND 6.5", "IND 7", "IND 7.5", "IND 8"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success(`Added ${product.name} (${selectedSize}) to cart!`);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <div className="sticky top-0 z-50 nav-glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="glass-card p-3 rounded-full hover:glow-primary transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="glass-card p-3 rounded-full hover:glow-primary transition-all"
            >
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Product Image Section */}
        <Card className="glass-card rounded-3xl overflow-hidden mb-6 animate-scale-in">
          <div className="relative bg-gradient-to-br from-muted/10 to-accent/10 p-8">
            <div className="flex items-center justify-center h-80">
              <img 
                src={colorVariants.find(c => c.id === selectedColor)?.image}
                alt={product.name}
                className="w-full h-full object-contain float-product group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl scale-150 animate-glow-pulse" />
            
            {/* Price Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-primary text-white rounded-2xl font-bold">
              ₹{product.price}
            </div>
          </div>
        </Card>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title & Price */}
          <div className="animate-fade-in">
            <div className="text-sm text-accent font-medium mb-1">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-accent">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 animate-fade-in">
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
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <Card className="glass-card p-6 animate-fade-in">
            <h3 className="font-semibold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
              <span className="text-accent cursor-pointer hover:underline ml-1">
                ...Read more
              </span>
            </p>
          </Card>

          {/* Color Selection */}
          <Card className="glass-card p-6 animate-fade-in">
            <h3 className="font-semibold text-foreground mb-4">Select colors</h3>
            <div className="flex space-x-3">
              {colorVariants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedColor(variant.id)}
                  className={`relative p-1 rounded-2xl transition-all ${
                    selectedColor === variant.id 
                      ? 'ring-2 ring-accent glow-accent' 
                      : 'hover:ring-1 hover:ring-muted-foreground/30'
                  }`}
                >
                  <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={variant.image}
                      alt={variant.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Size Selection */}
          <Card className="glass-card p-6 animate-fade-in">
            <h3 className="font-semibold text-foreground mb-4">Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 rounded-xl font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-gradient-primary text-white glow-primary'
                      : 'glass-card text-foreground hover:glow-accent'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4 animate-fade-in">
            <Button
              onClick={toggleWishlist}
              variant="outline"
              size="lg"
              className={`glass-card p-4 rounded-2xl transition-all ${
                isWishlisted 
                  ? 'bg-gradient-primary text-white glow-primary' 
                  : 'hover:glow-accent'
              }`}
            >
              <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="flex-1 glass-button bg-gradient-primary text-white p-6 rounded-2xl text-lg font-semibold group/cart"
            >
              Add to cart
              <ShoppingCart className="ml-3 h-6 w-6 group-hover/cart:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;