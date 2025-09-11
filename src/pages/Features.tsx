import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  QrCode, 
  Webhook, 
  BarChart3, 
  Shield, 
  Globe, 
  Smartphone, 
  Zap, 
  Users,
  Lock,
  RefreshCw,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";

const Features = () => {
  const mainFeatures = [
    {
      icon: CreditCard,
      title: "One-time & Recurring Payments",
      description: "Accept both single payments and subscription payments with ease. Manage billing cycles, memberships, and automated retries."
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description: "Generate QR codes for your links for in-person or mobile payments. Fast, contactless, and brandable."
    },
    {
      icon: Webhook,
      title: "API & Webhooks",
      description: "Real-time payment notifications and an easy-to-use API to connect with your tools."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with clear dashboards, revenue forecasting, and exportable reports."
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: "Bank-level Security", description: "PCI DSS compliant with 256-bit SSL encryption." },
    { icon: Globe, title: "Multi-channel", description: "Accept cards, transfers, USSD & mobile money." },
    { icon: Smartphone, title: "Mobile Optimized", description: "Works beautifully across all devices." },
    { icon: Zap, title: "Instant Setup", description: "Get started in under 2 minutes." },
    { icon: Users, title: "Customer Management", description: "Track your customers with built-in CRM tools." },
    { icon: Lock, title: "Fraud Protection", description: "Smart fraud detection & prevention built-in." },
    { icon: RefreshCw, title: "Auto-retry", description: "Failed payments get auto-retried for higher success." },
    { icon: CheckCircle, title: "Success Optimization", description: "Intelligent routing to maximize success rates." }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful features for
            <span className="block bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              modern payments
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Everything you need to accept, manage, and optimize payments in one simple platform.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {mainFeatures.map((f, i) => (
            <Card 
              key={i} 
              className="p-8 border border-border hover:shadow-xl hover:border-primary/40 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 text-muted-foreground">
                {f.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">And so much more</h2>
            <p className="text-lg text-muted-foreground">
              Tools designed to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((f, i) => (
              <Card 
                key={i} 
                className="p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2 text-sm text-muted-foreground">
                  {f.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to experience these features?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using PayLink.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
