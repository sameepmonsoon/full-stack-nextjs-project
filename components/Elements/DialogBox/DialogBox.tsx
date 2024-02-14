import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogBox({
  trigger,
  dialogTitle,
  dialogDescription,
  children,
  footer,
  defaultOpen,
  onOpenChange,
}: {
  dialogDescription: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  dialogTitle: string;
  defaultOpen?: boolean;
  onOpenChange?: () => {};
}) {
  return (
    <Dialog open={defaultOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md dark:bg-darkModeBg opacity-100 dark:text-white border-accent/10 rounded-full shadow-sm">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <>{children}</>
        <DialogFooter className="sm:justify-start">
          {footer}
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary" className="rounded-md">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
