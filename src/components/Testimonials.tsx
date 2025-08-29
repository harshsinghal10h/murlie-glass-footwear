import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Designer",
      avatar: "👩‍💼",
      rating: 5,
      text: "Murlie Enterprises has completely transformed my shoe game. The Azure Runner Pro is not just comfortable—it's a statement piece that goes with everything in my wardrobe.",
      gradient: "from-primary to-accent"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      avatar: "👨‍💼",
      rating: 5,
      text: "The Executive Elite series is phenomenal. I've worn them to board meetings and formal events—they're sophisticated, comfortable, and incredibly well-made.",
      gradient: "from-secondary to-primary-light"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fitness Enthusiast",
      avatar: "🏃‍♀️",
      rating: 5,
      text: "As someone who runs marathons, I'm very particular about my footwear. The Velocity Sport line offers unmatched performance and has become my go-to for training.",
      gradient: "from-accent-soft to-secondary-glow"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Creative Director",
      avatar: "🎨",
      rating: 5,
      text: "The attention to detail in every pair is remarkable. Murlie Enterprises doesn't just make shoes—they craft experiences that make you feel confident and stylish.",
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the people who make every step count
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-accent text-accent" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xl`}>
                  {testimonial.avatar}
                </div>

                {/* Customer Details */}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonial.role}
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="ml-auto">
                  <div className="flex items-center space-x-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-6 text-4xl text-accent/20 font-serif">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 glass-panel rounded-2xl p-8 animate-slide-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">2,500+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;