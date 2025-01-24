"use client";

import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import { AnchorIcon, HomeIcon, ServerIcon, UserIcon } from "lucide-react";
import Link from "next/link";

interface SidebarNavProps {
  className?: string;
}

interface Server {
  id: string;
  name: string;
  uuid: string;
}

const servers: Server[] = [
  {
    id: "1",
    name: "minecraft 2025",
    uuid: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    id: "2",
    name: "hypixel",
    uuid: "987e6543-e21a-34c5-b678-526715283111",
  },
];

export function SidebarNav({ className }: SidebarNavProps) {
  const { user } = useAuth();
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
      {servers.map((server) => (
        <Link
          key={server.id}
          href={`/servers/${server.uuid}`}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-white text-zinc-400 ml-4 "
        >
          <span className="truncate">{server.name}</span>
        </Link>
      ))}
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
