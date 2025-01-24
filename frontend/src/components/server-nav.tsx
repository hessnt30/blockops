import {
  ActivityIcon,
  Settings2Icon,
  SquareTerminal,
  UploadIcon,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export function ServerNav() {
  return (
    <nav className="w-60 space-y-1 p-4 bg-background border rounded-lg">
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-foreground hover:text-background"
      >
        <ActivityIcon className="h-5 w-5" />
        <span>Dashboard</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-foreground hover:text-background"
      >
        <SquareTerminal className="h-5 w-5" />
        <span>Console</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-foreground hover:text-background"
      >
        <Settings2Icon className="h-5 w-5" />
        <span>Config Files</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-foreground hover:text-background"
      >
        <UploadIcon className="h-5 w-5" />
        <span>Icon Upload</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-foreground hover:text-background"
      >
        <UserCheck className="h-5 w-5" />
        <span>Whitelist</span>
      </Link>
    </nav>
  );
}
