import React from 'react'
import { OUTWARD_SUPPLIES_CONFIG } from "../../../../config/outwardSupplies";
import {
  itcReversalPartBColumns,
  itcReversalPartBData,
} from "../../../../config/itcAvailed";
import BasicTable from '@/components/common/BasicTable';
import InfoCard from '@/components/molecules/InfoCard';

const GSTRBasicDetails = () => {
  const { title, columns, data } = OUTWARD_SUPPLIES_CONFIG;
  return (
    <div>
      <div className="w-full bg-white mt-5 rounded-xl border border-slate-200 p-4 sm:p-5">

        <h3 className="text-sm font-semibold text-slate-800 mb-4">
          Part 1 - Basic Details
        </h3>


        <InfoCard
  type="bar"
  layout="single"
  border={false}
  items={[
    {
      label: "GSTIN",
      value: "29ABCDE1234F1Z5",
    },
    {
      label: "Legal Name",
      value: "Tech Solutions Private Limited",
    },
    {
      label: "Trade Name",
      value: "Tech Solutions Pvt. Ltd.",
    },
    {
      label: "Financial Year",
      value: "2023 - 2024",
    },
  ]}
/>

      </div>
      <div className="w-full bg-white rounded-xl border mt-5 border-gray-200">

        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">
            {title}
          </h3>
        </div>


        <BasicTable
          columns={columns}
          data={data}
          pagination={false}
          wrapperClassName="rounded-none border-0 shadow-none"
        />
      </div>

      <div className="w-full bg-white rounded-xl border mt-5 border-gray-200">

        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">
            Part III - Details of ITC availed during the Financial Year
          </h3>
        </div>


        <BasicTable
          columns={itcReversalPartBColumns}
          data={itcReversalPartBData}
          wrapperClassName="rounded-none border-0 shadow-none"
        />
      </div>

    </div>
  )
}

export default GSTRBasicDetails
