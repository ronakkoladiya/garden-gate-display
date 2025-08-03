import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Ready to start your import-export journey? Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="shadow-elegant border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-primary/20 focus:border-primary" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-primary/20 focus:border-primary" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="border-primary/20 focus:border-primary" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Product Interest
                  </label>
                  <Input 
                    placeholder="Vegetables, Fruits, Spices..." 
                    className="border-primary/20 focus:border-primary" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    className="border-primary/20 focus:border-primary min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're here to help you with all your import-export needs. Whether you're looking 
                  for fresh vegetables, exotic fruits, or premium spices, our team is ready to 
                  connect you with the best suppliers worldwide.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="p-6 border-primary/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Trade Center Blvd<br />
                        International District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-primary/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-primary/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-accent rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@freshveggie.com<br />
                        sales@freshveggie.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-primary/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">FV</span>
            </div>
            <span className="text-xl font-bold">FreshVeggie Import & Export</span>
          </div>
          <p className="text-white/80">
            Connecting global markets with premium quality produce
          </p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60">© 2024 FreshVeggie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;