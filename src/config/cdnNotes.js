import clsx from "clsx";

export const cdnNotesColumns = [
  {
    label: "GSTIN of Supplier",
    key: "gstin",
  },
  {
    label: "Trade Name",
    key: "tradeName",
  },
  {
    label: "Note Number",
    key: "noteNumber",
  },
  {
    label: "Date",
    key: "date",
  },
  {
    label: "Type",
    key: "type",
    render: (value) => (
      <span
        className={clsx(
          "px-2 py-0.5 rounded text-xs font-medium",
          value === "Credit Note"
            ? "bg-red-50 text-red-600"
            : "bg-green-50 text-green-600"
        )}
      >
        {value}
      </span>
    ),
  },
  {
    label: "Taxable Value",
    key: "taxableValue",
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value) => (
      <span className="text-red-600 font-medium">{value}</span>
    ),
  },
  {
    label: "SGST",
    key: "sgst",
    render: (value) => (
      <span className="text-red-600 font-medium">{value}</span>
    ),
  },
  {
    label: "IGST",
    key: "igst",
    render: (value) => (
      <span className="text-red-600 font-medium">{value}</span>
    ),
  },
  {
    label: "Total",
    key: "total",
    render: (value, row) =>
      row.isTotal ? (
        <span className="font-semibold">{value}</span>
      ) : (
        value
      ),
  },
];

export const cdnNotesData = [
  {
    gstin: "29AAACT3321Z5",
    tradeName: "ABC Suppliers Ltd",
    noteNumber: "CDN-2024-01",
    date: "2024-03-18",
    type: "Credit Note",
    taxableValue: "₹15,000",
    cgst: "₹1,350",
    sgst: "₹1,350",
    igst: "₹0",
    total: "₹17,700",
  },
];
