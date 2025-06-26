export const StoriesBar: React.FC = () => {
  return (
    <div className="flex gap-[5px]">
      <div className="relative border-2 w-[28px] h-[28px] border-[#F1F1F1] rounded-full cursor-not-allowed">
        <div className="absolute left-[11px] top-[5px] bg-[#F1F1F1] w-[2px] h-[14px]"></div>
        <div className="absolute left-[5px] top-[11px] bg-[#F1F1F1] w-[14px] h-[2px]"></div>
      </div>
      <div className="border-2 w-[28px] h-[28px] bg-[#F9F9F9] border-[#F1F1F1] rounded-full"></div>
      <div className="border-2 w-[28px] h-[28px] bg-[#F9F9F9] border-[#F1F1F1] rounded-full"></div>
      <div className="border-2 w-[28px] h-[28px] bg-[#F9F9F9] border-[#F1F1F1] rounded-full"></div>
    </div>
  );
};
