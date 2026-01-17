"use client"; 

import clsx from "clsx";

// Column configuration
export const taxPaidColumns = [
  { label: "DESCRIPTION", key: "description" },
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
  { label: "CESS", key: "cess" },
];

export const taxPaidData = [
  {
    description: "Tax paid through ITC",
    cgst: "₹81,220",
    sgst: "₹81,220",
    igst: "₹98,640",
    cess: "₹0",
  },
  {
    description: "Tax paid in cash",
    cgst: "₹1,02,980",
    sgst: "₹1,02,980",
    igst: "₹1,63,360",
    cess: "₹0",
  },
  {
    description: "Interest paid",
    cgst: "₹0",
    sgst: "₹0",
    igst: "₹0",
    cess: "₹0",
  },
  {
    description: "Late fee paid",
    cgst: "₹0",
    sgst: "₹0",
    igst: "-",
    cess: "-",
  },
  {
    isTotal: true,
    description: "Total Tax Paid",
    cgst: "₹1,84,200",
    sgst: "₹1,84,200",
    igst: "₹1,62,000",
    cess: "₹0",
  },
];
