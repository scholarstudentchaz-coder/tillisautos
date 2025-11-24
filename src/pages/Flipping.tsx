import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import bmw328i from "@/assets/bmw-328i.png";
import chargerSrt8 from "@/assets/charger-srt8.png";
import e550Coupe from "@/assets/e550-coupe.png";

const Flipping = () => {
  const projects = [
    {
      title: "2010 BMW 328i",
      before: "Purchased with cheap partial repair work",
      work: "Complete proper repair - replaced brakes, interior speakers, front bumper paint, and new hood",
      result: "Restored to proper condition",
      image: bmw328i,
      sold: true,
    },
    {
      title: "2007 Dodge Charger SRT8",
      before: "Non-functional door handle",
      work: "Full professional detail and door handle replacement",
      result: "Restored to full functionality",
      image: chargerSrt8,
      sold: true,
    },
    {
      title: "2010 Mercedes E550 Coupe",
      before: "Cosmetic wear and mechanical issues",
      work: "Front bumper paint, new grille, reupholstered front seats, replaced sway bar links, power steering pump, and PCV system",
      result: "Professional restoration completed",
      price: "$7,250",
      features: ["Two Owners", "Clean Title", "Full Service History"],
      highlights: [
        "382 Horsepower Reliable 5.5L V8 Engine",
        "Modern safety features",
        "Moderate interior condition",
        "Complete restoration work finished",
      ],
      image: e550Coupe,
      sold: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Vehicle Restoration & Sales</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We buy, restore, and sell quality vehicles with meticulous attention to detail
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Restoration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Acquisition", desc: "Carefully select vehicles with potential" },
              { step: "2", title: "Assessment", desc: "Thorough inspection and restoration plan" },
              { step: "3", title: "Restoration", desc: "Professional detailing and repairs" },
              { step: "4", title: "Sale", desc: "Quality vehicles at fair prices" },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Image */}
                    <div className="h-80 md:h-auto overflow-hidden md:rounded-l-lg relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.sold && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-red-500 text-white text-lg px-4 py-2">SOLD</Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      
                      {project.price && (
                        <p className="text-2xl font-bold text-accent mb-4">{project.price}</p>
                      )}
                      
                      <div className="space-y-4">
                        <div>
                          <Badge className="mb-2">Initial Condition</Badge>
                          <p className="text-muted-foreground">{project.before}</p>
                        </div>
                        
                        <div>
                          <Badge className="mb-2">Restoration Work</Badge>
                          <p className="text-muted-foreground">{project.work}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-accent" />
                            <span className="font-semibold">Result</span>
                          </div>
                          <p className="text-muted-foreground">{project.result}</p>
                        </div>

                        {project.features && (
                          <div>
                            <Badge className="mb-2">Features</Badge>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.features.map((feature) => (
                                <Badge key={feature} variant="secondary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.highlights && (
                          <div>
                            <Badge className="mb-2">Highlights</Badge>
                            <div className="space-y-2 mt-2">
                              {project.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-background">
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

      {/* Commitment Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Quality</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every vehicle we restore receives the same meticulous care and attention to detail. We don't just flip 
              cars—we transform them into vehicles we'd be proud to drive ourselves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Transparent Process",
                "Quality Craftsmanship",
                "Fair Pricing",
              ].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Future Inventory?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us to learn more about upcoming restoration projects and available vehicles.
          </p>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Flipping;
