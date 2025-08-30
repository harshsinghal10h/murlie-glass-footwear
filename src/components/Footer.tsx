import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "New Arrivals", href: "#" },
        { label: "Sneakers", href: "#" },
        { label: "Formal Shoes", href: "#" },
        { label: "Sports", href: "#" },
        { label: "Sandals", href: "#" },
        { label: "Limited Edition", href: "#" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { label: "Size Guide", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns & Exchanges", href: "#" },
        { label: "Track Your Order", href: "#" },
        { label: "Care Instructions", href: "#" },
        { label: "Warranty", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Story", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/50 border-t border-glass-border/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white glass-panel px-4 py-2 rounded-xl glow-primary animate-glow-pulse mb-4">
                Murlie Enterprises
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting the future of footwear with innovative designs, premium materials, 
                and uncompromising quality since 2009.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">123 Fashion District, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">+917014718223</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">murlieenterprises@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glass-card rounded-lg hover:glow-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-glass-border/20">
          <div className="glass-panel rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Stay in the Loop
                </h4>
                <p className="text-muted-foreground">
                  Be the first to know about new collections, exclusive offers, and style tips.
                </p>
              </div>
              <div className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="glass-card border-glass-border/30 focus:border-accent/50"
                />
                <Button className="glass-button group px-6">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-glass-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Murlie Enterprises. All rights reserved.</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <div className="text-accent animate-pulse">💎</div>
              <span>by Murlie Enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;