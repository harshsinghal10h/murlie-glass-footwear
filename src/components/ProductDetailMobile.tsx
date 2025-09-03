import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, ShoppingCart, Plus, Minus, Star, ChevronDown, Truck, RotateCcw, Shield, Leaf } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface ColorVariant {
  id: string;
  name: string;
  color: string;
  image: string;
}

interface ProductDetailMobileProps {
  onBack?: () => void;
}

const ProductDetailMobile = ({ onBack }: ProductDetailMobileProps) => {
  const [selectedColor, setSelectedColor] = useState("sea-blue");
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const { addToCart, totalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const product = {
    name: "Nike Air Max Plus",
    subtitle: "Men's Shoes — Running / Casual",
    price: 7499,
    originalPrice: 9999,
    description: "A modern twist on a classic silhouette — premium leather overlays and Air cushioning for everyday comfort. Experience unmatched style and performance with every step.",
    fullDescription: "The Nike Air Max Plus features a unique blend of premium materials and cutting-edge technology. The leather overlays provide durability while the breathable mesh ensures comfort during long runs or casual wear.",
    rating: 4.7,
    reviews: 89,
    sku: "NIK-AMP-SEA-001",
    weight: "390 g (size IND8)",
    madeIn: "Vietnam"
  };

  const colorVariants: ColorVariant[] = [
    { 
      id: "sea-blue", 
      name: "Sea Blue", 
      color: "bg-blue-500",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    },
    { 
      id: "crimson", 
      name: "Crimson Red", 
      color: "bg-red-500",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    },
    { 
      id: "midnight", 
      name: "Midnight Black", 
      color: "bg-gray-900",
      image: "/lovable-uploads/ac24fe39-bf29-4870-ab3f-6cfe15b520ea.png"
    }
  ];

  const sizes = [
    { id: "IND6", label: "IND6", stock: 5 },
    { id: "IND7", label: "IND7", stock: 8 },
    { id: "IND8", label: "IND8", stock: 2 },
    { id: "IND9", label: "IND9", stock: 12 },
    { id: "IND10", label: "IND10", stock: 0 }
  ];

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      navigate("/auth");
      return;
    }
    
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    await addToCart("4", quantity, selectedSize, selectedColor);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen mobile-product-bg text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-glow rounded-full animate-float-slow opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Top Bar */}
      <div className="relative z-50 flex items-center justify-between p-4 mobile-nav-glass">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mobile-glass-button p-3 rounded-full"
        >
          <ArrowLeft className="h-5 w-5 text-cyan-glow" />
        </Button>
        
        <div className="text-cyan-glow font-bold text-lg tracking-wider">
          MURLIE
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="mobile-glass-button p-3 rounded-full relative"
        >
          <ShoppingCart className="h-5 w-5 text-cyan-glow" />
          {totalItems > 0 && (
            <div className="absolute -top-1 -right-1 bg-cyan-glow text-mobile-navy text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {totalItems}
            </div>
          )}
        </Button>
      </div>

      {/* Hero Area */}
      <div className="relative px-4 py-6">
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Left: Product Info */}
          <div className="space-y-3">
            <div className="mobile-glow-text text-2xl font-bold leading-tight">
              {product.name}
            </div>
            <div className="text-cyan-muted text-sm">
              {product.subtitle}
            </div>
            <div className="mobile-price-badge">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice && (
              <div className="text-cyan-muted line-through text-sm">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* Right: Product Image */}
          <div className="relative">
            <div className="mobile-product-glow" />
            <img 
              src={colorVariants.find(c => c.id === selectedColor)?.image}
              alt={`${product.name} ${colorVariants.find(c => c.id === selectedColor)?.name}`}
              className="w-full h-48 object-contain relative z-10 mobile-product-float"
            />
          </div>
        </div>

        {/* Wave Background */}
        <div className="mobile-wave-bg" />
      </div>

      {/* Summary & Description */}
      <div className="px-4 mb-6">
        <Card className="mobile-glass-card p-4 rounded-3xl">
          <p className="text-cyan-muted leading-relaxed">
            {expandedDescription ? product.fullDescription : product.description}
            <button 
              onClick={() => setExpandedDescription(!expandedDescription)}
              className="text-cyan-glow ml-2 hover:underline"
            >
              {expandedDescription ? 'Read less' : 'Read more'}
            </button>
          </p>
        </Card>
      </div>

      {/* Color Swatches */}
      <div className="px-4 mb-6">
        <div className="mb-3 text-white font-semibold">Colors</div>
        <div className="flex gap-3">
          {colorVariants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedColor(variant.id)}
              className={`relative w-16 h-16 rounded-2xl transition-all duration-150 ${
                selectedColor === variant.id 
                  ? 'mobile-selected-color' 
                  : 'mobile-glass-card hover:scale-105'
              }`}
            >
              <img 
                src={variant.image}
                alt={variant.name}
                className="w-full h-full object-contain p-2"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="px-4 mb-6">
        <div className="mb-3 text-white font-semibold">Size (IND)</div>
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => size.stock > 0 && setSelectedSize(size.id)}
              disabled={size.stock === 0}
              className={`p-3 rounded-xl font-medium transition-all text-sm ${
                selectedSize === size.id
                  ? 'mobile-selected-size'
                  : size.stock === 0
                  ? 'mobile-disabled-size'
                  : 'mobile-glass-card hover:mobile-hover-size'
              }`}
            >
              {size.label}
              {size.stock === 0 && (
                <div className="text-xs text-cyan-muted mt-1">Out</div>
              )}
              {size.stock > 0 && size.stock <= 3 && (
                <div className="text-xs text-cyan-glow mt-1">
                  Only {size.stock}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Picker */}
      <div className="px-4 mb-6">
        <div className="mb-3 text-white font-semibold">Quantity</div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => handleQuantityChange(-1)}
            className="mobile-glass-button w-12 h-12 rounded-full p-0"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4 text-cyan-glow" />
          </Button>
          <span className="text-white font-bold text-lg min-w-[2rem] text-center">
            {quantity}
          </span>
          <Button
            onClick={() => handleQuantityChange(1)}
            className="mobile-glass-button w-12 h-12 rounded-full p-0"
          >
            <Plus className="h-4 w-4 text-cyan-glow" />
          </Button>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mb-6">
        <Card className="mobile-glass-card p-4 rounded-3xl">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-cyan-glow text-cyan-glow' 
                      : 'text-cyan-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-cyan-glow font-bold">{product.rating}</span>
            <span className="text-cyan-muted">({product.reviews} reviews)</span>
          </div>
        </Card>
      </div>

      {/* Extras/Badges */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 mobile-glass-card p-3 rounded-2xl">
            <Truck className="w-4 h-4 text-cyan-glow" />
            <span className="text-xs text-cyan-muted">Free Shipping India</span>
          </div>
          <div className="flex items-center gap-2 mobile-glass-card p-3 rounded-2xl">
            <RotateCcw className="w-4 h-4 text-cyan-glow" />
            <span className="text-xs text-cyan-muted">30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 mobile-glass-card p-3 rounded-2xl">
            <Shield className="w-4 h-4 text-cyan-glow" />
            <span className="text-xs text-cyan-muted">Authenticity</span>
          </div>
          <div className="flex items-center gap-2 mobile-glass-card p-3 rounded-2xl">
            <Leaf className="w-4 h-4 text-cyan-glow" />
            <span className="text-xs text-cyan-muted">Eco Materials</span>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 mobile-nav-glass">
        <div className="flex gap-3 items-center">
          <Button
            onClick={toggleWishlist}
            className={`mobile-glass-button w-14 h-14 rounded-full p-0 ${
              isWishlisted ? 'mobile-selected-wishlist' : ''
            }`}
          >
            <Heart className={`w-6 h-6 text-cyan-glow ${
              isWishlisted ? 'fill-current' : ''
            }`} />
          </Button>
          
          <Button
            onClick={handleAddToCart}
            className="flex-1 mobile-cta-button h-14 rounded-full font-bold text-lg"
          >
            Add to cart — ₹{(product.price * quantity).toLocaleString('en-IN')}
          </Button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24" />
    </div>
  );
};

export default ProductDetailMobile;