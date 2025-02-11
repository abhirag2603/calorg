"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface CopyLinkMenuItemProps {
  meetingUrl: string;
}

export function CopyLinkMenuItem({ meetingUrl }: CopyLinkMenuItemProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meetingUrl);
      toast.success("URL copied to clipboard");
    } catch (err) {
      console.error("Could not copy text: ", err);
      toast.error("Failed to copy URL");
    }
  };

  return (

    <DropdownMenuItem onSelect={handleCopy} className="flex items-center">
      <Link2 className="mr-2 size-4 shrink-0" />
      <span className="flex-1">Copy</span>
    </DropdownMenuItem>
  );
}
