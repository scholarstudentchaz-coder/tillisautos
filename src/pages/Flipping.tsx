import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import bmw328i from "@/assets/bmw-328i.png";
import chargerSrt8 from "@/assets/charger-srt8.png";
import e550Coupe from "@/assets/e550-coupe.png";

const Flipping = () => {
  const projects = [
    {
      title: "2010 BMW 328i",
      before: "Purchased with cheap partial repair work",
      work: "Complete proper repair - replaced brakes, interior speakers, front bumper paint, and new hood",
      result: "Restored to proper condition and successfully sold",
      image: bmw328i,
    },
    {
      title: "2007 Dodge Charger SRT8",
      before: "Non-functional door handle",
      work: "Full professional detail and door handle replacement",
      result: "Restored to full functionality and sold",
      image: chargerSrt8,
    },
    {
      title: "2010 Mercedes E550 Coupe",
      before: "Cosmetic wear and mechanical issues",
      work: "Front bumper paint, new grille, reupholstered front seats, replaced sway bar links, power steering pump, and PCV system",
      result: "Currently available for sale - see Cars for Sale page",
      image: e550Coupe,
      available: true,
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
                    {/* Project Image */}
                    <div className="h-80 md:h-auto overflow-hidden md:rounded-l-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.available && (
                          <Badge className="bg-accent text-accent-foreground">For Sale</Badge>
                        )}
                      </div>
                      
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
