import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Terms & Conditions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Understand our
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              terms of service
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please review the rules and guidelines for using PayLink.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By using PayLink, you agree to these terms and conditions. If you
                do not agree, please discontinue use of the service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                PayLink is provided “as-is” without warranties. We are not liable
                for losses due to service interruptions or third-party providers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
