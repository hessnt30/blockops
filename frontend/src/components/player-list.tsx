import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ban, UserMinus } from "lucide-react";
import Image from "next/image";

interface Player {
  id: string;
  name: string;
  uuid: string;
}

const players: Player[] = [
  {
    id: "1",
    name: "hittermcgee",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "2",
    name: "astinkygiraffe4",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "3",
    name: "pourpee",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "4",
    name: "slappi_pappi",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "5",
    name: "__baked_bean__",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "6",
    name: "hittermcgee",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "7",
    name: "astinkygiraffe4",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "8",
    name: "pourpee",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "9",
    name: "slappi_pappi",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
  {
    id: "10",
    name: "__baked_bean__",
    uuid: "76313f05-b128-400c-8534-200f703692f5",
  },
];

export function PlayerList() {
  return (
    <ScrollArea className="h-[400px] rounded-lg border border-zinc-800 bg-zinc-900/50">
      <div className="space-y-4 p-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between gap-4 rounded-lg bg-zinc-800/50 p-3"
          >
            <div className="flex items-center gap-3">
              <Image
                src={`https://minotar.net/cube/${player.name}/100.png`}
                alt={`${player.name}'s avatar`}
                width={32}
                height={32}
                // className="rounded bg-gradient-to-br from-purple-600 to-pink-600"
              />
              <div>
                <div className="font-medium text-white">{player.name}</div>
                <div className="text-xs text-zinc-400">{player.uuid}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-yellow-500 hover:text-yellow-400"
              >
                <UserMinus className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-red-500 hover:text-red-400"
              >
                <Ban className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
