import React from 'react'
import { taxPaidColumns, taxPaidData } from "../../../../config/taxPaid";
import BasicTable from '@/components/common/BasicTable';
import clsx from "clsx";
import Button from '@/components/common/Button';

const GSTR9Table = () => {
   
  return (
    <div>
      <div className="w-full bg-white rounded-xl border mt-5 border-gray-200">
     
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800">
         Part IV - Details of Tax Paid as declared in returns filed during the Financial Year
        </h3>
      </div>
 
      <BasicTable
      columns={taxPaidColumns}
      data={taxPaidData}
      wrapperClassName="rounded-none border-0 shadow-none"
    />
    </div>
     <div className="w-full p-4 sm:p-6 mt-7 bg-white rounded-xl shadow space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col justify-between"
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <p
              className={clsx(
                "mt-2 text-lg font-semibold",
                card.isHighlight ? "text-red-600" : "text-gray-900"
              )}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
          Download GSTR-9
        </Button>
        <Button variant="outline">View Audit Trail</Button>
        <Button variant="outline">Generate Reconciliation Report</Button>
        <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
          Save Offline
        </Button>
      </div>
    </div>
    </div>
  )
}

export default GSTR9Table

 const cards = [
    { label: "Total Taxable Turnover as per financial statements", value: "₹2,85,60,000" },
    { label: "Total Taxable Turnover as per GSTR-1", value: "₹2,85,23,000" },
    { label: "Difference (if any)", value: "₹37,000", isHighlight: true },
    { label: "Reason", value: "Timing difference in recognition" },
  ];