import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your privacy is
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              our priority
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may collect personal details such as your name, email address,
                and payment information when you use our platform.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>How We Use Your Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your data is used only to provide and improve our payment services.
                We do not sell your personal information to third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
