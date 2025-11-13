import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-3 md:px-4 py-6 md:py-16 flex items-center justify-center">
        <Card className="w-full max-w-md glass-card border border-primary/20 md:border-2">
          <CardHeader className="space-y-1 px-4 md:px-6 pt-4 md:pt-6">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-xl md:text-2xl text-center font-display">Welcome to Stationery Parlour</CardTitle>
            <CardDescription className="text-center text-sm md:text-base">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-9 md:h-10">
                <TabsTrigger value="login" className="text-sm md:text-base">Login</TabsTrigger>
                <TabsTrigger value="register" className="text-sm md:text-base">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-3 md:space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="hello@example.com"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-sm md:text-base">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 h-10 md:h-11 text-sm md:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-3 md:space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-sm md:text-base">Full Name</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="hello@example.com"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-sm md:text-base">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm" className="text-sm md:text-base">Confirm Password</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="border-2 h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 h-10 md:h-11 text-sm md:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
