"use client";
import clsx from "clsx";
import { Info, AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";


const iconMap = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
  error: AlertCircle,
  default: Info,
};

const InformationCard = ({
  title,
  description,
  type = "info", 
  layout = "inline", 
  children, 
}) => {
  const Icon = iconMap[type] || iconMap.default;

  const typeStyles = {
    
    info: "bg-[#F0F7FF] border-[#D1E9FF] text-[#1E40AF]",
   
    warning: "bg-[#FFFBEB] border-[#FEF3C7] text-[#92400E]",
    
    purple: "bg-[#FAF5FF] border-[#E9D4FF] text-[#59168B]",
    success: "bg-[#F0FDF4] border-[#DCFCE7] text-[#166534]",
   
    default: "bg-white border-gray-200 text-gray-700",
  };

  const isInline = layout === "inline";

  return (
    <div
      className={clsx(
        "flex items-start gap-3 rounded-lg px-4 py-3 border transition-all w-full",
        typeStyles[type]
      )}
    >
     
      <div className="mt-0.5 flex-shrink-0">
        <Icon size={18} />
      </div>

      <div className="flex flex-col w-full">
        <div
          className={clsx(
            "text-[14px] leading-relaxed",
            isInline ? "flex flex-wrap items-baseline gap-1" : "flex flex-col"
          )}
        >
         
          {title && (
            <span className="font-bold whitespace-nowrap">
              {title}{isInline ? ":" : ""}
            </span>
          )}

         
          {description && (
            <span className={clsx(!isInline && "mt-1", "font-medium opacity-90")}>
              {description}
            </span>
          )}
        </div>

        
        {children && (
          <div className="mt-2 text-[13px] font-medium space-y-1 opacity-80">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationCard;