"use client";
import BasicTable from "@/components/common/BasicTable";
import {
  b2bInvoiceColumns,
  b2bInvoiceData,
} from "../../../../config/b2bInvoice";
import {
  cdnNotesColumns,
  cdnNotesData,
} from "../../../../config/cdnNotes";
import Button from "@/components/common/Button";

const B2BInvoicesTable = () => {
  return (
    <div className="space-y-6 mt-6 ">

      {/* B2B Invoices */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <h3 className="text-sm font-semibold text-[#1E1E1E]">
            B2B – Invoices from Registered Suppliers
          </h3>

          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Download Excel
          </Button>
        </div>

        <div className="overflow-x-auto">
          <BasicTable
            columns={b2bInvoiceColumns}
            data={b2bInvoiceData}
            pagination={false}
            wrapperClassName="min-w-[600px] rounded-xl"
          />
        </div>
      </div>

      {/* CDN Notes */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <h3 className="text-sm font-semibold text-[#1E1E1E]">
            CDN – Credit/Debit Notes (Registered)
          </h3>

          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Download Excel
          </Button>
        </div>

        <div className="overflow-x-auto">
          <BasicTable
            columns={cdnNotesColumns}
            data={cdnNotesData}
            pagination={false}
            wrapperClassName="min-w-[600px] rounded-xl"
          />
        </div>
      </div>

      {/* ITC Available Summary */}
      <div className="border border-dashed border-blue-300 rounded-xl bg-white p-4">
        <h3 className="text-sm font-semibold text-[#1E1E1E] mb-4">
          ITC Available Summary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-3 bg-white">
            <p className="text-xs text-gray-500 mb-1">CGST</p>
            <p className="text-sm font-semibold text-green-600">₹71,225</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-3 bg-white">
            <p className="text-xs text-gray-500 mb-1">SGST</p>
            <p className="text-sm font-semibold text-green-600">₹71,225</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-3 bg-white">
            <p className="text-xs text-gray-500 mb-1">IGST</p>
            <p className="text-sm font-semibold text-green-600">₹86,400</p>
          </div>

          <div className="border border-green-200 rounded-lg p-3 bg-green-50">
            <p className="text-xs text-gray-500 mb-1">Total ITC</p>
            <p className="text-sm font-semibold text-green-700">₹2,28,850</p>
          </div>
        </div>
       <div className="mt-4 flex flex-wrap gap-3">
  <Button className="w-full sm:w-auto" variant="danger">Download GSTR-2A</Button>
  <Button className="w-full sm:w-auto" variant="outline">View Detailed Report</Button>
  <Button className="w-full sm:w-auto" variant="secondary">Save Offline</Button>
  <Button className="w-full sm:w-auto" variant="outline">Refresh from Portal</Button>
</div>

      </div>
    </div>
  );
};

export default B2BInvoicesTable;
