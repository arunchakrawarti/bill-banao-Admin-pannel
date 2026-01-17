"use client"; 
import BasicTable from '@/components/common/BasicTable'
import React from 'react'
import { outwardSuppliesConfig } from "../../../../config/Supplies";
import { table5Config, table6Config } from "../../../../config/InwordSupplies";

const GSTR4Table = () => {
  return (
    <div>
      <div className=" bg-white rounded-2xl mt-5">
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-700">
            Table 4 - Details of Outward Supplies made during the Quarter
          </h2>
        </div>

        <BasicTable
          columns={outwardSuppliesConfig.columns}
          data={outwardSuppliesConfig.data}
          pagination={false} 
          wrapperClassName="rounded-none border-x-0" 
        />
      </div>
     <div className="flex flex-col gap-8 ">
      
      {/* Table 5 */}
      <div className=' bg-white mt-5  rounded-2xl'>
        <div className='p-4'>
            <h2 className="text-[1rem] font-medium text-gray-700 mb-3">
          Table 5 - Inward Supplies on which tax is payable on reverse charge basis
        </h2>
        </div>
        <BasicTable
          columns={table5Config.columns}
          data={table5Config.data}
          pagination={false}
          wrapperClassName="rounded-none border-x-0 shadow-none border-b-0"
        />
      </div>
      <div className='bg-white mt-5  rounded-2xl'>
        <div className='p-4'>
            <h2 className="text-[1rem] font-medium text-gray-700 mb-3">
          Table 6 - Payment of Tax
        </h2>
        </div>
        <BasicTable
          columns={table6Config.columns}
          data={table6Config.data}
          pagination={false}
          wrapperClassName="rounded-none border-x-0 shadow-none"
        />
      </div>

    </div>
    </div>
  )
}

export default GSTR4Table