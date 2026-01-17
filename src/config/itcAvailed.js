"use client"; // 👈 Important for JSX render functions

import clsx from "clsx";

// Column configuration
export const itcReversalPartBColumns = [
  {
    label: "Type of ITC",
    key: "description",
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value, row) => (
      <span
        className={clsx(
          "font-medium",
          row.isTotal
            ? "text-green-600"
            : value.startsWith("₹-")
            ? "text-red-600"
            : "text-green-600"
        )}
      >
        {value}
      </span>
    ),
  },
  {
    label: "SGST",
    key: "sgst",
    render: (value, row) => (
      <span
        className={clsx(
          "font-medium",
          row.isTotal
            ? "text-green-600"
            : value.startsWith("₹-")
            ? "text-red-600"
            : "text-green-600"
        )}
      >
        {value}
      </span>
    ),
  },
  {
    label: "IGST",
    key: "igst",
    render: (value, row) => (
      <span
        className={clsx(
          "font-medium",
          row.isTotal
            ? "text-green-600"
            : value.startsWith("₹-")
            ? "text-red-600"
            : "text-green-600"
        )}
      >
        {value}
      </span>
    ),
  },
  {
    label: "CESS",
    key: "cess",
  },
];

// Table data
export const itcReversalPartBData = [
  {
    description: "Total ITC availed (All Inputs)",
    cgst: "₹85,470",
    sgst: "₹85,470",
    igst: "₹1,03,680",
    cess: "₹0",
  },
  {
    description: "ITC reversed / ineligible",
    cgst: "₹-4,250",
    sgst: "₹-4,250",
    igst: "₹-5,040",
    cess: "₹0",
  },
  {
    isTotal: true,
    description: "Net ITC availed",
    cgst: "₹81,220",
    sgst: "₹81,220",
    igst: "₹98,640",
    cess: "₹0",
  },
];
