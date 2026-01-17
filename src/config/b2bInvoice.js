export const b2bInvoiceColumns = [
  {
    label: "GSTIN of Supplier",
    key: "gstin",
  },
  {
    label: "Trade Name",
    key: "tradeName",
  },
  {
    label: "Invoice Number",
    key: "invoiceNumber",
  },
  {
    label: "Invoice Date",
    key: "invoiceDate",
  },
  {
    label: "Taxable Value",
    key: "taxableValue",
  },
  {
    label: "CGST",
    key: "cgst",
    render: (value) => (
      <span className="text-green-600 font-medium">{value}</span>
    ),
  },
  {
    label: "SGST",
    key: "sgst",
    render: (value) => (
      <span className="text-green-600 font-medium">{value}</span>
    ),
  },
  {
    label: "IGST",
    key: "igst",
    render: (value) => (
      <span className="text-green-600 font-medium">{value}</span>
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

export const b2bInvoiceData = [
  {
    gstin: "29AAACT3321Z5",
    tradeName: "ABC Suppliers Ltd",
    invoiceNumber: "SINV-2024-101",
    invoiceDate: "2024-03-05",
    taxableValue: "₹1,50,000",
    cgst: "₹13,500",
    sgst: "₹13,500",
    igst: "₹0",
    total: "₹1,77,000",
  },
  {
    gstin: "27AABCU9630R1Z",
    tradeName: "XYZ Trading Co",
    invoiceNumber: "SINV-2024-102",
    invoiceDate: "2024-03-08",
    taxableValue: "₹2,00,000",
    cgst: "₹18,000",
    sgst: "₹18,000",
    igst: "₹0",
    total: "₹2,36,000",
  },
  {
    gstin: "06AACCG0082R2M",
    tradeName: "PQR Enterprises",
    invoiceNumber: "SINV-2024-103",
    invoiceDate: "2024-03-12",
    taxableValue: "₹1,20,000",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹21,600",
    total: "₹1,41,600",
  },
  {
    gstin: "33AAACT3321Z1E",
    tradeName: "LMN Services",
    invoiceNumber: "SINV-2024-104",
    invoiceDate: "2024-03-15",
    taxableValue: "₹80,000",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹14,400",
    total: "₹94,400",
  },
  {
    isTotal: true,
    gstin: "Total",
    tradeName: "",
    invoiceNumber: "",
    invoiceDate: "",
    taxableValue: "₹5,50,000",
    cgst: "₹31,500",
    sgst: "₹31,500",
    igst: "₹36,000",
    total: "₹6,49,000",
  },
];
