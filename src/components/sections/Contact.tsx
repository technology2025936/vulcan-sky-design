import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-VULCAN",
      subtitle: "+1 (555) 123-8852"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vulcanaviation.com",
      subtitle: "training@vulcanaviation.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Aviation Drive",
      subtitle: "Sky Harbor, AZ 85001"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Monday - Friday: 7AM - 7PM",
      subtitle: "Saturday: 8AM - 5PM"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center border border-vulcan-red/20 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Your Journey
              <span className="block text-vulcan-red">Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to begin your flight training? Contact us today to learn more about our programs 
              and schedule your discovery flight with our expert team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-vulcan-red p-3 rounded-xl">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2 text-lg">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground font-medium">
                              {info.details}
                            </p>
                            <p className="text-muted-foreground">
                              {info.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Facility Info */}
              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <MapPin className="h-16 w-16 text-vulcan-red mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Visit Our Facility
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Located at Sky Harbor with easy access to training airspace and modern facilities. 
                  Come see our fleet and meet our instructors.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-aviation-grey mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-aviation-grey mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aviation-grey mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aviation-grey mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aviation-grey mb-2">
                      Program Interest
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Select a program</option>
                      <option>Private Pilot License (PPL)</option>
                      <option>Commercial Pilot License (CPL)</option>
                      <option>Instrument Rating (IR)</option>
                      <option>Discovery Flight</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aviation-grey mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your aviation goals and any questions you have..."
                      rows={4}
                    />
                  </div>
                  
                  <Button variant="vulcan" size="lg" className="w-full py-6 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;