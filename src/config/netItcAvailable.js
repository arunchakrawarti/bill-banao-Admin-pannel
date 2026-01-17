import clsx from "clsx";

export const netItcColumns = [
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
          row.type === "debit" && "text-red-600",
          row.isNet && "text-blue-600"
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
          row.type === "debit" && "text-red-600",
          row.isNet && "text-blue-600"
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
          row.type === "debit" && "text-red-600",
          row.isNet && "text-blue-600"
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

export const netItcData = [
  {
    description: "Total ITC Available (Part A)",
    cgst: "₹67,650",
    sgst: "₹67,650",
    igst: "₹1,27,200",
    cess: "₹0",
    type: "credit",
  },
  {
    description: "Less: ITC Not Available (Part B)",
    cgst: "₹4,500",
    sgst: "₹4,500",
    igst: "₹4,200",
    cess: "₹0",
    type: "debit",
  },
  {
    isNet: true,
    description: "Net ITC Available (A-B)",
    cgst: "₹63,150",
    sgst: "₹63,150",
    igst: "₹1,23,000",
    cess: "₹0",
  },
  {
    isTotal: true,
    description: "Total Net ITC",
    cgst: "",
    sgst: "",
    igst: "",
    cess: "₹2,52,300",
  },
];
