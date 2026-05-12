import Image from 'next/image';
import logo from './public/TravelWings.png';

export default function TrawellWingsWebsite() {
  const services = [
    {
      title: 'Foreign Travel Consulting',
      description:
        'Personalized travel consultation for international tours, business trips, education travel, and holiday planning.',
      icon: '🌍',
    },
    {
      title: 'Visa Processing',
      description:
        'Hassle-free visa application support with complete documentation guidance and application tracking.',
      icon: '🛂',
    },
    {
      title: 'Passport Processing',
      description:
        'Fast and reliable passport application, renewal, correction, and appointment assistance services.',
      icon: '📘',
    },
    {
      title: 'Travel Documentation',
      description:
        'Complete support for invitation letters, travel insurance, hotel bookings, and itinerary planning.',
      icon: '📄',
    },
  ];

  const countries = [
    'Canada',
    'United States',
    'United Kingdom',
    'Australia',
    'Dubai',
    'Singapore',
    'Europe',
    'New Zealand',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="TravelWings Logo"
              className="h-16 w-auto"
            />

            <div>
              <h2 className="text-2xl font-black text-sky-900 leading-none">
                TravelWings
              </h2>
              <p className="text-sm text-gray-500 tracking-wide">
                Explore • Experience • Excellence
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
            <a href="#" className="hover:text-sky-700 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-sky-700 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-sky-700 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-sky-700 transition-colors">
              Contact
            </a>
          </nav>

          <button className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all">
            Get Consultation
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-700 to-cyan-500 text-white pt-40">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-cyan-200">
              Explore The World With Confidence
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              TrawellWings
            </h1>

            <p className="text-lg md:text-xl text-sky-100 leading-relaxed mb-8">
              Your trusted partner for Foreign Travel Consulting, Visa Processing,
              and Passport Services. We simplify your international travel journey
              with expert guidance and reliable support.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-sky-900 px-7 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">
                Get Free Consultation
              </button>

              <button className="border border-white px-7 py-3 rounded-2xl font-semibold hover:bg-white hover:text-sky-900 transition-all">
                Contact Us
              </button>
            </div>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold">Expert Guidance</h4>
                    <p className="text-sky-100 text-sm">
                      Experienced travel consultants for every step of your journey.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold">Fast Processing</h4>
                    <p className="text-sky-100 text-sm">
                      Quick and smooth documentation & application handling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold">Trusted Support</h4>
                    <p className="text-sky-100 text-sm">
                      Dedicated customer support with transparent communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
              alt="Travel"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-sky-600 font-semibold uppercase tracking-wider mb-3">
              About TrawellWings
            </p>

            <h2 className="text-4xl font-black mb-6 leading-tight">
              Making International Travel Easy & Stress-Free
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              At TrawellWings, we help individuals, families, students, and businesses
              achieve their travel goals with confidence. From passport services to visa
              approvals and travel consultation, we ensure a seamless experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-4xl font-black text-sky-700">500+</h3>
                <p className="text-gray-600 mt-2">Successful Visa Applications</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-4xl font-black text-sky-700">100%</h3>
                <p className="text-gray-600 mt-2">Customer Support Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-600 font-semibold uppercase tracking-wider mb-3">
            Our Services
          </p>

          <h2 className="text-4xl font-black mb-6">
            Complete Travel & Documentation Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16">
            We provide professional travel consulting and documentation services
            tailored to your travel needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-sky-900 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-wider text-cyan-200 mb-3 font-semibold">
            Popular Destinations
          </p>

          <h2 className="text-4xl font-black mb-8">
            Countries We Assist For
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl backdrop-blur-md text-lg font-medium"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-600 uppercase tracking-wider font-semibold mb-3">
            How It Works
          </p>

          <h2 className="text-4xl font-black mb-16">
            Simple & Transparent Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Consultation',
              'Document Verification',
              'Application Submission',
              'Travel Ready',
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-sky-700 text-white flex items-center justify-center text-3xl font-black mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-3">{step}</h3>

                <p className="text-gray-600">
                  Professional support throughout every stage of your travel process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-600 uppercase tracking-wider font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-4xl font-black mb-6 leading-tight">
              Start Your International Journey Today
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Reach out to our team for expert travel consultation and complete visa
              & passport assistance.
            </p>

            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <span>info@trawellwings.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-sky-500"
              />

              <select className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-sky-500">
                <option>Select Service</option>
                <option>Foreign Travel Consulting</option>
                <option>Visa Processing</option>
                <option>Passport Processing</option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>

              <button className="w-full bg-sky-700 hover:bg-sky-800 text-white py-4 rounded-2xl font-semibold text-lg transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-950 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black">TrawellWings</h3>
            <p className="text-sky-200 mt-2">
              Your trusted partner for global travel solutions.
            </p>
          </div>

          <div className="flex gap-6 text-sky-200">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
