import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { mergeNames } from "@/lib/utils";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={mergeNames(
        [
          "relative",
          "flex",
          "h-8",
          "w-8",
          "shrink-0",
          "overflow-hidden",
          "rounded-full",
        ],
        className
      )}
      {...rest}
    />
  );
});

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={mergeNames(["aspect-square", "h-full", "w-full"], className)}
      {...rest}
    />
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={mergeNames(
        [
          "bg-color-primary-dark",
          "flex",
          "h-full",
          "w-full",
          "items-center",
          "justify-center",
          "rounded-full",
        ],
        className
      )}
      {...rest}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };
