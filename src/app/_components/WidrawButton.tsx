"use client";
import { toast } from "sonner";

const WidrawButton = ({
  children,
}: {
  children: string;
  onClick?: () => void;
}): JSX.Element => (
  <button
    type="button"
    className="text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-[32px] text-sm px-3 py-1.5 mr-4 "
    onClick={() => {
      toast.success("WIDRAW");
    }}
  >
    <div className="absolute inset-0 bg-blue-500 opacity-[16%]"></div>
    <div className="flex flex-row items-center justify-center gap-4">
      <p className="text-blue-500">{children}</p>
    </div>
  </button>
);

export default WidrawButton;
