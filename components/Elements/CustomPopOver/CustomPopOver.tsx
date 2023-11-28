import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CustomPopOver({
  open,
  children,
  popOverContent,
  defaultOpen,
  onOpenChange,
}: {
  open?: boolean | undefined;
  children: React.ReactNode;
  popOverContent: any;
  defaultOpen: boolean;
  onOpenChange?: () => any;
}) {
  return (
    <Popover open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className=" PopoverContent w-[7rem] p-1 gap-1 flex flex-col"
        sideOffset={5}>
        {popOverContent}
      </PopoverContent>
    </Popover>
  );
}
