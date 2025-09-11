import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HeadphonesIcon,
  Users
} from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@paylink.ng",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Speak with our sales team",
      contact: "+234 (0) 123 456 7890",
      available: "Mon-Fri, 9AM-6PM WAT"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on dashboard",
      available: "Mon-Fri, 9AM-6PM WAT"
    }
  ];

  const offices = [
    {
      city: "Lagos",
      address: "123 Victoria Island, Lagos, Nigeria",
      phone: "+234 (0) 123 456 7890",
      email: "lagos@paylink.ng"
    },
    {
      city: "Abuja",
      address: "456 Central Business District, Abuja, Nigeria", 
      phone: "+234 (0) 123 456 7891",
      email: "abuja@paylink.ng"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in touch with
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              our team
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            We're here to help you succeed. Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{method.available}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales Question</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="bg-gradient-card border-0 shadow-card">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{office.city}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <p className="text-sm">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <p className="text-sm">{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <p className="text-sm">{office.email}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Additional Support */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HeadphonesIcon className="h-5 w-5 text-primary" />
                    <span>Need Immediate Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For urgent technical issues or account problems, contact our priority support line.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Priority Support
                  </Button>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Join Our Community</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Connect with other PayLink users, share experiences, and get community support.
                  </p>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Discord Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;