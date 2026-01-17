import Badge from "@/components/common/Badge";


export const GST_TABLE_COLUMNS = [
  { label: "Month", key: "month" },
  { label: "GSTR-1", key: "gstr1" },
  { label: "GSTR-3B", key: "gstr3b" },
  { label: "Tax Liability", key: "liability" },
  {
    label: "Tax Paid",
    key: "paid",
    render: (val) => (
      <span className={val !== "₹0" ? "text-green-600" : ""}>{val}</span>
    ),
  },
  { label: "Filing Date", key: "date" },
  { label: "Status", key: "status" },
];


export const GST_TABLE_DATA = [
  {
    month: "March 2024",
    gstr1: <Badge text="Filed" />,
    gstr3b: <Badge text="Filed" />,
    liability: "₹45,600",
    paid: "₹45,600",
    date: "2024-04-10",
    status: <Badge text="Filed" />,
  },
  {
    month: "February 2024",
    gstr1: <Badge text="Filed" />,
    gstr3b: <Badge text="Filed" />,
    liability: "₹38,200",
    paid: "₹38,200",
    date: "2024-03-11",
    status: <Badge text="Filed" />,
  },
  {
    month: "January 2024",
    gstr1: <Badge text="Filed" />,
    gstr3b: <Badge text="Pending" />,
    liability: "₹52,300",
    paid: "₹0",
    date: "2024-02-09",
    status: <Badge text="Pending" />,
  },
  {
    month: "December 2023",
    gstr1: <Badge text="Filed" />,
    gstr3b: <Badge text="Filed" />,
    liability: "₹41,900",
    paid: "₹41,900",
    date: "2024-01-12",
    status: <Badge text="Filed" />,
  },
  {
    month: "November 2023",
    gstr1: <Badge text="Not Filed" />,
    gstr3b: <Badge text="Not Filed" />,
    liability: "₹0",
    paid: "₹0",
    date: "-",
    status: <Badge text="Not Filed" />,
  },
];


export const LAST_MONTH_TAX = {
  month: "March 2024",
  breakdown: [
    { label: "CGST", value: "₹18,240" },
    { label: "SGST", value: "₹18,240" },
    { label: "IGST", value: "₹9,120" },
    { label: "Late Fee", value: "₹0" },
  ],
  total: "₹45,600",
};

export const PAYMENT_STATUS = {
  month: "March 2024",
  payable: "₹45,600",
  paid: "₹45,600",
  challan: "CHN202404010123",
  date: "2024-04-10",
  status: "Paid",
};
