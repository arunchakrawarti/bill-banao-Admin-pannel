import Button from "@/components/common/Button";
import StatsCard from "@/components/molecules/StatsCard";
import React from "react";
import TaskUpdateTable from "./TaskUpdateTable";

const TaskUpdate = () => {
  return (
    <div className="space-y-6 mt-3">
      {/* Header */}
      <div className="
        flex flex-col gap-3
        sm:flex-row sm:items-center sm:justify-between
      ">
        <h2 className="text-base sm:text-lg font-semibold">
          Task Update List
        </h2>

        {/* Action Buttons */}
        <div className="
          flex flex-col gap-2
          sm:flex-row sm:gap-3
        ">
          <Button
            variant="default"
            className="flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <i className="ri-printer-line text-base" />
            Print
          </Button>

          <Button
            variant="danger"
            className="flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <i className="ri-download-2-line text-base" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      ">
        {statsConfig.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            iconBg={item.iconBg}
            change={item.change}
            percent={item.percent}
            variant={item.variant}
          />
        ))}
      </div>
      <TaskUpdateTable/>
    </div>
  );
};

export default TaskUpdate;


export const statsConfig = [
  {
    title: "Total Task",
    value: "1,234",
    icon: "ri-user-line",
    iconBg: "bg-blue-500",
    change: 2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Active Task",
    value: "1,234",
    icon: "ri-file-list-3-line",
    iconBg: "bg-green-500",
    change: 2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Inactive Task",
    value: "1,234",
    icon: "ri-money-dollar-circle-line",
    iconBg: "bg-yellow-500",
    change: -2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Complete Task",
    value: "1,234",
    icon: "ri-money-dollar-circle-line",
    iconBg: "bg-yellow-500",
    change: -2.7,
    percent: 2.7,
    variant: "dashboard",
  },
];