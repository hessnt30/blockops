"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, StopCircle, RotateCw, UsersIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ServerHeader() {
  const [usage, setUsage] = useState(0);
  const [RAMUsage, setRAMUsage] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const generateRandomValue = () => {
      let val = Math.random();
      let val2 = Math.random();

      val *= 100;
      val2 *= 100;

      setUsage(parseInt(val.toFixed(1)));
      setRAMUsage(parseInt(val2.toFixed(1)));
    };
    const intervalId = setInterval(generateRandomValue, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="flex items-center gap-4 p-4 bg-zinc-900/50 border-zinc-900 justify-between">
      {/* Server Info */}
      <div className="flex flex-row gap-4 items-center">
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
                <div className="border rounded-full px-2 py-1 bg-green-600 border-green-600">
                  <span className="text-white">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start, stop, restart buttons */}
      <div className="flex items-center gap-2">
        <Button
          size="lg"
          variant="default"
          className="bg-gradient-to-br from-green-600 to-green-900"
          disabled={isOnline}
        >
          <PlayCircle height={16} width={16} />
        </Button>
        <Button
          size="lg"
          variant="default"
          className="bg-gradient-to-br from-red-600 to-red-900"
          disabled={!isOnline}
        >
          <StopCircle className="h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="default"
          className="bg-gradient-to-br from-blue-600 to-blue-900"
          disabled={!isOnline}
        >
          <RotateCw className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4 min-w-[400px]">
        <div className="space-y-1 flex-1">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">CPU Usage</span>
            <span className="text-zinc-400">{usage}%</span>
          </div>
          <Progress value={usage} className="h-2 bg-zinc-800" />
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">RAM Usage</span>
            <span className="text-zinc-400">{RAMUsage}%</span>
          </div>
          <Progress value={RAMUsage} className="h-2 bg-zinc-800" />
        </div>
      </div>
    </Card>
  );
}
