import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import e350FrontDirty from "@/assets/e350-front-dirty.jpg";
import e350BackDirty from "@/assets/e350-back-dirty.jpg";
import e350Foam from "@/assets/e350-foam.jpg";
import e350FrontClean from "@/assets/e350-front-clean.jpg";
import e350BackClean from "@/assets/e350-back-clean.jpg";

const Gallery = () => {
  const featuredProject = {
    title: "2015 Mercedes-Benz E350",
    service: "Basic Exterior Renewal",
    images: {
      beforeFront: e350FrontDirty,
      beforeBack: e350BackDirty,
      foamed: e350Foam,
      afterFront: e350FrontClean,
      afterBack: e350BackClean,
    },
  };

  const projects = [
    {
      title: "2018 BMW 3 Series - Full Ceramic Coating",
      client: "John D.",
      service: "Ceramic Coating + Full Detail",
      testimonial: "Outstanding work! My car looks better than when I bought it new.",
    },
    {
      title: "2020 Ford F-150 - Interior Restoration",
      client: "Sarah M.",
      service: "Deep Interior Cleaning",
      testimonial: "Chaz completely transformed my truck's interior. Highly recommend!",
    },
    {
      title: "2016 Tesla Model S - Paint Correction",
      client: "Mike R.",
      service: "Paint Correction + Wax",
      testimonial: "The attention to detail is incredible. Worth every penny.",
    },
    {
      title: "2019 Jeep Wrangler - Headlight Restoration",
      client: "Emily K.",
      service: "Headlight Restoration",
      testimonial: "My headlights look crystal clear again. Amazing results!",
    },
    {
      title: "2017 Mercedes C-Class - Full Detail",
      client: "David L.",
      service: "Exterior & Interior Detail",
      testimonial: "Professional service from start to finish. Will definitely return.",
    },
    {
      title: "2021 Toyota Camry - Scratch Removal",
      client: "Lisa P.",
      service: "Scratch Removal + Polish",
      testimonial: "The scratches are completely gone. Looks brand new!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Previous Work</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            See the transformations we've achieved for our satisfied customers
          </p>
        </div>
      </section>

      {/* Featured Project - E350 */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Project</h2>
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-0">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                  <Badge className="text-base px-3 py-1">{featuredProject.service}</Badge>
                </div>
                
                <div className="space-y-8">
                  {/* Before */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Before</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img 
                        src={featuredProject.images.beforeFront} 
                        alt="E350 before - front view"
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <img 
                        src={featuredProject.images.beforeBack} 
                        alt="E350 before - back view"
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* During - Foamed Up */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Foamed Up</h4>
                    <img 
                      src={featuredProject.images.foamed} 
                      alt="E350 foamed up during wash"
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>

                  {/* After */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">After</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img 
                        src={featuredProject.images.afterFront} 
                        alt="E350 after - front view"
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <img 
                        src={featuredProject.images.afterBack} 
                        alt="E350 after - back view"
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="bg-muted h-64 rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <p className="font-medium">Before/After Photo</p>
                      <p className="text-sm mt-2">Project #{index + 1}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <Badge className="mb-3">{project.service}</Badge>
                    <blockquote className="text-muted-foreground italic mb-2">
                      "{project.testimonial}"
                    </blockquote>
                    <p className="text-sm font-medium text-primary">— {project.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Process Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <div className="bg-muted-foreground/10 rounded-lg h-80 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      Detailing Process Video #{item} will go here
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Behind-the-scenes footage of our work
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Best detailing service I've ever used. My car has never looked this good!",
                author: "Tom W.",
              },
              {
                quote: "Chaz's attention to detail is unmatched. Highly professional and reliable.",
                author: "Jennifer S.",
              },
              {
                quote: "Transformed my 10-year-old car to look showroom fresh. Absolutely amazing!",
                author: "Robert H.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-medium text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
