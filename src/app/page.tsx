import { ThemeToggle } from "../components/ui/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Section 1: Header with Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gold">Elegant Bridal</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-foreground hover:text-gold transition-colors">Home</a>
              <a href="#collection" className="text-foreground hover:text-gold transition-colors">Collection</a>
              <a href="#services" className="text-foreground hover:text-gold transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-gold transition-colors">About</a>
              <a href="#testimonials" className="text-foreground hover:text-gold transition-colors">Reviews</a>
              <a href="#gallery" className="text-foreground hover:text-gold transition-colors">Gallery</a>
              <a href="#contact" className="text-foreground hover:text-gold transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Section 2: Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-br from-background to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Find Your Perfect
            <span className="block text-gold">Wedding Dress</span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            Discover our elegant collection of wedding dresses with sophisticated dark gold styling.
            Each dress is crafted to make your special day unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gold text-white rounded-lg hover:bg-gold-dark transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
              Browse Collection
            </button>
            <button className="px-10 py-4 border-2 border-gold text-gold rounded-lg hover:bg-gold/10 transition-all duration-300 font-medium text-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Collection */}
      <section id="collection" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Collection</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our handpicked selection of the most stunning wedding dresses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-80 bg-gradient-to-br from-gold/10 to-gold/20 flex items-center justify-center">
                  <span className="text-gold text-lg font-medium">Dress {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Elegant Design {item}</h3>
                  <p className="text-foreground/70 mb-4">Beautiful wedding dress with intricate details and premium fabric.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold">$2,499</span>
                    <button className="px-4 py-2 bg-gold text-white rounded hover:bg-gold-dark transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Complete bridal services to make your wedding day perfect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">👗</span>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-4">Custom Fitting</h3>
              <p className="text-foreground/70">
                Professional alterations and custom fitting services to ensure your dress fits perfectly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-4">Styling Consultation</h3>
              <p className="text-foreground/70">
                Expert styling advice to help you choose the perfect dress and accessories.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-4">Custom Design</h3>
              <p className="text-foreground/70">
                Create your dream dress with our custom design and tailoring services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: About Us */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Elegant Bridal</h2>
              <p className="text-lg text-foreground/80 mb-6">
                With over 20 years of experience in bridal fashion, Elegant Bridal has been helping brides
                find their perfect wedding dress. Our passion for elegance and attention to detail ensures
                every bride feels absolutely stunning on her special day.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                We believe that every bride deserves to feel like royalty, which is why we offer
                personalized service, premium quality fabrics, and timeless designs that will make
                your wedding day unforgettable.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">500+</div>
                  <div className="text-foreground/70">Happy Brides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">20+</div>
                  <div className="text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">100+</div>
                  <div className="text-foreground/70">Dress Designs</div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-gold/10 to-gold/20 rounded-lg flex items-center justify-center">
              <span className="text-gold text-xl font-medium">About Us Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Brides Say</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Read testimonials from our happy brides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Absolutely stunning dress and incredible service! The team made my wedding day perfect.",
                rating: 5
              },
              {
                name: "Emily Davis",
                text: "The custom fitting was amazing. My dress fit like a glove and I felt like a princess.",
                rating: 5
              },
              {
                name: "Jessica Wilson",
                text: "Beautiful collection and wonderful staff. Highly recommend Elegant Bridal!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gold">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Gallery & Contact Form */}
      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Gallery & Get In Touch</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              View our latest work and contact us for your appointment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery Half */}
            <div>
              <h3 className="text-2xl font-semibold text-gold mb-6">Recent Work</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-br from-gold/10 to-gold/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                    <span className="text-gold font-medium">Gallery {item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Half */}
            <div>
              <h3 className="text-2xl font-semibold text-gold mb-6">Book Your Appointment</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Wedding Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors resize-none"
                    placeholder="Tell us about your dream dress..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors font-medium text-lg"
                >
                  Book Appointment
                </button>
              </form>

              {/* Location Info */}
              <div className="mt-8 p-6 bg-background border border-border rounded-lg">
                <h4 className="text-lg font-semibold text-gold mb-4">Visit Our Boutique</h4>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-center">
                    <span className="text-gold mr-3">📍</span>
                    <span>123 Bridal Avenue, Wedding District, City 12345</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold mr-3">📞</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold mr-3">✉️</span>
                    <span>info@elegantbridal.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold mr-3">🕒</span>
                    <span>Mon-Sat: 10AM-7PM, Sun: 12PM-5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">Elegant Bridal</h3>
              <p className="text-foreground/70">
                Making your wedding day dreams come true with elegant and sophisticated bridal wear.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#collection" className="hover:text-gold transition-colors">Collection</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Custom Fitting</li>
                <li>Styling Consultation</li>
                <li>Custom Design</li>
                <li>Alterations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">Facebook</a>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
            <p>&copy; 2024 Elegant Bridal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
