// paymentOfTax.config.js

export const paymentOfTaxColumns = [
  {
    label: "Description",
    key: "description",
    render: (v, row) =>
      row.isTotal ? <span className="font-semibold">{v}</span> : v,
  },
  {
    label: "Tax Payable",
    key: "taxPayable",
    render: (v, row) =>
      row.isTotal ? <span className="font-semibold">{v}</span> : v,
  },
  {
    label: "Paid Through ITC",
    key: "paidItc",
    render: (v) => (
      <span className="text-green-600 font-medium">{v}</span>
    ),
  },
  {
    label: "Paid Through Cash",
    key: "paidCash",
  },
  {
    label: "Interest",
    key: "interest",
  },
  {
    label: "Late Fee",
    key: "lateFee",
  },
];

export const paymentOfTaxData = [
  {
    description: "CGST",
    taxPayable: "₹18,240",
    paidItc: "₹18,240",
    paidCash: "₹0",
    interest: "₹0",
    lateFee: "₹0",
  },
  {
    description: "SGST",
    taxPayable: "₹18,240",
    paidItc: "₹18,240",
    paidCash: "₹0",
    interest: "₹0",
    lateFee: "₹0",
  },
  {
    description: "IGST",
    taxPayable: "₹9,120",
    paidItc: "₹9,120",
    paidCash: "₹0",
    interest: "₹0",
    lateFee: "₹0",
  },
  {
    description: "Cess",
    taxPayable: "₹0",
    paidItc: "₹0",
    paidCash: "₹0",
    interest: "₹0",
    lateFee: "₹0",
  },
  {
    isTotal: true,
    description: "Total",
    taxPayable: "₹45,600",
    paidItc: "₹45,600",
    paidCash: "₹0",
    interest: "₹0",
    lateFee: "₹0",
  },
];
