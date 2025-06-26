import { useState } from "react";
import CrossIcon from "../assets/icons/CrossIcon";

interface ClearIconButtonProps {
  onClear: () => void;
}

export const ClearIconButton: React.FC<ClearIconButtonProps> = ({
  onClear,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClear}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CrossIcon color={hovered ? "#FF0000" : "#CDCDCD"} />
    </button>
  );
};
