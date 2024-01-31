import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
const CustomToolTip = ({
  showToolTip,
  toolTipContent,
  children,
  defaultOpen,
  open,
  onOpenChange,
  disableHoverableContent,
  delayDuration = 0,
  toolTipPosition = "right",
  avoidCollisions,
  collisionPadding,
  hideWhenDetached,
  showToolContent,
  showArrow,
  sideOffset,
}: {
  showToolTip: boolean;
  toolTipContent: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: () => any;
  disableHoverableContent?: boolean;
  avoidCollisions?: boolean;
  showToolContent?: boolean;
  hideWhenDetached?: boolean;
  delayDuration?: number;
  collisionPadding?: number;
  sideOffset?: number;
  toolTipPosition?: any;
  showArrow: boolean;
}) => {
  if (showToolTip)
    return (
      <TooltipProvider delayDuration={delayDuration}>
        <Tooltip open={open} defaultOpen={false}>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent side={toolTipPosition} sideOffset={sideOffset}>
            <p>{toolTipContent}</p>
            {showArrow && (
              <TooltipArrow className="opacity-80 dark:fill-accent dark:text-accent" />
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  else {
    return children;
  }
};

export default CustomToolTip;
