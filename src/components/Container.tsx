import { forwardRef, type ReactNode } from "react";
import { cn } from "helpers/style.ts";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full px-5 md:px-[100px] mac:px-[440px]", className)}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;

// import React, { type FC } from "react";
// import { cn } from "helpers/style.ts";

// interface ContainerProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// const Container: FC<ContainerProps> = ({ className, children }) => {
//   return (
//     <div className={cn("w-full px-5 md:px-[100px] mac:px-[440px]", className)}>
//       {children}
//     </div>
//   );
// };

// export default Container;
