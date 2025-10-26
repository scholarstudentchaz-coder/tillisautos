import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const Flipping = () => {
  const projects = [
    {
      title: "2015 Honda Accord EX-L",
      before: "Purchased with worn interior and dull paint",
      work: "Complete interior restoration, full paint correction, ceramic coating, mechanical inspection",
      result: "Sold within 2 weeks at 25% above market value",
    },
    {
      title: "2018 Ford Mustang GT",
      before: "Minor accident damage, neglected maintenance",
      work: "Body repair, paint matching, engine detailing, complete mechanical service",
      result: "Restored to pristine condition, satisfied buyer testimonial",
    },
    {
      title: "2016 Chevrolet Silverado 1500",
      before: "High mileage work truck with heavy wear",
      work: "Deep cleaning, seat repair, paint touch-ups, undercarriage treatment",
      result: "Successfully flipped to a contractor looking for reliable work truck",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Flipping Division</h1>
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
          <h2 className="text-4xl font-bold text-center mb-12">Completed Projects</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image Placeholder */}
                    <div className="bg-muted-foreground/10 h-80 md:h-auto flex items-center justify-center md:rounded-l-lg">
                      <div className="text-center text-muted-foreground">
                        <p className="font-medium">Before/After Collage</p>
                        <p className="text-sm mt-2">{project.title}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      
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
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
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
    </div>
  );
};

export default Flipping;
