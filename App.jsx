import React, { useState } from 'react'
import { Scissors, Sparkles, Palette, Heart, Plus, Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Hair Cutting",
      description: "Professional haircuts for all hair types. From classic styles to modern trends, our expert stylists deliver precision cuts that suit your face shape and lifestyle.",
      price: "Starting from $25"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Hair Styling",
      description: "Transform your look with our expert styling services. Perfect for special occasions, events, or everyday elegance. Blowouts, updos, and more.",
      price: "Starting from $35"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Hair Coloring",
      description: "From subtle highlights to bold transformations. Our color specialists use premium products for vibrant, long-lasting results that protect your hair.",
      price: "Starting from $50"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Hair Treatments",
      description: "Revitalize your hair with our nourishing treatments. Keratin smoothing, deep conditioning, scalp treatments, and repair therapies for healthy, shiny hair.",
      price: "Starting from $40"
    },
    {
      icon: <Plus className="w-12 h-12" />,
      title: "Hair Extensions",
      description: "Add length and volume with our premium hair extensions. Various methods available including tape-in, micro-link, and fusion for natural-looking results.",
      price: "Starting from $150"
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-primary mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Glamour Salon
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 sm:py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Look with
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                Expert Hair Care
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experience premium hair services delivered by skilled professionals. Your satisfaction is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of hair care services designed to make you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Glamour Salon</h2>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the beauty industry, Glamour Salon has established itself as a premier destination for hair care services. Our team of skilled stylists and colorists are dedicated to helping you achieve the look you desire.
              </p>
              <p className="text-gray-600 mb-6">
                We use only the highest quality products and stay updated with the latest trends and techniques to ensure you receive the best service possible. Your satisfaction is our commitment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-secondary mb-1">10K+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-primary mb-1">20+</h3>
                  <p className="text-gray-600">Expert Stylists</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="text-3xl font-bold text-secondary mb-1">50+</h3>
                  <p className="text-gray-600">Awards Won</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <span>Expert stylists with continuous training</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <span>Premium quality products for all services</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <span>Relaxing and welcoming atmosphere</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <span>Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <span>Personalized consultations for every client</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your look? Get in touch with us to book an appointment or ask any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">123 Beauty Street, Fashion District, City 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@glamoursalon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full hover:opacity-80 transition-opacity">
                  <Facebook className="w-6 h-6 text-primary" />
                </a>
                <a href="#" className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full hover:opacity-80 transition-opacity">
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
                <a href="#" className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full hover:opacity-80 transition-opacity">
                  <Twitter className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option value="">Select a service</option>
                  <option value="cutting">Hair Cutting</option>
                  <option value="styling">Hair Styling</option>
                  <option value="coloring">Hair Coloring</option>
                  <option value="treatments">Hair Treatments</option>
                  <option value="extensions">Hair Extensions</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-primary mr-2" />
                <span className="text-2xl font-bold">Glamour Salon</span>
              </div>
              <p className="text-gray-400">
                Your premier destination for exceptional hair care services. Transform your look with our expert stylists.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Hair Cutting</li>
                <li className="text-gray-400">Hair Styling</li>
                <li className="text-gray-400">Hair Coloring</li>
                <li className="text-gray-400">Hair Treatments</li>
                <li className="text-gray-400">Hair Extensions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Glamour Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
