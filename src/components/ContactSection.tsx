import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ready to shake things up at your event?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's create an unforgettable experience together. Reach out to us for bookings, inquiries, 
            or any special requests. Our team is excited to craft the perfect mobile bar experience for you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="eventType">Event Type</Label>
                  <Input id="eventType" placeholder="Wedding, Birthday, Corporate, etc." className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your event and any special requests..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-6 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Special Offer */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@cocktailcaravan.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">(555) 123-COCKTAIL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground">Greater Toronto Area & Surrounding Regions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Available 7 days a week for events</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="bg-gradient-secondary shadow-glow border-accent/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">Exciting News!</h3>
                <p className="text-secondary-foreground/90 mb-6">
                  We have started booking for 2026. Contact us and get your date booked by December 31, 2025, 
                  to receive an additional early bird discount. Don't miss out on the chance to elevate your 
                  celebrations with our unique and stylish mobile bar experience.
                </p>
                <Button 
                  variant="outline" 
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold"
                >
                  Claim Early Bird Discount
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;