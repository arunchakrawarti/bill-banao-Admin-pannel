"use client";

import React from "react";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/common/Button";
import StatsCard from "@/components/molecules/StatsCard";
import ClientActivityTable from "./ClientActivityTable";

const ClientsActivity = () => {
  return (
    <div className="mt-7 space-y-6">
        <Heading
        title="Activity Logs"
        paragraph="Comprehensive analytics and insights"
        actions={[
          {
            text: "Select Period",
            variant: "default",
            icon: <i className="ri-calendar-line text-base" />,
            onClick: () => console.log("Select Period"),
          },
          {
            text: "Export Report",
            variant: "danger",
            icon: <i className="ri-download-2-line text-base" />,
            onClick: () => console.log("Export"),
          },
        ]}
      />
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <i className="ri-pulse-line text-blue-600 text-lg" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Activity & Logs
              </h2>
              <p className="text-sm text-gray-500">
                Track all system activities and user actions
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              className="flex items-center gap-2 text-sm"
            >
              <i className="ri-calendar-line" />
              Date Range
            </Button>
            <Button
              variant="default"
              className="flex items-center gap-2 text-sm"
            >
              <i className="ri-filter-3-line" />
              Log Type
            </Button>
            <Button
              variant="danger"
              className="flex items-center gap-2 text-sm"
            >
              <i className="ri-download-2-line" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activityStats.map((item, index) => (
            <StatsCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              iconBg={item.iconBg}
              variant="activity"
              className={`${item.cardBg} border border-gray-200`}
            />
          ))}
        </div>
      </div>

      {/* Table */}
      <ClientActivityTable />
    </div>
  );
};

export default ClientsActivity;

export const activityStats = [
  {
    title: "Login Logs",
    value: "234",
    icon: "ri-login-box-line",
    iconBg: "bg-green-500 text-white",
    cardBg: "bg-green-50",
  },
  {
    title: "Invoice Creation",
    value: "156",
    icon: "ri-file-add-line",
    iconBg: "bg-blue-500 text-white",
    cardBg: "bg-blue-50",
  },
  {
    title: "Modifications",
    value: "89",
    icon: "ri-edit-2-line",
    iconBg: "bg-orange-500 text-white",
    cardBg: "bg-orange-50",
  },
  {
    title: "Delete Logs",
    value: "23",
    icon: "ri-delete-bin-6-line",
    iconBg: "bg-red-500 text-white",
    cardBg: "bg-red-50",
  },
  {
    title: "Export Logs",
    value: "67",
    icon: "ri-upload-2-line",
    iconBg: "bg-gray-500 text-white",
    cardBg: "bg-gray-50",
  },
];
