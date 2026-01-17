"use client";
import React from "react";
import { useRouter } from "next/navigation";


export default function ReportCard({
  layout = "stats",
  icon,
  rightIcon,
  title,
  value,
  subText,
  iconBg = "bg-indigo-50",      
  iconColor = "text-indigo-600",
  badge,
  gradient,
  route
}) {

  if (layout === "stats") {
    return (
      <div
        className={`rounded-xl p-4 text-white shadow-sm ${gradient || "bg-gradient-to-r from-indigo-500 to-purple-500"
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="h-9 w-9 rounded-lg bg-white/20 flex items-center justify-center">
            {icon}
          </div>

          {rightIcon && (
            <div className="h-6 w-6 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        <p className="mt-3 font-inter font-normal text-[0.875rem] tracking-[-0.0094rem]">
          {title}
        </p>
        <h2 className="mt-1 font-inter font-normal text-[2.25rem]  tracking-[0.023rem]">
          {value}
        </h2>
        <p className="mt-1 font-inter font-normal text-[0.875rem] tracking-[-0.0094rem]">
          {subText}
        </p>
      </div>

    );
  }

  if (layout === "report") {
  const router = useRouter();
  const badgeStyles = {
    Monthly: "bg-green-100 text-green-700",
    "Auto-drafted": "bg-yellow-100 text-yellow-700",
    Annual: "bg-purple-100 text-purple-700",
    Quarterly: "bg-blue-100 text-blue-700",
  };

  return (
    <div
      onClick={() => route && router.push(route)}
      className={`relative rounded-xl border-3 border-gray-200 bg-white p-5  transition flex flex-col justify-between h-full
      ${route ? "cursor-pointer hover:shadow-md" : ""}`}
    >
      {badge && (
        <span
          className={`absolute right-3 top-3 rounded-md px-2 py-[2px] text-[10px] font-medium ${
            badgeStyles[badge] || "bg-gray-100 text-gray-600"
          }`}
        >
          {badge}
        </span>
      )}

      <div>
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
        <h3 className="mt-3 font-inter font-medium text-[1rem] tracking-[-0.02rem] text-gray-900">
          {title}
        </h3>
        <p className="mt-1 font-inter text-[0.875rem] tracking-[-0.009375rem] text-[#6A7282]">
          {subText}
        </p>
      </div>
      {!badge && (
        <button
          className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${iconColor} hover:opacity-80`}
        >
          Generate Report
          <span className="text-base">→</span>
        </button>
      )}
    </div>
  );
}


  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            {icon}
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            {title}
          </h3>
        </div>

        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-2 text-xs text-gray-500">{subText}</p>
    </div>
  );
}



