export const OUTWARD_SUPPLIES_CONFIG = {
  title:
    "Part II - Details of Outward Supplies made during the Financial Year",

  columns: [
    {
      label: "Nature of Supplies",
      key: "nature",
    },
    {
      label: "Taxable Value",
      key: "taxableValue",
    },
    {
      label: "CGST",
      key: "cgst",
    },
    {
      label: "SGST",
      key: "sgst",
    },
    {
      label: "IGST",
      key: "igst",
    },
    {
      label: "CESS",
      key: "cess",
    },
  ],

  data: [
    {
      nature: "Taxable supplies (B2B + B2C)",
      taxableValue: "₹2,45,60,000",
      cgst: "₹1,84,200",
      sgst: "₹1,84,200",
      igst: "₹1,82,000",
      cess: "₹0",
    },
    {
      nature: "Zero-rated supplies (Exports)",
      taxableValue: "₹38,40,000",
      cgst: "₹0",
      sgst: "₹0",
      igst: "₹0",
      cess: "₹0",
    },
    {
      nature: "Exempted supplies",
      taxableValue: "₹1,23,000",
      cgst: "₹0",
      sgst: "₹0",
      igst: "₹0",
      cess: "₹0",
    },
    {
      nature: "Total",
      taxableValue: "₹2,85,23,000",
      cgst: "₹1,84,200",
      sgst: "₹1,84,200",
      igst: "₹1,82,000",
      cess: "₹0",
    },
  ],
};
