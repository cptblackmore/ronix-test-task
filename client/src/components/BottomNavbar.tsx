import FeedIcon from "../assets/icons/FeedIcon";

type NavItem = {
  id: string;
  icon: (color: string) => React.ReactNode;
  active?: boolean;
};

const ACTIVE_COLOR = "#4f8bd0";
const INACTIVE_COLOR = "#CFCFCF";

const items: NavItem[] = [
  {
    id: "menu",
    icon: (color) => <FeedIcon color={color} />,
    active: true,
  },
  {
    id: "item-2",
    icon: (color) => (
      <div
        className="w-[36px] h-[36px] border-2 border-[#F1F1F1] rounded-full cursor-auto"
        style={{ backgroundColor: color }}
      />
    ),
  },
  {
    id: "item-3",
    icon: (color) => (
      <div
        className="w-[36px] h-[36px] border-2 border-[#F1F1F1] rounded-full cursor-auto"
        style={{ backgroundColor: color }}
      />
    ),
  },
  {
    id: "item-4",
    icon: (color) => (
      <div
        className="w-[36px] h-[36px] border-2 border-[#F1F1F1] rounded-full cursor-auto"
        style={{ backgroundColor: color }}
      />
    ),
  },
];

export const BottomNavbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-[#F8F8F8] border-t-2 border-[#C4C4C4] rounded-t-[18px] px-[85px] py-[22px]">
      <div className="flex justify-between items-center">
        {items.map(({ id, icon, active }) => {
          const color = active ? ACTIVE_COLOR : INACTIVE_COLOR;

          return <button key={id}>{icon(color)}</button>;
        })}
      </div>
    </nav>
  );
};
