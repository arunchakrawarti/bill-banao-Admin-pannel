"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Heading from "@/components/atoms/Heading";
import InformationCard from "@/components/molecules/InformationCard";
import InfoCard from "@/components/molecules/InfoCard";

export default function GSTClient() {
  return (
    <div className="space-y-3 mt-7">
      <p className="flex items-center gap-1 font-inter font-normal text-[0.75rem] tracking-[-0.006rem] text-[#6A7282]">
        <span className="text-[15px]">Admin Panel</span>
        <ChevronRight size={15} />
        <span className="text-[15px]">GST Filing</span>
        <ChevronRight size={15} />
        <span className="text-[15px]">Client Dashboard</span>
      </p>

      <div className="mt-5">
        <Heading
          title="GST Client Dashboard"
          paragraph="View and manage GST returns and compliance"
          actions={[
            {
              text: "Switch Client",
              variant: "outline",
              route: "/gst-filing/gst-filling-management",
              icon: <ArrowLeft size={14} />,
              onClick: () => console.log("Switch Client"),
            },
          ]}
        />
      </div>
     <InformationCard
  title="Replica Module"
  description="This module is for GST tracking and management only. Actual filing is done on the official GST portal."
  type="info"
/>
      <InfoCard
  type="bar"
  layout="separate"
  items={[
    { label: "GSTIN", value: "29ABCDE1234F1Z5" },
    { label: "Client Name", value: "Tech Solutions Pvt Ltd" },
    { label: "Return Filing Frequency", value: "Monthly" },
    { label: "GST Status", badge: "Active" },
  ]}
/>


    </div>
  );
}
