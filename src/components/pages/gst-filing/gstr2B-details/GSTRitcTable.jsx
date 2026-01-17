"use client";

import BasicTable from "@/components/common/BasicTable";
import {
  itcAvailablePartAColumns,
  itcAvailablePartAData,
} from "../../../../config/itcAvailable";
import {
  itcReversalPartBColumns,
  itcReversalPartBData,
} from "../../../../config/itcReversal";
import {
  netItcColumns,
  netItcData,
} from "../../../../config/netItcAvailable";

const GSTRitcTable = () => {
  return (
    <div>
        <div className="mt-6 bg-white rounded-t-2xl">
      <h3 className="p-4 text-sm font-semibold text-[#1E1E1E]">
        Part A – Details of ITC Available
      </h3>

      <BasicTable
        columns={itcAvailablePartAColumns}
        data={itcAvailablePartAData}
        pagination={false}
        wrapperClassName="rounded-b-2xl"
      />
    </div>
    <div className="mt-6 bg-white rounded-t-2xl">
      <h3 className="p-4 text-sm font-semibold text-[#1E1E1E]">
        Part B – ITC Reversal / Ineligible Credits
      </h3>

      <BasicTable
        columns={itcReversalPartBColumns}
        data={itcReversalPartBData}
        pagination={false}
        wrapperClassName="rounded-b-2xl"
      />
    </div>
    <div className="mt-6 bg-white rounded-t-2xl">
      <h3 className="p-4 text-sm font-semibold text-[#1E1E1E]">
        Net ITC Available for the Period
      </h3>

      <BasicTable
        columns={netItcColumns}
        data={netItcData}
        pagination={false}
        wrapperClassName="rounded-xl"
      />
    </div>
    </div>
  );
};

export default GSTRitcTable;
