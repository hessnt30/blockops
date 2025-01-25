"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  LucideIcon,
  Map,
  PieChart,
  Server,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/auth-context";
import { useLoading } from "@/context/loading-context";
import { useEffect, useState } from "react";
import { ServersResponse } from "@/types";
import { getUserOwnedServers } from "@/firebase/api/user-server-actions";
import LoadingOverlay from "@/components/ui/loading-spinner-overlay";
import { ThemeSwitcher } from "./theme-switcher";

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

interface NavUserObject {
  user: {
    name: string | undefined;
    email: string | undefined;
    avatar: string | undefined;
  };
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  const { isLoading, setIsLoading } = useLoading();

  const [servers, setServers] = useState<ServersResponse[] | null>(null);
  const userHolder = {
    user: {
      name: "unknown",
      email: "unknown@example.com",
      avatar: "unknown",
    },
  };
  const [userObject, setUserObject] = useState<NavUserObject>(userHolder);

  interface NavMainItem {
    title: string;
    url: string;
    icon: LucideIcon;
    items: { title: string; url: string }[]; // Adjust based on your actual data
  }

  interface NavMain {
    navMain: NavMainItem[];
  }

  const [navMainWithServers, setNavMainWithServers] = useState<NavMain | null>(
    null
  );

  useEffect(() => {
    if (!user) {
      console.warn("User is undefined or null.");
      return;
    }

    console.log("Full user object:", user); // Logs the entire user object

    setIsLoading(true);

    const fetchServers = async () => {
      try {
        const userServers = await getUserOwnedServers(user.uid); // Await the Promise
        setServers(userServers); // Set the servers after the Promise resolves
      } catch (error) {
        console.error("Error fetching servers:", error);
      }
    };

    const setNavUserObject = () => {
      const navUserObj: NavUserObject = {
        user: {
          name: user.displayName || "Unknown",
          email: user.email || "Unknown",
          avatar: user.photoURL || "https://www.gravatar.com/avatar?d=mp",
        },
      };

      // console.log("NavUserObject being set:", navUserObj);

      setUserObject(navUserObj);
    };

    setNavUserObject();
    fetchServers();

    setIsLoading(false);

    console.log("navMain", navMainWithServers?.navMain);
  }, [user]);

  useEffect(() => {
    setIsLoading(true);
    // Ensure navMainWithServers is updated after servers are set
    if (servers) {
      const navMainWithServersObject = [
        {
          title: "Servers",
          url: "#",
          icon: Server,
          isActive: true,
          items:
            servers?.map((server) => ({
              title: server.name,
              url: `/servers/${server.uuid}`, // Replace with the actual URL for the server
            })) || [], // Default to an empty array if servers is null or undefined
        },
        ...data.navMain, // Other navigation items
      ];

      setNavMainWithServers({ navMain: navMainWithServersObject }); // Wrap in 'navMain'
    }

    setIsLoading(false);
  }, [servers]); // This effect only runs when 'servers' change

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* Ensure navMainWithServers is not null by defaulting to an empty array */}
        {!isLoading ? (
          <NavMain items={navMainWithServers?.navMain || []} />
        ) : (
          <LoadingOverlay />
        )}
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwitcher />
        <SidebarFooter>
          {!isLoading ? <NavUser user={userObject.user} /> : <LoadingOverlay />}
        </SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
