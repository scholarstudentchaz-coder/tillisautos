import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Users, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import chazPortrait from "@/assets/chaz-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About Tillis Auto Aesthetics</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Where passion for automobiles meets professional excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Meet Chaz Tillis</h2>
                <p className="text-muted-foreground mb-4">
                  Hi, I'm Chaz Tillis, the founder of Tillis Auto Aesthetics. My journey with cars began at a young age, 
                  fueled by a passion for craftsmanship and an eye for detail that would eventually define my career.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a hobby restoring my first vehicle transformed into a professional pursuit of automotive 
                  excellence. Every car that comes through our doors receives the same meticulous attention and care that 
                  I would give to my own vehicles.
                </p>
                <p className="text-muted-foreground">
                  Today, Tillis Auto Aesthetics stands as a testament to quality workmanship, combining professional 
                  detailing services with our unique flipping division, where we restore vehicles to their former glory.
                </p>
              </div>
              <div className="rounded-lg h-96 overflow-hidden">
                <img 
                  src={chazPortrait} 
                  alt="Chaz Tillis - Founder of Tillis Auto Aesthetics" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every detail is executed to perfection, ensuring your vehicle receives 
                  the best care possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Passion</h3>
                <p className="text-muted-foreground">
                  Cars aren't just our business—they're our passion. This enthusiasm drives us to deliver exceptional 
                  results every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reliability</h3>
                <p className="text-muted-foreground">
                  Your trust is our foundation. We're committed to transparent communication and dependable service 
                  you can count on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Tillis Auto Aesthetics, our mission is simple: to restore and maintain vehicles to their absolute best 
              condition while providing an exceptional customer experience.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether we're detailing your daily driver or restoring a vehicle for resale, we approach every project 
              with the same dedication to excellence, attention to detail, and commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:3109917416" className="text-muted-foreground hover:text-accent">
                      (310) 991-7416
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call or text anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:tillisautoaesthetics@gmail.com" className="text-muted-foreground hover:text-accent">
                      tillisautoaesthetics@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest projects and special offers
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/tillisautoaesthetics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-accent-foreground" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61572672301525&mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-accent-foreground" />
                  </a>
                  <a
                    href="https://www.youtube.com/@tar6a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                  >
                    <Youtube className="h-6 w-6 text-accent-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
