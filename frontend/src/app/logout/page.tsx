"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Login from "@/components/google-login";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { CatIcon } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LogoutPage() {
  const { logOut, user } = useAuth(); // Get the user and logIn from the context
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Redirect to "/" when a user is logged out
    if (!user) {
      router.push("/");
    }
  }, [user, router]); // Run the effect when `user` or `router` changes

  return (
    <div className="flex min-h-screen bg-zinc-950 justify-center items-center text-white max-w-7xl">
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader className="text-white">
          <CardTitle>Logout of BlockOps</CardTitle>
        </CardHeader>
        <CardContent className="text-white max-w-md">
          You will need to sign back in to see your servers.
        </CardContent>
        <CardFooter className="flex">
          <Button
            size={"sm"}
            variant={"outline"}
            className="bg-zinc-900/50 border-zinc-800 text-white"
            onClick={logOut}
          >
            <CatIcon />
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LogoutPage;
