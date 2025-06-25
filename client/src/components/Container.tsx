import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[518px]">{children}</div>
  );
};
