"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/config";
import { Button } from "@/components/ui/button";
import { CatIcon } from "lucide-react";

function Login() {
  const handleLogin = async () => {
    try {
      // Sign in using a popup.
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      size={"sm"}
      variant={"outline"}
      className="bg-zinc-900/50 border-zinc-800 text-white"
      onClick={handleLogin}
    >
      <CatIcon />
      Sign in with Google
    </Button>
  );
}

export default Login;
