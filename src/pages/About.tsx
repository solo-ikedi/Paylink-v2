import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn more about
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              PayLink
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Discover who we are, what we do, and why we built PayLink.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Empowering businesses in Nigeria to accept payments easily.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                At PayLink, we believe payments should be seamless, fast, and secure.
                Our mission is to simplify transactions for freelancers, businesses,
                and organizations by making it easy to share payment links and
                get paid instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription>
                Built for modern businesses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We started PayLink after seeing how complicated and slow payments
                were for small businesses. Today, we provide an easy-to-use
                platform trusted by freelancers, startups, and enterprises alike.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
