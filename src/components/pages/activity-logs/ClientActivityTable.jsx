"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Profile from "@/components/common/Profile";
import Badge from "@/components/common/Badge";

const ClientActivityTable = () => {

    const columns = [
  {
    label: "User Name",
    key: "user",
    render: (_, row) => (
      <Profile
        icon={row.icon}
        name={row.name}
        desc={row.role}
        size="sm"
        rounded="full"
      />
    ),
  },
  {
    label: "Activity Type",
    key: "activity",
    render: (value, row) => (
      <Badge
        variant={row.activityVariant}
        text={value}
      />
    ),
  },
  {
    label: "Description",
    key: "description",
  },
  {
    label: "Timestamp",
    key: "time",
  },
  {
    label: "IP Address",
    key: "ip",
  },
  {
    label: "Status",
    key: "status",
  },
];

    return (
        <BasicTable
            columns={columns}
            data={activityLogs}
            pagination
            total={15}
            pageSize={10}
        />
    );
};

export default ClientActivityTable;




const activityLogs = [
    {
        name: "Rahul Sharma",
        role: "Admin",
        icon: "RS",
        activity: "Login",
        activityVariant: "success",
        description: "User logged in successfully",
        time: "04 Dec 2025, 10:30 AM",
        ip: "192.168.1.45",
        status: <Badge text="success" />
    },
    {
        name: "Priya Patel",
        role: "Manager",
        icon: "PP",
        activity: "Invoice Creation",
        activityVariant: "primary",
        description: "Created invoice #INV-2025-1234 for ABC Enterprises",
        time: "04 Dec 2025, 10:15 AM",
        ip: "192.168.1.67",
        status: <Badge text="success" />
    },
    {
        name: "Amit Kumar",
        role: "User",
        icon: "AK",
        activity: "Modification",
        activityVariant: "warning",
        description: "Updated client profile - XYZ Solutions",
        time: "04 Dec 2025, 09:45 AM",
        ip: "192.168.1.89",
        status: <Badge text="success" />
    },
    {
        name: "Kavita Rao",
        role: "User",
        icon: "KR",
        activity: "Login",
        activityVariant: "success",
        description: "Failed login attempt - incorrect password",
        time: "04 Dec 2025, 08:30 AM",
        ip: "192.168.1.12",
        status: <Badge text="success" />
    },
];
