import {
  ActivityIcon,
  MonitorIcon,
  Settings2Icon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export function ServerNav() {
  return (
    <nav className="w-60 space-y-1 p-4 bg-zinc-900/50 rounded-lg">
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-white bg-zinc-800"
      >
        <ActivityIcon className="h-5 w-5" />
        <span>Dashboard</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <MonitorIcon className="h-5 w-5" />
        <span>Console</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <Settings2Icon className="h-5 w-5" />
        <span>Config Files</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <UploadIcon className="h-5 w-5" />
        <span>Icon Upload</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
      >
        <UsersIcon className="h-5 w-5" />
        <span>Whitelist</span>
      </Link>
    </nav>
  );
}
