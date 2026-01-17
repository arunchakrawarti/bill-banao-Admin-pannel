import clsx from "clsx";

export const itcReversalPartBColumns = [
  {
    label: "Description",
    key: "description",
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value) => (
      <span className="font-medium text-red-600">{value}</span>
    ),
  },
  {
    label: "SGST/UTGST",
    key: "sgst",
    render: (value) => (
      <span className="font-medium text-red-600">{value}</span>
    ),
  },
  {
    label: "IGST",
    key: "igst",
    render: (value) => (
      <span className="font-medium text-red-600">{value}</span>
    ),
  },
  {
    label: "CESS",
    key: "cess",
  },
];

export const itcReversalPartBData = [
  {
    description: "ITC as per Rule 37 (Reversal)",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    description: "ITC ineligible as per Section 17(5)",
    cgst: "₹4,500",
    sgst: "₹4,500",
    igst: "₹4,200",
    cess: "₹0",
  },
  {
    isTotal: true,
    description: "Total ITC Not Available (Part B)",
    cgst: "₹4,500",
    sgst: "₹4,500",
    igst: "₹4,200",
    cess: "₹0",
  },
];
