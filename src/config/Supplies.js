export const outwardSuppliesConfig = {
  columns: [
    {
      label: "NATURE OF SUPPLIES",
      key: "natureOfSupplies",
    },
    {
      label: "TURNOVER",
      key: "turnover",
      // Currency format ke liye render function
      render: (val) => `₹${val.toLocaleString("en-IN")}`,
    },
    {
      label: "RATE",
      key: "rate",
      render: (val) => (val === null ? "-" : `${val}%`),
    },
    {
      label: "TAX AMOUNT",
      key: "taxAmount",
      render: (val) => `₹${val.toLocaleString("en-IN")}`,
    },
  ],
  data: [
    {
      natureOfSupplies: "Intra-State taxable supplies",
      turnover: 1180000,
      rate: 1,
      taxAmount: 11800,
    },
    {
      natureOfSupplies: "Exempted supplies",
      turnover: 65000,
      rate: 0,
      taxAmount: 0,
    },
    {
      natureOfSupplies: "Inter-State supplies",
      turnover: 0,
      rate: null, // Image mein '-' hai
      taxAmount: 0,
    },
    {
      natureOfSupplies: <b>Total</b>, // Total row ko bold dikhane ke liye
      turnover: 1245000,
      rate: null,
      taxAmount: 11800,
    },
  ],
};