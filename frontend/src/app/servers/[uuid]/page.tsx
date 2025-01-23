import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { PlayerList } from "@/components/player-list";
import { ServerHeader } from "@/components/server-header";
import { ServerNav } from "@/components/server-nav";
import { SidebarNav } from "@/components/sidebar-nav";
import { useRouter } from "next/router";

export default function Dashboard() {
  // const router = useRouter();
  // const { uuid } = router.query;

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="flex">
        <div className="fixed inset-y-0 w-[200px] border-r border-zinc-800 bg-zinc-900/50 p-4">
          <SidebarNav />
        </div>
        <main className="flex-1 pl-[200px]">
          <div className="p-6 space-y-6">
            <ServerHeader />
            <div className="flex gap-6">
              <ServerNav />
              <div className="flex-1 space-y-6">
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-400">Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">
                          Name
                        </label>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-white">
                          minecraft 2025
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">
                          Max Players
                        </label>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-white">
                          20
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">
                          Server Address
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-white">
                            199.60.101.182:25631
                          </div>
                          <Button size="icon" variant="ghost">
                            <Copy className="text-white h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <CardTitle className="text-zinc-400">
                        Connected Players
                      </CardTitle>
                      <PlayerList />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
