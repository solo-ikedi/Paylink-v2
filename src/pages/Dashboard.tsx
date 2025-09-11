import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, LogOut, BarChart3, Users, Wallet } from "lucide-react";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/signin");
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [navigate]);

  // Sign Out
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <Layout>
      <section className="py-16 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold">Welcome back 👋</h1>
              <p className="text-muted-foreground">
                {user?.email ? user.email : "Loading..."}
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  <span>Total Balance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">₦120,000</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span>Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">58</p>
                <p className="text-sm text-muted-foreground">Successful</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Customers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">34</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            <Card className="bg-white shadow-sm border">
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">Pro Plan Subscription</p>
                  <p className="text-sm text-muted-foreground">#ref_123456</p>
                </div>
                <Badge variant="outline" className="text-green-600">
                  Success
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border">
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">Starter Plan</p>
                  <p className="text-sm text-muted-foreground">#ref_789012</p>
                </div>
                <Badge variant="outline" className="text-green-600">
                  Success
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border">
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">Enterprise Plan</p>
                  <p className="text-sm text-muted-foreground">#ref_345678</p>
                </div>
                <Badge variant="outline" className="text-red-600">
                  Failed
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
