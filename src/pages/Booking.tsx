import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Car } from "lucide-react";
const Booking = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    vehicleType: "",
    date: "",
    time: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment."
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      vehicleType: "",
      date: "",
      time: "",
      message: ""
    });
  };
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Book Your Service</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Schedule your detailing appointment today and give your vehicle the care it deserves
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Request Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required value={formData.name} onChange={e => handleChange("name", e.target.value)} placeholder="John Doe" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={e => handleChange("email", e.target.value)} placeholder="john@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required value={formData.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="(123) 456-7890" />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select required value={formData.serviceType} onValueChange={value => handleChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-detail">Full Interior & Exterior Detail</SelectItem>
                          <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                          <SelectItem value="headlight">Headlight Restoration</SelectItem>
                          <SelectItem value="scratch">Scratch Removal</SelectItem>
                          <SelectItem value="engine">Engine Bay Cleaning</SelectItem>
                          <SelectItem value="odor">Odor Removal</SelectItem>
                          <SelectItem value="other">Other / Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="vehicleType">Vehicle Type *</Label>
                      <Select required value={formData.vehicleType} onValueChange={value => handleChange("vehicleType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car / Sedan</SelectItem>
                          <SelectItem value="suv">SUV / Crossover</SelectItem>
                          <SelectItem value="truck">Truck / Pickup</SelectItem>
                          <SelectItem value="van">Van / Minivan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input id="date" type="date" required value={formData.date} onChange={e => handleChange("date", e.target.value)} />
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input id="time" type="time" required value={formData.time} onChange={e => handleChange("time", e.target.value)} />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Textarea id="message" value={formData.message} onChange={e => handleChange("message", e.target.value)} placeholder="Any specific concerns or requests?" rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Booking Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll contact you to confirm your appointment and provide pricing details.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Booking Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How It Works</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Fill out the booking form with your details</li>
                      <li>2. We'll review your request and contact you within 24 hours</li>
                      <li>3. Confirm your appointment time and receive pricing</li>
                      <li>4. Bring your vehicle on the scheduled date</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      Service Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Most detailing services take 2-4 hours depending on the service and vehicle condition. 
                      Ceramic coating may require 6-8 hours.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Car className="h-4 w-4 text-accent" />
                      Pricing
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Pricing varies based on service type and vehicle size. We'll provide an accurate quote 
                      when we confirm your appointment.
                    </p>
                    <p className="text-sm font-medium text-primary">
                      Detailed price sheet available upon request
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Booking;