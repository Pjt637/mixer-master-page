import { Wine, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Wine className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  COCKTAIL CARAVAN
                </h3>
                <p className="text-sm text-muted-foreground">SIP SHAKE AND CELEBRATE</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Bringing exceptional mobile bar experiences to events across the Greater Toronto Area. 
              Professional bartenders, premium cocktails, unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'Our Stylish Setup', 'Services', 'About Us', 'Contact Us', 'FAQs'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@cocktailcaravan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-COCKTAIL</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gradient-primary p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="bg-gradient-primary p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Cocktail Caravan. All rights reserved. | Booking now open for 2026!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;