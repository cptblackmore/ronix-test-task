import type { SortOrder } from "../../types/SortOrder";
import { useDropdownToggle } from "../../hooks/useDropdownToggle";
import { Triangle } from "../Triangle";

interface PostSortDropdownProps {
  sortOrder: SortOrder;
  onSortChange: (sortOrder: SortOrder) => void;
}

export const PostSortDropdown: React.FC<PostSortDropdownProps> = ({
  sortOrder,
  onSortChange,
}) => {
  const { isOpen, toggle, close } = useDropdownToggle();

  const handleSelect = (value: SortOrder) => {
    onSortChange(value);
    close();
  };

  return (
    <div className="relative flex-[0_1_115px] min-w-0">
      <button
        onClick={toggle}
        className="relative w-full h-[30px]
                  pl-[9px] pr-10 py-2 border border-[#F1F1F1]
                  rounded-md text-[#CDCDCD] flex items-center gap-2"
      >
        {sortOrder === "new" ? "Новое" : "Старое"}
        <div className="absolute right-3 top-0 bottom-0 flex items-center">
          <Triangle direction={isOpen ? "up" : "down"} size={0.35} />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full border border-[#F1F1F1] rounded-md bg-white overflow-hidden z-10 shadow-sm">
          <li>
            <button
              onClick={() => handleSelect("new")}
              className="w-full text-left pl-[9px] pr-4 py-2 hover:bg-neutral-100"
            >
              Новое
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect("old")}
              className="w-full text-left pl-[9px] pr-4 py-2 hover:bg-neutral-100"
            >
              Старое
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
