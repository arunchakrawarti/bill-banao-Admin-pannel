// config/taxOutwardSupplies.js

export const outwardTaxColumns = [
  {
    label: "Nature of Supplies",
    key: "nature",
    render: (value, row) =>
      row.isTotal ? (
        <span className="font-semibold">{value}</span>
      ) : (
        value
      ),
  },
  {
    label: "Taxable Value",
    key: "taxableValue",
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

export const outwardTaxData = [
  {
    nature:
      "Outward taxable supplies (other than zero rated, nil rated and exempted)",
    taxableValue: "₹24,47,200",
    cgst: "₹1,84,540",
    sgst: "₹1,84,540",
    igst: "₹13,500",
    cess: "₹0",
  },
  {
    nature: "Outward taxable supplies (zero rated)",
    taxableValue: "₹6,78,900",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    nature: "Other outward supplies (nil rated, exempted)",
    taxableValue: "₹1,23,000",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    nature: "Inward supplies (liable to reverse charge)",
    taxableValue: "₹4,500",
    cgst: "₹2,025",
    sgst: "₹2,025",
    igst: "₹0",
    cess: "₹0",
  },
  {
    nature: "Non-GST outward supplies",
    taxableValue: "₹0",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    isTotal: true,
    nature: "Total",
    taxableValue: "₹32,94,100",
    cgst: "₹1,86,565",
    sgst: "₹1,86,565",
    igst: "₹13,500",
    cess: "₹0",
  },
];
