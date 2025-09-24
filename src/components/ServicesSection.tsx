const ServicesSection = () => {
  const services = [
    {
      title: 'Wedding Ceremony',
      image: '/images/caravan_party_01.webp', // 1024x520
    },
    {
      title: 'Birthday Celebration', 
      image: '/images/caravan_party_02.webp', // 1024x520
    },
    {
      title: 'Bachelor Event',
      image: '/images/bachelor-event.webp', // 1024x520
    },
    {
      title: 'Corporate Events',
      image: '/images/corporate-event.webp', // 1024x520
    },
    {
      title: 'Charity Events',
      image: '/images/caravan_party_03.webp', // 1024x520
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="text-center">
              {/* Service Image */}
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                  style={{ aspectRatio: '1024/520' }}
                />
              </div>
              
              {/* Service Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;