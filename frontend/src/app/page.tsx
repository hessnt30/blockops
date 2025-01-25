import Login from "@/components/google-login";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Crown,
  Gauge,
  Globe,
  Server,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-purple-500">Minecraft Server</span>
              <span className="block">Management Made Simple</span>
            </h1>
            <span className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Control your Minecraft servers with ease. Monitor performance,
              manage players, and configure your servers from anywhere, anytime.
            </span>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href={"/servers"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                >
                  Get Started
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button size="lg" variant="outline">
                  Try for Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Card className="relative w-full max-w-4xl rounded-xl p-2 ">
              <Image
                src="https://placehold.co/1920x1080.png"
                alt="Dashboard preview"
                width={1920}
                height={1080}
                className="rounded-lg"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage your servers
          </h2>
          <span className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Powerful features designed to give you complete control over your
            Minecraft servers.
          </span>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Gauge className="h-8 w-8 text-purple-500" />
              <span>Real-time Monitoring</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Monitor CPU, RAM usage, and player count in real-time with
              detailed graphs and metrics.
            </span>
          </Card>
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Users className="h-8 w-8 text-purple-500" />
              <span>Player Mangagement</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Easily manage player access, whitelist, and bans with just a few
              clicks.
            </span>
          </Card>
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Server className="h-8 w-8 text-purple-500" />
              <span>Server Controls</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Start, stop, and restart your servers remotely from any device,
              anywhere.
            </span>
          </Card>
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Shield className="h-8 w-8 text-purple-500" />
              <span>Security</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Advanced security features to protect your servers from
              unauthorized access.
            </span>
          </Card>
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Globe className="h-8 w-8 text-purple-500" />
              <span>Global Access</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Access your server dashboard from anywhere in the world with our
              web interface.
            </span>
          </Card>
          <Card className="bg-sidebar p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Crown className="h-8 w-8 text-purple-500" />
              <span>Premium Features</span>
            </CardTitle>
            <span className="mt-2 text-muted-foreground">
              Advanced features like automated backups, custom scripts, and
              priority support.
            </span>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl">
              Ready to take control of your Minecraft servers?
            </h2>
            <span className="mx-auto mt-4 max-w-2xl text-white">
              Join thousands of server administrators who trust our platform for
              their Minecraft server management needs.
            </span>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">
                Try for Free
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent bg-sidebar">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Server className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold">BlockOps</span>
              </div>
              <nav className="flex gap-8 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="text-sm text-muted-foreground">
              © {2025} BlockOps. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
