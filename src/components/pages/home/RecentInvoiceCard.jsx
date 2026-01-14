// "use client";
// import Button from "@/components/common/Button";
// import React from "react";

// const statusData = [
//   { label: "Paid", color: "bg-green-500" },
//   { label: "Unpaid", color: "bg-yellow-500" },
//   { label: "Overdue", color: "bg-red-500" },
//   { label: "Draft", color: "bg-blue-500" },
// ];

// const RecentInvoicesCard = () => {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white mt-7 p-5 font-inter">

//       <div className="flex items-center pb-3 border-b border-gray-500 justify-between">
//         <h3 className="font-inter font-semibold text-[1rem] tracking-[0.0044rem]">
//           Recent Invoices
//         </h3>
//         <Button variant="success">
//           View All
//         </Button>
//       </div>

//       <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
//         <div className="w-[35%] bg-green-500" />
//         <div className="w-[25%] bg-yellow-500" />
//         <div className="w-[20%] bg-red-500" />
//         <div className="w-[20%] bg-blue-500" />
//       </div>

//       <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.75rem] text-gray-600">
//         {statusData.map((item, index) => (
//           <div key={index} className="flex items-center gap-1.5">
//             <span className={`h-3 w-3 rounded-full ${item.color}`} />
//             <span className="font-inter font-semibold text-[1rem] tracking-[0.0044rem]">{item.label}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentInvoicesCard;





"use client";
import Badge from "@/components/common/Badge";
import { dashboardTableData } from "../../../config/dashboardTable";
import RecentActivityCard from "./RecentActivityCard";


const invoiceProgress = [
  { width: "35%", color: "bg-green-500" },
  { width: "25%", color: "bg-yellow-500" },
  { width: "20%", color: "bg-red-500" },
  { width: "20%", color: "bg-blue-500" },
];

const invoiceLegend = [
  { label: "Paid", color: "bg-green-500" },
  { label: "Unpaid", color: "bg-yellow-500" },
  { label: "Overdue", color: "bg-red-500" },
  { label: "Draft", color: "bg-blue-500" },
];

const estimateProgress = [
  { width: "35%", color: "bg-green-500" },
  { width: "25%", color: "bg-yellow-500" },
  { width: "40%", color: "bg-orange-500" },
];

const estimateLegend = [
  { label: "Sent", color: "bg-green-500" },
  { label: "Draft", color: "bg-yellow-500" },
  { label: "Expired", color: "bg-orange-500" },
];

const columns = [
  { label: "Customer", key: "customer" },
  { label: "Amount", key: "amount" },
  { label: "Due Date", key: "dueDate" },
  {
    label: "Status",
    key: "status",
    render: (v) => (
      <Badge text={v} className="bg-green-100 text-green-700" />
    ),
  },
];

export default function RecentInvoiceCard() {
  return (
    <div className="grid grid-cols-1 mt-7 lg:grid-cols-2 gap-6">

      <RecentActivityCard
        title="Recent Invoices"
        progress={invoiceProgress}
        legend={invoiceLegend}
        columns={columns}
        data={dashboardTableData}
      />

      <RecentActivityCard
        title="Recent Estimates"
        progress={estimateProgress}
        legend={estimateLegend}
        columns={columns}
        data={dashboardTableData}
      />
    </div>
  );
}
