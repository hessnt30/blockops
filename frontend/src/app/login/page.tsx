import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Login from "@/components/google-login";

function LoginPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 justify-center items-center text-white max-w-7xl">
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader className="text-white">
          <CardTitle>Sign In to BlockOps</CardTitle>
        </CardHeader>
        <CardContent className="text-white max-w-md">
          BlockOps requires you to sign in to save your information regarding
          your Minecraft servers.
        </CardContent>
        <CardFooter className="flex">
          <Login />
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
