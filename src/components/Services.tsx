import { Wrench, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceRepair from "@/assets/service-1.jpg";
import serviceInstall from "@/assets/service-4.jpg";
import serviceMaintenance from "@/assets/service-5.jpg";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Wrench,
      title: "AC Repair",
      description: "Fast, reliable repairs to get your system running smoothly again. We diagnose and fix all AC issues quickly.",
      image: serviceRepair,
    },
    {
      icon: Home,
      title: "Installation",
      description: "Professional installation of new AC systems for residential and industrial properties with expert precision.",
      image: serviceInstall,
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Regular maintenance services to keep your AC running efficiently and prevent costly breakdowns.",
      image: serviceMaintenance,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive air conditioning solutions for your home or business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-card-hover transition-all duration-300 border-none"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
