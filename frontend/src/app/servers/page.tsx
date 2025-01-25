import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProtectedRoute from "@/components/protected-route";

export default function Servers() {
  return (
    <ProtectedRoute>
      <div className="flex-1">
        <div className="p-6 space-y-6">
          <Card className="p-6 text-lg">Get Started</Card>
          <div className="flex-1 space-y-6">
            <Card>
              <CardHeader>Add a Server</CardHeader>
              <CardContent className="space-y-6"></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
