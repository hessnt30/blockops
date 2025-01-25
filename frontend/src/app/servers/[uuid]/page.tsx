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
            <ServerNav />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
