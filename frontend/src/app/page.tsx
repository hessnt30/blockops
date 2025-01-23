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
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-purple-500">Minecraft Server</span>
              <span className="block">Management Made Simple</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Control your Minecraft servers with ease. Monitor performance,
              manage players, and configure your servers from anywhere, anytime.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href={"/dashboard"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-br from-purple-600 to-pink-600 hover:bg-purple-700"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-800 bg-zinc-950"
              >
                Try for Free
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl">
              <Image
                src="https://placehold.co/1920x1080.png"
                alt="Dashboard preview"
                width={1920}
                height={1080}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage your servers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Powerful features designed to give you complete control over your
            Minecraft servers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Gauge className="h-8 w-8 text-purple-500" />
              <p className="text-white">Real-time Monitoring</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Monitor CPU, RAM usage, and player count in real-time with
              detailed graphs and metrics.
            </p>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Users className="h-8 w-8 text-purple-500" />
              <p className="text-white">Player Mangagement</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Easily manage player access, whitelist, and bans with just a few
              clicks.
            </p>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Server className="h-8 w-8 text-purple-500" />
              <p className="text-white">Server Controls</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Start, stop, and restart your servers remotely from any device,
              anywhere.
            </p>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Shield className="h-8 w-8 text-purple-500" />
              <p className="text-white">Security</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Advanced security features to protect your servers from
              unauthorized access.
            </p>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Globe className="h-8 w-8 text-purple-500" />
              <p className="text-white">Global Access</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Access your server dashboard from anywhere in the world with our
              web interface.
            </p>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <CardTitle className="flex flex-row items-center gap-4 text-lg">
              <Crown className="h-8 w-8 text-purple-500" />
              <p className="text-white">Premium Features</p>
            </CardTitle>
            <p className="mt-2 text-zinc-400">
              Advanced features like automated backups, custom scripts, and
              priority support.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="border-zinc-800 bg-gradient-to-br from-purple-600 to-pink-600 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl">
              Ready to take control of your Minecraft servers?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-200">
              Join thousands of server administrators who trust our platform for
              their Minecraft server management needs.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-zinc-950 hover:bg-zinc-600">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-zinc-200 border-zinc-200 bg-transparent"
              >
                Try for Free
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Server className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold">BlockOps</span>
              </div>
              <nav className="flex gap-8 text-sm text-zinc-400">
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

            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} BlockOps. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
