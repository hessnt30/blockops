"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      router.push("/login");
    } else {
      console.log(user);
    }
  }, [user, router]);

  // Render children only if the user is authenticated
  if (!user) {
    return null; // You can add a loading spinner here if needed
  }

  return <>{children}</>;
}
