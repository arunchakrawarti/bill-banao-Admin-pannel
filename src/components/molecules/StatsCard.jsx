"use client";

import React from "react";
import clsx from "clsx";

const getTrend = (value) => {
  if (value >= 0) {
    return {
      icon: "ri-arrow-up-line",
      color: "text-green-500",
    };
  }
  return {
    icon: "ri-arrow-down-line",
    color: "text-red-500",
  };
};

const StatsCard = ({
  title,
  value,
  icon,
  iconBg,
  change = 0,
  percent = 0,
  invoices = 0,
  variant = "dashboard", // dashboard | detailed | activity
}) => {
  const trend = getTrend(change);

  const hasIcon = Boolean(icon && iconBg);
  const baseColor = hasIcon ? iconBg : null;
  const textColor = hasIcon ? iconBg.replace("bg-", "text-") : null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      
      <div className="flex items-start gap-3">
       
        {hasIcon && (
          <div
            className={clsx(
              "h-10 w-10 rounded-lg flex items-center justify-center shrink-0",
              baseColor
            )}
          >
            <i className={icon} />
          </div>
        )}
        <div>
          <p className="font-inter text-[0.85rem] text-gray-500">
            {title}
          </p>
          <h2 className="font-inter text-[1rem] font-semibold text-gray-900 mt-0.5">
            {value}
          </h2>
        </div>
      </div>

      {variant === "dashboard" && hasIcon && (
        <>
          <div className="mt-3 h-1.5 w-full rounded bg-gray-200">
            <div
              className={clsx("h-1.5 rounded", baseColor)}
              style={{ width: "60%" }}
            />
          </div>

          <div className="mt-3 flex items-center gap-1">
            <i className={clsx(trend.icon, textColor)} />
            <span
              className={clsx(
                "font-inter text-[1.5rem] tracking-[0.004375rem]",
                textColor
              )}
            >
              {percent}%
            </span>
            <span className="font-inter text-[1rem] tracking-[0.004375rem] text-gray-500">
              Since last Week
            </span>
          </div>
        </>
      )}
      
      {variant === "detailed" && (
        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="font-inter font-normal text-[0.875rem] text-gray-600 tracking-[0.004375rem]">
            No. of Invoice{" "}
            <span className="font-inter font-semibold text-[0.875rem] tracking-[0.004375rem]">
              {invoices}
            </span>
          </div>

          <div
            className={clsx(
              "flex items-center gap-1 font-inter font-normal text-[1.25rem] tracking-[0.004375rem]",
              trend.color
            )}
          >
            {change > 0 ? "↑" : "↓"} {Math.abs(change)}%
          </div>
        </div>
      )}
      
      {variant === "activity" && (
        <div className="mt-2">
          
        </div>
      )}
    </div>
  );
};

export default StatsCard;
