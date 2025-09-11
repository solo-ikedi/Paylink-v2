import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  Zap, 
  Shield, 
  ArrowRight, 
  ExternalLink,
  Copy,
  CheckCircle 
} from "lucide-react";
import Layout from "@/components/Layout";

const Docs = () => {
  const quickStartSteps = [
    {
      step: "1",
      title: "Create Account",
      description: "Sign up for your free PayLink account in under 2 minutes.",
      code: null
    },
    {
      step: "2", 
      title: "Generate Link",
      description: "Create your first payment link with our simple form.",
      code: `curl -X POST https://api.paylink.ng/v1/links \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "currency": "NGN",
    "description": "Product Purchase"
  }'`
    },
    {
      step: "3",
      title: "Share & Get Paid",
      description: "Share your link via email, SMS, or social media and start receiving payments.",
      code: null
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/links",
      description: "Create a new payment link"
    },
    {
      method: "GET",
      endpoint: "/v1/links/{id}",
      description: "Retrieve a payment link"
    },
    {
      method: "GET",
      endpoint: "/v1/payments",
      description: "List all payments"
    },
    {
      method: "POST",
      endpoint: "/v1/webhooks",
      description: "Configure webhook endpoints"
    }
  ];

  const guides = [
    {
      title: "Getting Started",
      description: "Learn the basics of creating and managing payment links",
      icon: Zap,
      time: "5 min read"
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: Code,
      time: "10 min read"
    },
    {
      title: "Webhooks Guide",
      description: "Set up real-time notifications for your applications",
      icon: BookOpen,
      time: "8 min read"
    },
    {
      title: "Security Best Practices",
      description: "Keep your integration secure and compliant",
      icon: Shield,
      time: "6 min read"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Documentation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              integrate PayLink
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Comprehensive guides, API references, and examples to get you started quickly.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Quick Start</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From signup to your first payment in under 5 minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  {step.code && (
                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white text-sm">Example Request</CardTitle>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-white"
                          onClick={() => navigator.clipboard.writeText(step.code || "")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      {/* API Reference */}
<section className="py-24 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Badge className="mb-4">API Reference</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        RESTful API endpoints
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Simple, predictable API that follows REST conventions.
      </p>
    </div>

    <div className="max-w-4xl mx-auto space-y-4">
      {apiEndpoints.map((endpoint, index) => (
        <Card 
          key={index} 
          className="bg-gradient-card border-0 shadow-card overflow-hidden"
        >
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                  {endpoint.method}
                </Badge>
                <code className="text-sm font-mono">{endpoint.endpoint}</code>
              </div>
              <span className="transition-transform group-open:rotate-90">
                ▶
              </span>
            </summary>
            <div className="px-4 pb-4 text-muted-foreground">
              <p className="mb-3">{endpoint.description}</p>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`curl -X ${endpoint.method} https://api.paylink.ng${endpoint.endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </details>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Guides */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Guides</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive documentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides to help you integrate and optimize PayLink.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <guide.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {guide.time}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {guide.description}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto font-medium">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Need help?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team is here to help you succeed with PayLink.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-muted-foreground mb-4">
                  Browse our extensive library of articles and tutorials.
                </p>
                <Button variant="outline">
                  Browse Articles
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get help from our technical support team.
                </p>
                <Button variant="outline">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer Forum</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community of developers and get answers.
                </p>
                <Button variant="outline">
                  Join Forum
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get your API keys and start integrating PayLink today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Get API Keys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              View Examples
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Docs;
