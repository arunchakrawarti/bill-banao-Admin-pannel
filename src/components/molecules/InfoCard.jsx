"use client";
import clsx from "clsx";
import { Calculator, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const iconMap = {
  calculator: Calculator,
  file: FileText,
  check: CheckCircle2,
  alert: AlertCircle,
};

const variants = {
  purple: {
    wrapper: "bg-[#F5F3FF] border-[#E9E4FF]", 
    title: "text-[#59168B]",
    label: "text-[#8B5CF6]",
    value: "text-[#1F2937]",
    icon: "text-[#8B5CF6]"
  },
  summary: {
    wrapper: "bg-[#E6F9F1] border-[#D1F2E4]", 
    title: "text-[#065F46]",
    label: "text-[#10B981]",
    value: "text-[#1F2937]",
    icon: "text-[#10B981]"
  },
  green: {
    wrapper: "bg-gradient-to-br from-[#ECFDF3] to-[#D1FAE5] border-[#A7F3D0]",
    title: "text-[#065F46]",
    label: "text-[#047857]",
    value: "text-black",
  },
  blue: {
    wrapper: "bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] border-[#A5F3FC]",
    title: "text-[#155E75]",
    label: "text-[#0284C7]",
    value: "text-black",
  },
  blueGradient: {
    wrapper: "bg-[linear-gradient(135deg,#EEF2FF_0%,#E0E7FF_100%)] border-[#C6D2FF]",
    title: "text-gray-900",
    label: "text-[#432DD7]", 
    value: "text-black",
  },
  gray: {
    wrapper: "bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] border-[#E5E7EB]",
    title: "text-[#1F2937]",
    label: "text-gray-500",
    value: "text-black",
  },
};

export default function InfoCard({
  type = "card",   
  layout = "single", 
  title,
  items = [], 
  variant = "purple",
  border = true,
  iconName = null, 
}) {
  const Icon = iconName ? iconMap[iconName] : null;
  const styles = variants[variant] || variants.purple;
  const itemCount = items?.length || 0;

  const getGridCols = (count) => {
    if (count === 5) return "sm:grid-cols-5";
    if (count === 3) return "sm:grid-cols-3";
    return "sm:grid-cols-2 lg:grid-cols-4"; 
  };

  const renderItem = (item, index, isSeparate = false) => (
    <div key={index} className={clsx(
      "flex flex-col gap-1", 
      isSeparate && "bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
    )}>
      <p className={clsx(
        "font-medium uppercase tracking-tight",
        type === "bar" ? "text-[11px] text-gray-400" : "text-[11px] opacity-70"
      )}>
        {item?.label}
      </p>
      
      <div className="flex items-center">
        {item?.badge || item?.isBadge ? (
          <span className={clsx(
            "px-3 py-0.5 rounded-full text-[12px] font-medium",
            (item.badge === "Active" || item.value === "Active" || item.value === "Filed") 
              ? "bg-green-100 text-green-700" 
              : "bg-gray-100 text-gray-600"
          )}>
            {item.badge || item.value}
          </span>
        ) : (
          <p className={clsx(
            "font-semibold leading-tight",
            type === "bar" ? "text-[14px]" : "text-[22px]",
            item?.isLink ? "text-[#2563EB] cursor-pointer hover:underline" : "text-gray-800",
            item?.danger && "text-red-600",
            (type === "card" && !item?.isLink && !item?.danger) ? styles.value : ""
          )}>
            {item?.value}
          </p>
        )}
      </div>
    </div>
  );

  if (type === "bar") {
    if (layout === "separate") {
      return (
        <div className={clsx("grid grid-cols-1 gap-4", getGridCols(itemCount))}>
          {items?.map((item, index) => renderItem(item, index, true))}
        </div>
      );
    }
    return (
      <div className={clsx(
        "bg-white px-4 py-3 rounded-lg",
        border && "border border-gray-100 shadow-sm"
      )}>
        <div className={clsx("grid grid-cols-2 gap-6", getGridCols(itemCount))}>
          {items?.map((item, index) => renderItem(item, index, false))}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(
      "rounded-xl border px-5 py-5 transition-all", 
      styles.wrapper, 
      !border && "border-none shadow-none"
    )}>
      {title && (
        <div className="flex items-center gap-2 mb-6">
          {Icon && <Icon size={18} className={styles.icon} />}
          <p className={clsx("text-[14px] font-semibold", styles.title)}>
            {title}
          </p>
        </div>
      )}

      <div className={clsx("grid gap-6 grid-cols-2", getGridCols(itemCount))}>
        {items?.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}