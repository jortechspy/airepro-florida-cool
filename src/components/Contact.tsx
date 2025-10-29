import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `New Service Request from ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:info@aireproservices.com?subject=Service Request from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/19543949144?text=${whatsappMessage}`, '_blank');
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to discuss your service needs.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch for fast, reliable AC service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-card">
            <CardHeader className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary-foreground" />
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="tel:+19543949144" className="text-primary hover:text-accent text-lg font-medium">
                +1 (954) 394-9144
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-card">
            <CardHeader className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary-foreground" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="mailto:info@aireproservices.com" className="text-primary hover:text-accent text-lg font-medium">
                info@aireproservices.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-card">
            <CardHeader className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-primary-foreground" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground text-lg font-medium">
                Tampa & Miami<br />Florida, USA
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto mt-12 border-none shadow-card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Request a Service</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    placeholder="(954) 394-9144"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Type of Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Repair</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  placeholder="Tell us about your AC needs..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent text-lg py-6">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
