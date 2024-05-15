import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-36 w-full rounded-md border-2 border-green-400 bg-white text-black px-6 py-2 text-base",
          "placeholder:text-alabaster-700",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400",
          "focus:shadow",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
