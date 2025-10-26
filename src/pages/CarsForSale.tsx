import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Gauge, Fuel, CheckCircle2 } from "lucide-react";

const CarsForSale = () => {
  // Placeholder for current inventory
  const inventory = [
    {
      title: "2017 Honda Civic EX",
      price: "$16,500",
      year: "2017",
      mileage: "62,000",
      features: ["One Owner", "Clean Title", "Full Service History", "Recently Detailed"],
      highlights: [
        "Excellent fuel economy",
        "Reliable Honda engine",
        "Modern safety features",
        "Pristine interior condition",
      ],
    },
    // Add more cars as they become available
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Cars for Sale</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Quality restored vehicles, thoroughly inspected and detailed to perfection
          </p>
        </div>
      </section>

      {/* Current Inventory */}
      {inventory.length > 0 ? (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Available Now</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {inventory.map((car, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Image Gallery Placeholder */}
                    <div className="bg-muted h-80 rounded-t-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p className="font-medium">Car Photos</p>
                        <p className="text-sm mt-2">{car.title}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{car.title}</h3>
                          <p className="text-3xl font-bold text-accent">{car.price}</p>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{car.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Gauge className="h-4 w-4 text-muted-foreground" />
                          <span>{car.mileage} miles</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {car.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-3">
                        <Link to="/contact" className="flex-1">
                          <Button className="w-full">Contact to Inquire</Button>
                        </Link>
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-3xl">New Inventory Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We're currently working on our next restoration projects. Check back soon or contact us 
                  to be notified when new vehicles become available.
                </p>
                <Link to="/contact">
                  <Button size="lg">Get Notified</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Why Buy From Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Buy From Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Thoroughly Inspected",
                description: "Every vehicle undergoes comprehensive mechanical and cosmetic inspection before sale.",
              },
              {
                title: "Professionally Detailed",
                description: "All cars receive our full detailing treatment, ensuring they look and feel like new.",
              },
              {
                title: "Transparent History",
                description: "Complete service records and vehicle history reports provided for peace of mind.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in a Specific Vehicle?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us to learn more about our current and upcoming inventory.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarsForSale;
