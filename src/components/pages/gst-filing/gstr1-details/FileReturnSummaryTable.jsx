import React from 'react'
import BasicTable from "@/components/common/BasicTable";
import { sectionWiseSummaryConfig } from "../../../../config/fileSummaryTable";
import { hsnWiseSummaryConfig } from "../../../../config/hsnWiseSummary";
import Button from '@/components/common/Button';

const summaryData = [
  {
    label: "Total Taxable Value",
    value: "₹16,45,000",
    color: "text-blue-600",
  },
  {
    label: "Total CGST",
    value: "₹54,240",
    color: "text-green-600",
  },
  {
    label: "Total SGST",
    value: "₹54,240",
    color: "text-green-600",
  },
  {
    label: "Total IGST",
    value: "₹2,34,000",
    color: "text-purple-600",
  },
  {
    label: "Total Tax Amount",
    value: "₹3,42,480",
    color: "text-indigo-600",
  },
];

const FileReturnSummaryTable = ({onClose}) => {
    return (
        <div className='mt-5'>
            <div className='bg-white border border-gray-300 rounded-t-2xl'>
                <h1 className='font-inter  font-normal text-[0.875rem] p-4 tracking-[-0.009375rem]'>Section-wise Summary of Outward Supplies</h1>

            <BasicTable
                columns={sectionWiseSummaryConfig.columns}
                data={sectionWiseSummaryConfig.data}
                pagination={false}
                wrapperClassName="rounded-b-2xl"
            />
            </div>
  <div className="grid grid-cols-1 mt-5 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <p className="text-xs text-gray-500">
            {item.label}
          </p>

          <p
            className={`mt-1 font-inter font-medium text-[0.875rem] leading-[1.25rem] ${item.color}`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
    <div className="space-y-3 rounded-t-2xl mt-5 bg-white border border-gray-300">
      <p className="text-sm p-4 font-medium text-gray-900">
        HSN-wise Summary of Outward Supplies (Table 12)
      </p>

      <BasicTable
        columns={hsnWiseSummaryConfig.columns}
        data={hsnWiseSummaryConfig.data}
        pagination={false}
        wrapperClassName="rounded-b-2xl"
      />
    </div>
     <div className="space-y-4">

      {/* Important Notes Box */}
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 mt-5 px-4 py-3">
        <p className="text-sm font-medium text-yellow-800 mb-2">
          Important Notes:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[13px] leading-relaxed text-yellow-800">
          <li>
            This is a system generated summary based on the filed GSTR-1 return
          </li>
          <li>
            ARN can be used to track the status of your return on the GST portal
          </li>
          <li>
            Keep this summary for your records and future reference
          </li>
          <li>
            Any amendments must be filed in the subsequent tax period
          </li>
          <li>
            Download and save a copy of this summary before closing
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between border-t pt-4">

        {/* Left Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button variant="danger" className="flex items-center gap-2">
            <i className="ri-download-2-line" />
            Download PDF
          </Button>

          <Button variant="success" className="flex items-center gap-2">
            <i className="ri-file-excel-2-line" />
            Download Excel
          </Button>

          <Button variant="outline" className="flex items-center gap-2">
            <i className="ri-printer-line" />
            Print
          </Button>

          <Button variant="outline" className="flex items-center gap-2">
            <i className="ri-mail-line" />
            Email Summary
          </Button>
        </div>

        {/* Right Action */}
        <Button
          variant="outline"
          onClick={onClose}
          className="self-start sm:self-auto"
        >
          Close
        </Button>
      </div>
    </div>
        </div>
    )
}

export default FileReturnSummaryTable
