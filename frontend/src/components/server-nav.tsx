"use client";

import {
  ActivityIcon,
  Settings2Icon,
  SquareTerminal,
  UploadIcon,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import Dashboard from "@/components/dashboard";
import Console from "@/components/console";
import IconUpload from "@/components/server-icon-upload";

export function ServerNav() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { id: "Dashboard", label: "Dashboard", icon: ActivityIcon },
    { id: "Console", label: "Console", icon: SquareTerminal },
    { id: "Config Files", label: "Config Files", icon: Settings2Icon },
    { id: "Icon Upload", label: "Icon Upload", icon: UploadIcon },
    { id: "Whitelist", label: "Whitelist", icon: UserCheck },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-60 space-y-1 p-4 bg-background border rounded-lg">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 ${
              activeTab === id
                ? "bg-foreground text-background"
                : "hover:bg-foreground hover:text-background"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <div className="flex-1 px-4">
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Console" && <Console />}
        {activeTab === "Config Files" && <div>Manage Config Files here.</div>}
        {activeTab === "Icon Upload" && <IconUpload />}
        {activeTab === "Whitelist" && <div>Manage your server whitelist.</div>}
      </div>
    </div>
  );
}
