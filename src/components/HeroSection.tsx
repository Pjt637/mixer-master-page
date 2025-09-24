import { Button } from '@/components/ui/button';
import { Calendar, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-mobile-bar.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mobile cocktail bar setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Booking Notice */}
          <div className="inline-flex items-center space-x-2 bg-gradient-primary px-6 py-3 rounded-full mb-8 animate-float">
            <Calendar className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold">BOOKING OPEN FOR 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Cocktail Caravan
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Sip Shake and Celebrate
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Let us bring the party straight to you with our sensational cocktails and upbeat bartenders! 
            Get ready to elevate the excitement, sip on pure joy, and watch the celebration explode into 
            an unforgettable experience!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow animate-pulse-glow"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Book Online
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Early Bird Notice */}
          <div className="mt-12 p-6 bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-accent mb-2">Get Early Bird Discount</h3>
            <p className="text-muted-foreground">
              Advance Reserve Now and Be Ready for 2026. Contact us by December 31, 2025 for exclusive savings!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;