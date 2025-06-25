import type { SortOrder } from "../../types/SortOrder";
import { useDropdownToggle } from "../../hooks/useDropdownToggle";

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
    <div className="relative">
      <button
        onClick={toggle}
        className="px-4 py-2 text-sm border rounded-md text-neutral-400 flex items-center gap-2"
      >
        {sortOrder === "new" ? "Новое" : "Старое"}
        <span className="text-xs">▾</span>
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border rounded shadow text-sm z-10">
          <li>
            <button
              onClick={() => handleSelect("new")}
              className="w-full text-left px-4 py-2 hover:bg-neutral-100"
            >
              Новое
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect("old")}
              className="w-full text-left px-4 py-2 hover:bg-neutral-100"
            >
              Старое
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
