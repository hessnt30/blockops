"use client";

import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import { AnchorIcon, HomeIcon, ServerIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getUserOwnedServers } from "@/firebase/api/user-server-actions";
import { useLoading } from "@/context/loading-context";
import LoadingOverlay from "./ui/loading-spinner-overlay";
import { ServersResponse } from "@/types";

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const { user } = useAuth();
  const { isLoading, setIsLoading } = useLoading();

  const [servers, setServers] = useState<ServersResponse[] | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <AnchorIcon className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <HomeIcon className="h-5 w-5" />
        <span>Home</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-white bg-zinc-800"
      >
        <ServerIcon className="h-5 w-5" />
        <span>Servers</span>
      </Link>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        servers?.map((server) => (
          <Link
            key={server.id}
            href={`/servers/${server.uuid}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white text-zinc-400 ml-4 "
          >
            <span className="truncate">{server.name}</span>
          </Link>
        ))
      )}
      <Link
        href="#"
        className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <UserIcon className="h-5 w-5" />
        <span>{user ? user.displayName : "Profile"}</span>
      </Link>
    </nav>
  );
}
