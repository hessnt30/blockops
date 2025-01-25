import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { PlayerList } from "@/components/player-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

export default function Console() {
  return (
    <div className="flex flex-1 space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Console</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ScrollArea className="h-[400px] rounded-lg border flex flex-col p-4">
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
            <code>
              {
                "[23:12:29 INFO]: UUID of player slappi_pappi is 04f5dc03-987c-4eac-9078-928593b918ea"
              }
            </code>
            <code>{"[23:12:29 INFO]: slappi_pappi joined the game"}</code>
            <code>
              {
                "[23:12:29 INFO]: slappi_pappi[/72.66.15.225:59479] logged in with entity id 58086 at ([world]-391.73436483533186, 71.0, -158.26124594859837)"
              }
            </code>
          </ScrollArea>
          <div className="flex w-full items-center space-x-2">
            <Input type="email" placeholder="Type Commands Here..." />
            <Button type="submit">Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
