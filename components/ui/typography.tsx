import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

type TypographyProps = {
  children?: React.ReactNode;
  className?: ClassValue;
};

const TypographyH1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
  >
    {children}
  </h1>
);

const TypographyH2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
  >
    {children}
  </h2>
);

const TypographyH3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

const TypographyH4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h4>
);

const TypographyP: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
    {children}
  </p>
);

const TypographyBlockquote: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
    {children}
  </blockquote>
);

const TypographyInlineCode: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className
    )}
  >
    {children}
  </code>
);

const TypographyLead: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
);

const TypographyLarge: React.FC<TypographyProps> = ({
  children,
  className,
}) => <div className={cn("text-lg font-semibold", className)}>{children}</div>;

const TypographySmall: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <small className={cn("text-sm font-medium leading-none", className)}>
    {children}
  </small>
);

const TypographyMuted: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
);

export {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
};
