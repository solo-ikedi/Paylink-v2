import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Zap, Crown, Building } from "lucide-react";
import Layout from "@/components/Layout";
import { handleCheckout } from "@/lib/checkout";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "₦0",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        { text: "5 payment links", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "Standard checkout", included: true },
        { text: "Mobile payments", included: true },
        { text: "Custom branding", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
        { text: "Webhooks", included: false }
      ],
      cta: "Get Started",
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      icon: Crown,
      price: "₦3,500",
      period: "/month",
      description: "For growing businesses and teams",
      features: [
        { text: "Unlimited payment links", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Webhooks", included: true },
        { text: "QR code generation", included: true },
        { text: "Recurring payments", included: true },
        { text: "Export data", included: true },
        { text: "Team collaboration", included: false }
      ],
      cta: "Start Free Trial",
      popular: true,
      buttonVariant: "cta" as const
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "₦12,000",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom integrations", included: true },
        { text: "SLA guarantee", included: true },
        { text: "Team collaboration", included: true },
        { text: "Advanced reporting", included: true },
        { text: "White-label solution", included: true },
        { text: "Phone support", included: true },
        { text: "Custom contracts", included: true },
        { text: "Volume discounts", included: true }
      ],
      cta: "Contact Sales",
      popular: false,
      buttonVariant: "premium" as const
    }
  ];

  const faqs = [
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You can start using PayLink immediately after signing up."
    },
    {
      question: "What are the transaction fees?",
      answer: "We charge a competitive 1.4% + ₦50 per successful transaction for all plans. No hidden fees."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. Contact support for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via bank transfers, cards, USSD, and mobile money from all major Nigerian financial institutions."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! The Professional plan comes with a 14-day free trial. No credit card required to start."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, transparent
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              pricing for everyone
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg"
                    : "bg-white shadow-sm hover:shadow-md"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-white text-primary px-4 py-1 font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                      plan.popular ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <plan.icon
                      className={`h-8 w-8 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span
                      className={`text-base font-normal ${
                        plan.popular ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription
                    className={plan.popular ? "text-white/80" : "text-muted-foreground"}
                  >
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    onClick={() =>
                      handleCheckout(
                        plan.name,
                        parseInt(plan.price.replace("₦", "").replace(",", ""))
                      )
                    }
                    variant={plan.popular ? "cta" : plan.buttonVariant}
                    className={`w-full ${
                      plan.popular ? "bg-white text-primary hover:bg-white/90" : ""
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check
                            className={`h-5 w-5 ${
                              plan.popular ? "text-white" : "text-primary"
                            }`}
                          />
                        ) : null}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? plan.popular
                                ? "text-white"
                                : "text-foreground"
                              : "text-muted-foreground line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
