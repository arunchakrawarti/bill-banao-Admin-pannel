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
    <div className="mt-6">
     <div>
         <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[#1E1E1E]">
          B2B – Invoices from Registered Suppliers
        </h3>

        <Button variant="outline" size="sm">
          Download Excel
        </Button>
      </div>

      <BasicTable
        columns={b2bInvoiceColumns}
        data={b2bInvoiceData}
        pagination={false}
        wrapperClassName="rounded-xl"
      />
     </div>
     <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[#1E1E1E]">
          CDN – Credit/Debit Notes (Registered)
        </h3>

        <Button variant="outline" size="sm">
          Download Excel
        </Button>
      </div>

      <BasicTable
        columns={cdnNotesColumns}
        data={cdnNotesData}
        pagination={false}
        wrapperClassName="rounded-xl"
      />
    </div>
     <div className="mt-6 border border-dashed border-blue-300 rounded-xl bg-white p-4">
      {/* Header */}
      <h3 className="text-sm font-semibold text-[#1E1E1E] mb-4">
        ITC Available Summary
      </h3>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="danger">Download GSTR-2A</Button>
        <Button variant="outline">View Detailed Report</Button>
        <Button variant="secondary">Save Offline</Button>
        <Button variant="outline">Refresh from Portal</Button>
      </div>
    </div>
    </div>
  );
};

export default B2BInvoicesTable;
