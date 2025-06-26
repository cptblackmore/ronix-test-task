import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[calc(518px+36px*2)] px-[36px]">
      {children}
    </div>
  );
};
