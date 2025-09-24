import { Card, CardContent } from '@/components/ui/card';
import { Heart, Cake, Building, Users, Gift } from 'lucide-react';
import weddingImage from '@/assets/wedding-cocktails.jpg';
import corporateImage from '@/assets/corporate-event.jpg';
import birthdayImage from '@/assets/birthday-party.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Ceremony',
      description: 'Make your special day unforgettable with our elegant cocktail service',
      image: weddingImage,
    },
    {
      icon: Cake,
      title: 'Birthday Celebration',
      description: 'Turn any birthday into a spectacular party with our festive cocktails',
      image: birthdayImage,
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional cocktail service for networking events and business celebrations',
      image: corporateImage,
    },
    {
      icon: Users,
      title: 'Bachelor Event',
      description: 'Celebrate the final frontier with our premium cocktail experience',
      image: corporateImage,
    },
    {
      icon: Gift,
      title: 'Charity Events',
      description: 'Support your cause while enjoying exceptional cocktail service',
      image: weddingImage,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring the perfect cocktail experience to your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-primary p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;