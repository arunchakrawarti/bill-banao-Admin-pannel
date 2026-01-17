// eligibleItc.config.js

export const eligibleItcColumns = [
  {
    label: "Details",
    key: "details",
    render: (value, row) =>
      row.isTotal ? <span className="font-semibold">{value}</span> : value,
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value, row) =>
      row.isTotal ? <span className="font-semibold">{value}</span> : value,
  },
  {
    label: "SGST/UTGST",
    key: "sgst",
    render: (value, row) =>
      row.isTotal ? <span className="font-semibold">{value}</span> : value,
  },
  {
    label: "IGST",
    key: "igst",
    render: (value, row) =>
      row.isTotal ? <span className="font-semibold">{value}</span> : value,
  },
  {
    label: "CESS",
    key: "cess",
    render: (value, row) =>
      row.isTotal ? <span className="font-semibold">{value}</span> : value,
  },
];

export const eligibleItcData = [
  {
    details: "Import of goods",
    cgst: "–",
    sgst: "–",
    igst: "₹28,500",
    cess: "₹0",
  },
  {
    details: "Import of services",
    cgst: "–",
    sgst: "–",
    igst: "₹12,300",
    cess: "₹0",
  },
  {
    details:
      "Inward supplies liable to reverse charge (other than 1 & 2 above)",
    cgst: "₹2,025",
    sgst: "₹2,025",
    igst: "₹0",
    cess: "₹0",
  },
  {
    details: "Inward supplies from ISD",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    details: "All other ITC",
    cgst: "₹67,200",
    sgst: "₹67,200",
    igst: "₹45,600",
    cess: "₹0",
  },
  {
    isTotal: true,
    details: "Total ITC Claimed",
    cgst: "₹71,225",
    sgst: "₹71,225",
    igst: "₹86,400",
    cess: "₹0",
  },
];
