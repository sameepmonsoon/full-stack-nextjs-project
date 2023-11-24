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
  toolTipPosition?: any;
}) => {
  if (showToolTip)
    return (
      <TooltipProvider delayDuration={delayDuration}>
        <Tooltip open={open}>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent side={toolTipPosition}>
            <p>{toolTipContent}</p>
            <TooltipArrow className="opacity-80" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  else {
    return children;
  }
};

export default CustomToolTip;
