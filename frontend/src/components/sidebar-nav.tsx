import { cn } from "@/lib/utils";
import { AnchorIcon, HomeIcon, ServerIcon, UserIcon } from "lucide-react";
import Link from "next/link";

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      <Link
        href="#"
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
      <Link
        href="#"
        className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <UserIcon className="h-5 w-5" />
        <span>Profile</span>
      </Link>
    </nav>
  );
}
