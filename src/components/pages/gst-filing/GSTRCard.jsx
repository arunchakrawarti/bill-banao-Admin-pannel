import ReportCard from "@/components/molecules/ReportCard";
import React from "react";

const GSTRCard = () => {
  return (
    <div className="mt-5">
      <h1 className="font-inter text-[0.975rem]">
        File GST Returns
      </h1>

      <div className="grid mt-3 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GSTR_LIST.map((item, index) => (
          <ReportCard
            key={index}
            layout="report"
            title={item.title}
            subText={item.subText}
            badge={item.badge}
            icon={<i className={`${item.icon} text-lg`} />}
            iconBg={item.iconBg}
            iconColor={item.iconColor}
            route={item.route}
          />

        ))}
      </div>
    </div>
  );
};

export default GSTRCard;

const GSTR_LIST = [
  {
    title: "GSTR-1",
    subText: "Outward supplies",
    badge: "Monthly",
    icon: "ri-file-text-line",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    route: "/gst-filing/gstr-1",
  },
  {
    title: "GSTR-3B",
    subText: "Monthly return & payment",
    badge: "Monthly",
    icon: "ri-file-text-line",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    route: "/gst-filing/gstr-3b",
  },
  {
    title: "GSTR-2A",
    subText: "Auto ITC statement",
    badge: "Auto-drafted",
    icon: "ri-file-text-line",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    route: "/gst-filing/gstr-2a",
  },
  {
    title: "GSTR-2B",
    subText: "Static ITC statement",
    badge: "Auto-drafted",
    icon: "ri-file-text-line",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    route: "/gst-filing/gstr-2b",
  },
  {
    title: "GSTR-9",
    subText: "Annual return",
    badge: "Annual",
    icon: "ri-file-text-line",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    route: "/gst-filing/gstr-9",
  },
  {
    title: "GSTR-4",
    subText: "Composition scheme",
    badge: "Quarterly",
    icon: "ri-file-text-line",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    route: "/gst-filing/gstr-4",
  },
];