interface TriangleProps {
  direction: "up" | "down";
  color?: string;
  size?: number;
}

export const Triangle: React.FC<TriangleProps> = ({
  direction,
  color = "#CDCDCD",
  size = 1,
}) => {
  const base = 1 * size;
  const edge = 0.9 * size;

  const borderStyles =
    direction === "up"
      ? {
          borderLeft: `${edge}em solid transparent`,
          borderRight: `${edge}em solid transparent`,
          borderBottom: `${base}em solid ${color}`,
        }
      : {
          borderLeft: `${edge}em solid transparent`,
          borderRight: `${edge}em solid transparent`,
          borderTop: `${base}em solid ${color}`,
        };

  return (
    <div
      style={{
        width: 0,
        height: 0,
        transition: "border-color 0.2s ease-in-out",
        ...borderStyles,
      }}
    />
  );
};
