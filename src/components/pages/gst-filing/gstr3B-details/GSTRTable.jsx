"use client";
import BasicTable from "@/components/common/BasicTable";
import {
  eligibleItcColumns,
  eligibleItcData,
} from "../../../../config/eligibleItc";
import {
  paymentOfTaxColumns,
  paymentOfTaxData,
} from "../../../../config/paymentTax";
import {
  outwardTaxColumns,
  outwardTaxData,
} from "../../../../config/taxOutwardSupplies";

import Button from "@/components/common/Button";

const GSTRTable = () => {
 

  return (
    <div>
        <div className="mt-6 bg-white rounded-t-2xl">
  <h3 className=" p-4 text-sm font-semibold text-[#1E1E1E]">
    3.1 – Tax on outward and reverse charge inward supplies
  </h3>

  <BasicTable
    columns={outwardTaxColumns}
    data={outwardTaxData}
    pagination={false}
    wrapperClassName="rounded-b-2xl"
  />
</div>
     <div className="mt-6 bg-white rounded-t-2xl">
      <h3 className="text-sm p-4 font-semibold text-[#1E1E1E]">
        4 – Eligible ITC (Input Tax Credit)
      </h3>

      <BasicTable
        columns={eligibleItcColumns}
        data={eligibleItcData}
        pagination={false}
        wrapperClassName="rounded-b-2xl"
      />
    </div>
    <div className="mt-6 bg-white p-4 rounded-2xl">
      <h3 className="mb-3 text-sm font-semibold text-[#1E1E1E]">
        5 – Values of exempt, nil-rated and non-GST inward supplies
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-lg bg-white p-4">
          <p className="text-xs text-gray-500 mb-1">
            From a supplier under composition scheme, Exempt and Nil rated supply
          </p>
          <p className="text-sm font-semibold text-[#1E1E1E]">
            ₹1,23,000
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-lg bg-white p-4">
          <p className="text-xs text-gray-500 mb-1">
            Non GST supply
          </p>
          <p className="text-sm font-semibold text-[#1E1E1E]">
            ₹0
          </p>
        </div>
      </div>
    </div>
    <div className="mt-6 bg-white rounded-t-2xl ">
      <h3 className="text-sm p-4 font-semibold text-[#1E1E1E]">
        6 – Payment of Tax
      </h3>

      <BasicTable
        columns={paymentOfTaxColumns}
        data={paymentOfTaxData}
        pagination={false}
        wrapperClassName="rounded-b-2xl "
      />
 </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="danger">Download GSTR-3B</Button>
        <Button variant="outline">View Summary</Button>
        <Button variant="secondary">Save Offline</Button>
        <Button variant="danger">Send for approval</Button>
      </div>
   
    </div>
  );
};

export default GSTRTable;
