"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Home, Server } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useLoading } from "@/context/loading-context";
import { useEffect, useState } from "react";
import { ServersResponse } from "@/types";
import { getUserOwnedServers } from "@/firebase/api/user-server-actions";
import LoadingOverlay from "@/components/ui/loading-spinner-overlay";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export function AppSidebar() {
  const { user } = useAuth();
  const { isLoading, setIsLoading } = useLoading();

  const [servers, setServers] = useState<ServersResponse[] | null>(null);

  useEffect(() => {
    console.log("Function called");
    if (!user) return;

    setIsLoading(true);

    const fetchServers = async () => {
      try {
        const userServers = await getUserOwnedServers(user.uid); // Await the Promise
        setServers(userServers); // Set the servers after the Promise resolves
      } catch (error) {
        console.error("Error fetching servers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServers();
  }, [user]);
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <Link href={"/"}>
              <Home />
              <span>Home</span>
            </Link>
          </SidebarMenuButton>

          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild>
                  <div className="cursor-pointer">
                    <Server />
                    <span>Servers</span>
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {isLoading ? (
                    <LoadingOverlay />
                  ) : (
                    servers?.map((server) => (
                      <Link
                        key={server.id}
                        href={`/servers/${server.uuid}`}
                        className="text-sm"
                      >
                        <SidebarMenuSubItem>
                          <span className="truncate">{server.name}</span>
                        </SidebarMenuSubItem>
                      </Link>
                    ))
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <SidebarMenuButton asChild>
            <ThemeSwitcher />
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="dark" />
    </Sidebar>
  );
}
