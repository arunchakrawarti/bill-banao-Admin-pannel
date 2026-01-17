"use client";
import React from "react";
import { FileText, BarChart2, Clock } from "lucide-react";
import ReportCard from "@/components/molecules/ReportCard";

export default function ReportsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-7 gap-4">
      {REPORTS.map((item, index) => {
        const Icon = item.icon;

        return (
          <ReportCard
            key={index}
            layout="report"
            title={item.title}
            subText={item.subText}
            icon={<Icon size={18} />}
            iconColor={item.iconColor}
            iconBg={item.iconBg}
          />
        );
      })}
    </div>
  );
}

const REPORTS = [
  {
    title: "Monthly Report",
    subText: "Complete overview of this month’s performance",
    icon: FileText,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
  {
    title: "Quarterly Analysis",
    subText: "Detailed quarterly performance metrics",
    icon: BarChart2,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Annual Report",
    subText: "Comprehensive yearly performance summary",
    icon: Clock,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
  },
];