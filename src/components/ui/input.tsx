import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon = "", lable = null, ...props }, ref) => {
    return (
      <div>
        <label >{lable}</label>
        <div className="items-stretch bg-black bg-opacity-10 flex gap-2 px-4 py-5 my-2 rounded-md max-md:flex-wrap max-md:pr-5">
          {icon}
          <input
            type={type}
            className={cn(
              "text-stone-500 text-start text-sm leading-4 grow whitespace-nowrap my-auto bg-transparent outline-none",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
