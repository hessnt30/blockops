import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, StopCircle, RotateCw, UsersIcon } from "lucide-react";

export function ServerHeader() {
  return (
    <Card className="flex items-center gap-4 p-4 bg-zinc-900/50 border-zinc-900">
      <div className="rounded bg-gradient-to-br from-purple-600 to-pink-600 w-24 h-24" />
      <div className="flex">
        <div className="flex gap-4 flex-col">
          <h1 className="text-xl font-semibold text-white">minecraft 2025</h1>
          <div className="flex flex-row">
            <div className="flex items-center gap-2 text-sm">
              <UsersIcon className="text-zinc-400" />
              <span className="text-zinc-400">5/20</span>
            </div>
            <div className="flex items-center ml-4 gap-2 text-sm">
              <div className="border rounded-full px-2 py-1 bg-green-500 border-green-500">
                <span className="text-white">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="default">
            <PlayCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="default">
            <StopCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="default">
            <RotateCw className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4 min-w-[200px]">
          <div className="space-y-1 flex-1">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">CPU Usage</span>
              <span className="text-zinc-400">26%</span>
            </div>
            <Progress
              value={26}
              className="h-2 bg-zinc-800"
              // indicatorClassName="bg-purple-600"
            />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">RAM Usage</span>
              <span className="text-zinc-400">71%</span>
            </div>
            <Progress
              value={71}
              className="h-2 bg-zinc-800"
              // indicatorClassName="bg-purple-600"
              
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
