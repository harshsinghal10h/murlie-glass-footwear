import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Camera, Package } from "lucide-react";
import { toast } from "sonner";

interface ProductImage {
  id: string;
  file: File | null;
  preview: string | null;
  size: string;
}

const ProductUpload = () => {
  const [images, setImages] = useState<ProductImage[]>([
    { id: "1", file: null, preview: null, size: "IND 8" },
    { id: "2", file: null, preview: null, size: "IND 7" },
    { id: "3", file: null, preview: null, size: "IND 6" },
    { id: "4", file: null, preview: null, size: "Main Image" }
  ]);
  
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleImageUpload = (imageId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload only image files");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImages(prev => prev.map(img => 
        img.id === imageId 
          ? { ...img, file, preview: e.target?.result as string }
          : img
      ));
      toast.success(`Image uploaded for ${images.find(img => img.id === imageId)?.size}`);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (imageId: string) => {
    setImages(prev => prev.map(img => 
      img.id === imageId 
        ? { ...img, file: null, preview: null }
        : img
    ));
    
    // Reset the file input
    if (fileInputRefs.current[imageId]) {
      fileInputRefs.current[imageId]!.value = '';
    }
  };

  const triggerFileInput = (imageId: string) => {
    fileInputRefs.current[imageId]?.click();
  };

  const handleSubmit = () => {
    const uploadedImages = images.filter(img => img.file !== null);
    
    if (uploadedImages.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    if (!productName.trim()) {
      toast.error("Please enter a product name");
      return;
    }

    // Here you would typically upload to your backend
    toast.success(`Product "${productName}" created with ${uploadedImages.length} images!`);
  };

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Upload </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Product Images
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload 4 high-quality images of your product with different sizes
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Product Details */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Package className="mr-3 h-6 w-6 text-accent" />
              Product Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl glass-panel border-0 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Enter product name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl glass-panel border-0 text-foreground focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">Select category...</option>
                  <option value="sneakers">Premium Sneakers</option>
                  <option value="sandals">Luxury Sandals</option>
                  <option value="boots">Designer Boots</option>
                  <option value="casual">Casual Wear</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Image Upload Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <Card 
                key={image.id} 
                className="glass-card overflow-hidden group hover:glow-primary transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square">
                  {image.preview ? (
                    // Image Preview
                    <div className="relative w-full h-full">
                      <img
                        src={image.preview}
                        alt={`Product ${image.size}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeImage(image.id)}
                          className="text-white hover:bg-destructive/20"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Size Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                        {image.size}
                      </div>
                    </div>
                  ) : (
                    // Upload Placeholder
                    <div 
                      className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-muted/20 transition-colors"
                      onClick={() => triggerFileInput(image.id)}
                    >
                      <div className="p-4 rounded-full bg-gradient-glass mb-4">
                        <Upload className="h-8 w-8 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center mb-2">
                        Click to upload
                      </p>
                      <p className="text-xs text-accent font-semibold">
                        {image.size}
                      </p>
                    </div>
                  )}
                  
                  {/* Hidden File Input */}
                  <input
                    ref={(el) => fileInputRefs.current[image.id] = el}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(image.id, e)}
                    className="hidden"
                  />
                </div>
                
                {/* Upload Button */}
                <div className="p-4">
                  <Button
                    onClick={() => triggerFileInput(image.id)}
                    variant="outline"
                    size="sm"
                    className="w-full glass-button group/btn"
                  >
                    <Camera className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    {image.preview ? 'Change Image' : 'Upload Image'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Upload Guidelines */}
          <Card className="glass-card p-6">
            <h4 className="font-semibold text-foreground mb-4">Upload Guidelines</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p>• <span className="text-accent">File Format:</span> JPG, PNG, WebP</p>
                <p>• <span className="text-accent">Size Limit:</span> Maximum 5MB per image</p>
              </div>
              <div className="space-y-2">
                <p>• <span className="text-accent">Resolution:</span> Minimum 800x800px</p>
                <p>• <span className="text-accent">Quality:</span> High resolution for best results</p>
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="glass-button bg-gradient-primary px-12 py-6 text-lg font-semibold group/submit"
            >
              Create Product
              <Package className="ml-3 h-5 w-5 group-hover/submit:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUpload;