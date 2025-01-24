import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SidebarNav } from "@/components/sidebar-nav";
import ProtectedRoute from "@/components/protected-route";

export default function Servers() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zinc-950">
        <div className="flex">
          <div className="fixed inset-y-0 w-[200px] border-r border-zinc-800 bg-zinc-900/50 p-4">
            <SidebarNav />
          </div>
          <main className="flex-1 pl-[200px]">
            <div className="p-6 space-y-6">
              <Card className="bg-zinc-900/50 border-zinc-800 text-white p-6 text-lg">
                Get Started
              </Card>
              <div className="flex-1 space-y-6">
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader className="text-white">Add a Server</CardHeader>
                  <CardContent className="space-y-6"></CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
