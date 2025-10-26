import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Shield, Lightbulb, Droplet, Wind, Trash2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Full Interior & Exterior Detailing",
      description: "Complete transformation of your vehicle inside and out. Deep cleaning, conditioning, polishing, and protection for every surface.",
      price: "Pricing available - Cars & Trucks have different rates",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Premium paint protection that provides long-lasting shine and defense against the elements. Hydrophobic properties keep your car cleaner longer.",
      price: "Custom pricing based on vehicle size",
    },
    {
      icon: Lightbulb,
      title: "Headlight Restoration",
      description: "Restore clarity to foggy, yellowed headlights. Improves visibility and enhances your vehicle's appearance.",
      price: "Contact for pricing",
    },
    {
      icon: Droplet,
      title: "Scratch Removal & Paint Correction",
      description: "Professional paint correction removes swirls, scratches, and imperfections to restore your paint's original brilliance.",
      price: "Varies by severity",
    },
    {
      icon: Wind,
      title: "Engine Bay Cleaning",
      description: "Thorough cleaning and degreasing of your engine compartment. Makes maintenance easier and prevents corrosion.",
      price: "Add-on service available",
    },
    {
      icon: Trash2,
      title: "Odor Removal",
      description: "Eliminate stubborn odors from smoke, pets, or spills. Professional treatment that targets the source, not just the symptoms.",
      price: "Add-on service available",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Detailing Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Professional automotive detailing services tailored to bring out the best in your vehicle
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            📋 Detailed price sheet available upon request. Cars and trucks have different pricing tiers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm font-medium text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <div className="bg-muted-foreground/10 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-muted-foreground text-center">
                      Before/After Photo #{item} will go here
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Showcase your amazing transformations
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your detailing service today and experience the difference professional care makes.
          </p>
          <Link to="/booking">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book Your Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
