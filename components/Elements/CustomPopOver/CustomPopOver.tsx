import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CustomPopOver({
  children,
  popOverContent,
}: {
  children: React.ReactNode;
  popOverContent: any;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className=" PopoverContent w-[7rem] p-1 gap-1 flex flex-col" sideOffset={5}>
        {popOverContent}
      </PopoverContent>
    </Popover>
  );
}
