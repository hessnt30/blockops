import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { PlayerList } from "@/components/player-list";
import { ServerHeader } from "@/components/server-header";
import { ServerNav } from "@/components/server-nav";
import { SidebarNav } from "@/components/sidebar-nav";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/protected-route";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Dashboard() {
  // const router = useRouter();
  // const { uuid } = router.query;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="flex-1">
          <div className="p-6 space-y-6">
            <ServerHeader />
            <div className="flex gap-6">
              <ServerNav />
              <div className="flex-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <div className="rounded-lg border border bg-input px-3 py-2">
                          minecraft 2025
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Max Players
                        </label>
                        <div className="rounded-lg border bg-input px-3 py-2">
                          20
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Server Address
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 rounded-lg border bg-input px-3 py-2">
                            199.60.101.182:25631
                          </div>
                          <Button size="icon" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <CardTitle className="">Connected Players</CardTitle>
                      <PlayerList />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
