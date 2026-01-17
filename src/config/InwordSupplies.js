const formatCurrency = (val) => `₹${(val || 0).toLocaleString("en-IN")}`;

// --- Table 5 Config ---
export const table5Config = {
  columns: [
    { label: "NATURE OF SUPPLIES", key: "nature" },
    { label: "TAXABLE VALUE", key: "taxable", render: (v) => formatCurrency(v) },
    { label: "CGST", key: "cgst", render: (v) => formatCurrency(v) },
    { label: "SGST", key: "sgst", render: (v) => formatCurrency(v) },
    { label: "IGST", key: "igst", render: (v) => formatCurrency(v) },
    { label: "CESS", key: "cess", render: (v) => formatCurrency(v) },
  ],
  data: [
    { nature: "Supplies from unregistered persons", taxable: 25000, cgst: 1125, sgst: 1125, igst: 0, cess: 0 },
    { nature: "Other supplies attracting reverse charge", taxable: 0, cgst: 0, sgst: 0, igst: 0, cess: 0 },
    { nature: <b>Total</b>, taxable: 25000, cgst: 1125, sgst: 1125, igst: 0, cess: 0 },
  ],
};

// --- Table 6 Config ---
export const table6Config = {
  columns: [
    { label: "DESCRIPTION", key: "desc" },
    { label: "TAX PAYABLE", key: "payable", render: (v) => formatCurrency(v) },
    { 
      label: "PAID IN CASH", 
      key: "paid", 
      render: (v) => <span className="text-[#12B76A] font-semibold">{formatCurrency(v)}</span> 
    },
    { label: "INTEREST", key: "interest", render: (v) => formatCurrency(v) },
    { label: "LATE FEE", key: "lateFee", render: (v) => formatCurrency(v) },
  ],
  data: [
    { desc: "Tax on outward supplies (Composition)", payable: 11800, paid: 11800, interest: 0, lateFee: 0 },
    { desc: "CGST on Reverse Charge", payable: 1125, paid: 1125, interest: 0, lateFee: 0 },
    { desc: "SGST on Reverse Charge", payable: 1125, paid: 1125, interest: 0, lateFee: 0 },
    { desc: "IGST on Reverse Charge", payable: 0, paid: 0, interest: 0, lateFee: 0 },
    { desc: <b>Total Tax Paid</b>, payable: 14050, paid: 14050, interest: 0, lateFee: 0 },
  ],
};