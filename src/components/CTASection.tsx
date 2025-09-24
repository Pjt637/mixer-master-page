const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main CTA Banner */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src="/images/cocktail_caravan_banner03.webp"
              alt="Cocktail Caravan Banner"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to shake things up at your event?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's create an unforgettable experience together. Reach out to us for bookings, inquiries, 
            or any special requests. Our team is excited to craft the perfect mobile bar experience for you!
          </p>
          
          <a 
            href="#contact" 
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg"
          >
            Get In Touch
          </a>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div>
            <img
              src="/images/cocktail_caravan_banner03.webp"
              alt="Cocktail Caravan"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div>
            <img
              src="/images/cocktail_caravan_banner01.webp"
              alt="Cocktail Caravan"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div>
            <img
              src="/images/cocktail_caravan_banner05.webp"
              alt="Cocktail Caravan"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div>
            <img
              src="/images/cocktail_caravan_banner04.webp"
              alt="Cocktail Caravan"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Exciting News Section */}
        <div className="text-center bg-pink-50 p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Exciting News!
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We have started booking for 2026. Contact us and get your date booked by December 31, 2025, 
            to receive an additional early bird discount. Don't miss out on the chance to elevate your 
            celebrations with our unique and stylish mobile bar experience.
          </p>
          
          <div className="mb-8">
            <img
              src="/images/cocktail_caravan_banner03.webp"
              alt="Cocktail Caravan Banner"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              style={{ aspectRatio: '1024/576' }}
            />
          </div>
        </div>

        {/* Scroll to top */}
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
          >
            Scroll to the top of the page
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;