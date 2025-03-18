import { type ComponentProps, forwardRef } from "react";
import { cn } from "helpers/style";

interface IProps extends ComponentProps<"input"> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(className, { "border-[red]": error })}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
