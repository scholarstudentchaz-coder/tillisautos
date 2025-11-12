import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    // Load Trafft embed script
    const script = document.createElement('script');
    script.src = "https://tillisautoaesthetics.trafft.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Book Your Service</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Schedule your detailing appointment and give your vehicle the care it deserves
          </p>
        </div>
      </section>

      {/* Trafft Booking Widget */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div 
            className="embedded-booking" 
            data-url="https://tillisautoaesthetics.trafft.com" 
            data-query="&t=s&uuid=6ceb6bae-9805-451d-8cb1-1da56c110c34" 
            data-lang="en" 
            data-autoresize="0" 
            data-showsidebar="1" 
            data-showservices="1" 
            style={{ minWidth: '320px', height: '768px' }}
          />
        </div>
      </section>
    </div>
  );
};
export default Booking;