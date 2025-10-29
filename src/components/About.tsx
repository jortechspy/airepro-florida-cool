import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-3.jpg";

const About = () => {
  const features = [
    "Fast response times",
    "Quality workmanship",
    "Licensed & insured technicians",
    "Residential & industrial expertise",
    "Customer satisfaction guaranteed",
    "Competitive pricing",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Brey Services
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Air conditioning Brey Services Inc delivers high-quality air conditioning solutions in Tampa and Miami. 
              We focus on fast response, quality work, and lasting customer satisfaction.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience serving both residential and industrial clients, 
              our team of certified technicians is dedicated to keeping you comfortable 
              year-round with reliable AC services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Brey Services Technician"
                className="rounded-2xl shadow-card-hover w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-card-hover">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
