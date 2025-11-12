import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sparkles, Car, Wrench, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-detailing.jpg";
import e350FrontDirty from "@/assets/e350-front-dirty.jpg";
import e350BackDirty from "@/assets/e350-back-dirty.jpg";
import e350Foam from "@/assets/e350-foam.jpg";
import e350FrontClean from "@/assets/e350-front-clean.jpg";
import e350BackClean from "@/assets/e350-back-clean.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional auto detailing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Tillis Auto Aesthetics
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Professional Detailing & Automotive Restoration Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Sparkles className="mr-2 h-5 w-5" />
                Book a Detail
              </Button>
            </Link>
            <Link to="/cars-for-sale">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Car className="mr-2 h-5 w-5" />
                View Cars for Sale
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Previous Work */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Previous Work</h2>
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-0">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-3xl font-bold">2015 Mercedes-Benz E350</h3>
                  <Badge className="text-base px-3 py-1">Basic Exterior Renewal</Badge>
                </div>
                
                <div className="space-y-8">
                  {/* Before */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Before</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img src={e350FrontDirty} alt="E350 before - front view" className="w-full h-80 object-cover rounded-lg" />
                      <img src={e350BackDirty} alt="E350 before - back view" className="w-full h-80 object-cover rounded-lg" />
                    </div>
                  </div>

                  {/* During - Foamed Up */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Foamed Up</h4>
                    <img src={e350Foam} alt="E350 foamed up during wash" className="w-full h-96 object-cover rounded-lg" />
                  </div>

                  {/* After */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">After</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img src={e350FrontClean} alt="E350 after - front view" className="w-full h-80 object-cover rounded-lg" />
                      <img src={e350BackClean} alt="E350 after - back view" className="w-full h-80 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/gallery">
                    <Button size="lg">View All Previous Work</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Detailing</h3>
                <p className="text-muted-foreground mb-4">
                  Full interior and exterior detailing services that bring your vehicle back to showroom condition.
                </p>
                <ul className="space-y-2">
                  {["Ceramic Coating", "Headlight Restoration", "Scratch Removal", "Engine Bay Cleaning"].map(service => <li key={service} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{service}</span>
                    </li>)}
                </ul>
                <Link to="/services">
                  <Button className="mt-6 w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Flipping Division</h3>
                <p className="text-muted-foreground mb-4">
                  We buy, restore, and sell quality vehicles with meticulous attention to detail and craftsmanship.
                </p>
                <ul className="space-y-2">
                  {["Complete Restoration", "Quality Assurance", "Transparent Process", "Fair Pricing"].map(feature => <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                <Link to="/flipping">
                  <Button className="mt-6 w-full">View Our Work</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Tillis Auto Aesthetics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: "Quality Craftsmanship",
            description: "Every detail matters. We treat your vehicle as if it were our own."
          }, {
            title: "Experienced Professional",
            description: "Years of passion and expertise in automotive detailing and restoration."
          }, {
            title: "Customer Satisfaction",
            description: "Your satisfaction is our priority. We deliver results that exceed expectations."
          }].map(item => <Card key={item.title} className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your detailing service today or browse our selection of restored vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;