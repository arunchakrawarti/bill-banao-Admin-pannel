import clsx from "clsx";

export const itcAvailablePartAColumns = [
  {
    label: "Description",
    key: "description",
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value, row) => (
      <span
        className={clsx(
          "font-medium",
          row.type === "credit" && "text-green-600",
          row.type === "debit" && "text-red-600"
        )}
      >
        {value}
      </span>
    ),
  },
  {
    label: "SGST/UTGST",
    key: "sgst",
    render: (value, row) => (
      <span
        className={clsx(
          "font-medium",
          row.type === "credit" && "text-green-600",
          row.type === "debit" && "text-red-600"
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
          row.type === "credit" && "text-green-600",
          row.type === "debit" && "text-red-600"
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

export const itcAvailablePartAData = [
  {
    description: "B2B – Invoices",
    cgst: "₹67,200",
    sgst: "₹67,200",
    igst: "₹86,400",
    cess: "₹0",
    type: "credit",
  },
  {
    description: "B2B – Debit notes",
    cgst: "₹1,300",
    sgst: "₹1,300",
    igst: "₹0",
    cess: "₹0",
    type: "credit",
  },
  {
    description: "B2B – Credit notes",
    cgst: "₹1,350",
    sgst: "₹1,350",
    igst: "₹0",
    cess: "₹0",
    type: "debit",
  },
  {
    description: "ISD – Invoices",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    description: "Import of Goods (SEZ/EOU)",
    cgst: "-",
    sgst: "-",
    igst: "₹28,500",
    cess: "₹0",
    type: "credit",
  },
  {
    description: "Import of Services",
    cgst: "-",
    sgst: "-",
    igst: "₹12,300",
    cess: "₹0",
    type: "credit",
  },
  {
    isTotal: true,
    description: "Total ITC Available (Part A)",
    cgst: "₹67,650",
    sgst: "₹67,650",
    igst: "₹1,27,200",
    cess: "₹0",
  },
];
