import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, CreditCard, QrCode, Webhook, BarChart3, Shield, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import { handleCheckout } from "@/lib/checkout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 text-left">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-none">
              🚀 Now supporting all Nigerian banks
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Get Paid in{" "}
              <span className="text-indigo-600">Seconds</span>, Not Days
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
              Create secure payment links instantly. Accept payments from anywhere
              in Nigeria with our simple, powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-6"
                onClick={() => handleCheckout("Starter", 0)}
              >
                Generate a Link
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => handleCheckout("Demo", 0)}
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src={heroImage}
              alt="PayLink app preview"
              className="w-80 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
