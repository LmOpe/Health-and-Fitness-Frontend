export function Pill() {
  return (
    <div className="flex items-center justify-center w-full h-0 relative">
      <div
        className="
        absolute top-[-90px]
      text-grey-6 bg-white-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[50px] w-[194px] 
      h-[50px]  flex items-center justify-center
      "
      >
        <div className="flex justify-between gap-3 items-center">
          <img src="/Flame.svg" alt="Burned calorie" />
          <p className="font-montserrat font-normal text-lg space-x-1">
            Burned 217 <span className="font-bold text-xs">kcal</span>
          </p>
        </div>
      </div>
    </div>
  );
}