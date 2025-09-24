const HeroSection = () => {
  return (
    <main id="main" className="pt-32 pb-16">
      {/* Hero Content */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Booking Notice */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
              BOOKING OPEN FOR
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-pink-500 mb-8">
              2026
            </h1>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Cocktail Caravan
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Sip Shake and Celebrate
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let us bring the party straight to you with our sensational cocktails and upbeat bartenders! 
            Get ready to elevate the excitement, sip on pure joy, and watch the celebration explode into 
            an unforgettable experience!
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <a 
              href="#contact" 
              className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Early Bird Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* First Early Bird */}
          <div className="text-center bg-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">get early bird</h3>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">discount</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Advance Reserve Now and Be Ready for 2026
            </h4>
            <a 
              href="#contact" 
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300"
            >
              CONTACT US
            </a>
          </div>

          {/* Second Early Bird */}
          <div className="text-center bg-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">get early bird</h3>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">discount</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Advance Reserve Now and Be Ready for 2025
            </h4>
            <a 
              href="#contact" 
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300"
            >
              Booking Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;