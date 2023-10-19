/* eslint-disable react/prop-types */
import * as React from "react";
import cn from "classnames";

export type ContainerProps = React.ComponentProps<"div">;

export const containerStyles = "mx-8 md:mx-20 lg:mx-28 xl:mx-[122px]";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={cn(containerStyles, className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
