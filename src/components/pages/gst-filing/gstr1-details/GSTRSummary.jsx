
import InfoCard from '@/components/molecules/InfoCard';
import React from 'react'

const GSTRSummary = () => {
  return (
    <div className='mt-5'>
      <InfoCard
  variant="summary"
  title="GSTR-1 Summary for March 2024"
  items={[
    { label: "Total Invoices", value: "231" },
    { label: "Total Taxable Value", value: "₹24,47,200" },
    { label: "Total Tax", value: "₹2,96,154" },
  ]}
/>


      <div className="bg-white rounded-xl mt-5 border border-gray-300 p-4 sm:p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">
          Return Sections
        </h3>

        <div className="space-y-3">
          {RETURN_SECTIONS.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
            >
              <div>
                <p className="font-inter font-normal text-[0.875rem] tracking-[-0.009375rem]text-gray-900">
                  {item.title}
                </p>
                <p className="mt-1 font-inter font-normal text-[0.75rem] tracking-[0rem] text-gray-500">
                  {item.description}
                </p>
              </div>

              <i className="ri-arrow-right-s-line text-xl text-gray-400" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default GSTRSummary



const RETURN_SECTIONS = [
  {
    title: "B2B Invoices - 4A, 4B, 4C, 6B, 6C",
    description: "45 Records | Taxable Value: ₹8,45,600 | Tax: ₹1,52,208",
  },
  {
    title: "B2C (Large) Invoices - 5A, 5B",
    description: "12 Records | Taxable Value: ₹2,85,400 | Tax: ₹51,372",
  },
  {
    title: "B2C (Small) Invoices - 7",
    description: "156 Records | Taxable Value: ₹4,56,800 | Tax: ₹82,224",
  },
  {
    title: "Credit/Debit Notes (Registered) - 9B",
    description: "3 Records | Taxable Value: ₹45,200 | Tax: ₹8,136",
  },
  {
    title: "Credit/Debit Notes (Unregistered) - 9B",
    description: "2 Records | Taxable Value: ₹12,300 | Tax: ₹2,214",
  },
  {
    title: "Exports Invoices - 6A",
    description: "8 Records | Taxable Value: ₹6,78,900 | Tax: ₹0",
  },
  {
    title: "Nil Rated, Exempted and Non-GST Supplies - 8",
    description: "5 Records | Taxable Value: ₹1,23,000 | Tax: ₹0",
  },
  {
    title: "HSN-wise Summary of Outward Supplies - 12",
    description: "0 Records | Taxable Value: - | Tax: -",
  },
  {
    title: "HSN-wise Summary of Outward Supplies - 12",
    description: "231 Records | Taxable Value: - | Tax: -",
  },
];