import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProtectedRoute from "@/components/protected-route";

export default function Servers() {
  return (
    <ProtectedRoute>
      <div className="flex-1">
        <div className="p-6 space-y-6">
          <Card className="bg-zinc-900/50 border-zinc-800 text-white p-6 text-lg">
            Get Started
          </Card>
          <div className="flex-1 space-y-6">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="text-white">Add a Server</CardHeader>
              <CardContent className="space-y-6"></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
