import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, Award, Users, ArrowRight, Leaf, Apple, Sparkles, CheckCircle, Shield, Factory, Star, MapPin, Quote } from "lucide-react";

const Index = () => {
  const productRanges = [
    {
      category: "Premium Spices",
      icon: <Sparkles className="h-12 w-12" />,
      description: "Sourced from the finest spice gardens across India and Southeast Asia, our premium spices are carefully selected, processed, and packed to retain their natural aroma, flavor, and nutritional value.",
      items: ["Turmeric", "Cardamom", "Black Pepper", "Cinnamon", "Cumin", "Coriander"],
      gradient: "bg-gradient-primary"
    },
    {
      category: "Fresh Vegetables",
      icon: <Leaf className="h-12 w-12" />,
      description: "Farm-fresh vegetables sourced directly from certified organic farms, ensuring maximum nutrition and freshness for global markets with strict quality control at every stage.",
      items: ["Onions", "Potatoes", "Tomatoes", "Carrots", "Bell Peppers", "Broccoli"],
      gradient: "bg-gradient-secondary"
    },
    {
      category: "Exotic Fruits",
      icon: <Apple className="h-12 w-12" />,
      description: "Handpicked tropical and exotic fruits from select orchards, delivered with optimal ripeness and nutritional content, meeting international quality standards.",
      items: ["Mangoes", "Bananas", "Citrus Fruits", "Grapes", "Pomegranates", "Dragon Fruit"],
      gradient: "bg-gradient-accent"
    }
  ];

  const qualityFeatures = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Direct Sourcing",
      description: "We work directly with farmers and growers to ensure traceability and maintain the highest quality standards from farm to export."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Strict Quality Control",
      description: "Multi-stage quality inspections with advanced testing facilities to ensure all products meet international food safety standards."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Certified Processes",
      description: "ISO certified processing facilities with HACCP compliance, ensuring food safety and quality throughout the supply chain."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art processing and packaging facilities equipped with the latest technology for optimal product preservation."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Proven Expertise",
      description: "Over 15 years of experience in agricultural exports with deep market knowledge and established global partnerships."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Competitive Pricing",
      description: "Direct sourcing and efficient operations allow us to offer the best prices without compromising on quality."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "24/7 customer support with dedicated account managers to ensure smooth transactions and timely deliveries."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ethical Sourcing",
      description: "Committed to fair trade practices and sustainable farming methods that benefit both farmers and the environment."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Foods Ltd.",
      location: "United Kingdom",
      testimonial: "Vanijya Global Exports has been our trusted partner for over 3 years. Their quality is consistently excellent and delivery is always on time."
    },
    {
      name: "Mohammed Al-Rahman",
      company: "Middle East Trading Co.",
      location: "UAE",
      testimonial: "The spices we receive are of exceptional quality. Their attention to detail and customer service is outstanding."
    },
    {
      name: "Chen Wei",
      company: "Asia Pacific Imports",
      location: "Singapore",
      testimonial: "Working with Vanijya has transformed our business. Their fresh produce always meets our high standards and client expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🌱 Premium Quality Import & Export
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
              Fresh <span className="text-accent-bright">Vegetables</span>,
              <br />Exotic <span className="text-secondary-bright">Fruits</span> &
              <br />Premium <span className="text-primary-bright">Spices</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in">
              Connecting global markets with the finest quality produce from trusted farmers worldwide. 
              Your gateway to international trade in agricultural products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Our Product Range Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Product Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in sourcing and supplying the finest quality agricultural products 
              from certified farms across the globe, ensuring premium quality and freshness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {productRanges.map((product, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 overflow-hidden animate-fade-in hover-scale">
                <CardContent className="p-0">
                  <div className={`${product.gradient} p-8 text-white text-center`}>
                    <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{product.category}</h3>
                    <p className="text-white/90 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="justify-center py-2">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      View Products
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Sourcing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Quality Assurance & Sourcing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence starts from the source. We maintain strict quality standards 
              throughout our supply chain to deliver only the finest products to our global customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-primary/10 hover:shadow-md transition-shadow animate-fade-in group">
                <div className="inline-flex p-4 bg-gradient-primary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Export Markets & Logistics Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Global Export Markets & Logistics</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                With an extensive network spanning across 50+ countries, Vanijya Global Exports has established itself as a trusted bridge between quality producers and discerning international markets. Our strategic partnerships with leading shipping companies and logistics providers ensure efficient, temperature-controlled transportation that maintains product integrity from source to destination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We serve diverse markets including Europe, Middle East, Southeast Asia, North America, and Africa, adapting our operations to meet specific regional requirements and regulatory standards. Our advanced supply chain management system provides real-time tracking and documentation, ensuring complete transparency and timely delivery for every shipment.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Successful Shipments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients say about their experience with Vanijya Global Exports.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-primary/10 hover:shadow-md transition-shadow animate-fade-in">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We maintain the highest standards of quality and safety through internationally recognized certifications. Our commitment to compliance ensures that all our products meet stringent global food safety and quality requirements.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  ISO
                </div>
                <div className="text-center font-semibold">ISO 22000:2018</div>
                <div className="text-center text-sm text-muted-foreground">Food Safety Management</div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  HACCP
                </div>
                <div className="text-center font-semibold">HACCP Certified</div>
                <div className="text-center text-sm text-muted-foreground">Hazard Analysis Critical Control</div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  FSSAI
                </div>
                <div className="text-center font-semibold">FSSAI Licensed</div>
                <div className="text-center text-sm text-muted-foreground">Food Safety Standards Authority</div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  BRC
                </div>
                <div className="text-center font-semibold">BRC Global Standard</div>
                <div className="text-center text-sm text-muted-foreground">British Retail Consortium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vanijya Global Exports Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Vanijya Global Exports?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedication to excellence, sustainable practices, and customer satisfaction 
              makes us the preferred choice for international agricultural trade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-primary/10 hover:shadow-md transition-shadow animate-fade-in group">
                <div className="inline-flex p-4 bg-gradient-primary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their agricultural import-export needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">FV</span>
                </div>
                <span className="text-xl font-bold">FreshVeggie</span>
              </div>
              <p className="text-white/80">
                Your trusted partner in global agricultural trade, delivering quality and excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-white/80">
                <li>Fresh Vegetables</li>
                <li>Premium Fruits</li>
                <li>Exotic Spices</li>
                <li>Organic Products</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Import Services</li>
                <li>Export Solutions</li>
                <li>Quality Control</li>
                <li>Logistics Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>+1 (555) 123-4567</li>
                <li>info@freshveggie.com</li>
                <li>123 Trade Center Blvd</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">© 2024 FreshVeggie Import & Export. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
