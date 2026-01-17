"use client"
import Heading from '@/components/atoms/Heading'
import Input from '@/components/common/Input'
import InfoCard from '@/components/molecules/InfoCard';

import InformationCard from '@/components/molecules/InformationCard'
import { Calculator } from "lucide-react";
import React from 'react'

const GSTRMonthyReturn = () => {
  return (
    <div>
      <div className="bg-white p-4 sm:p-5 rounded-xl mt-5 sm:mt-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex-1">
            <Heading
              title="GSTR-3B - Monthly Return"
              paragraph="Summary return for payment of self-assessed tax"
            />
          </div>

          <div className="w-full sm:w-48">
            <Input
              type="date"
              icon="none"
              className="w-full border border-gray-300"
            />
          </div>
        </div>

        <InfoCard
          type="bar"
          border={false}
          items={infoData}
        />
      </div>
      <div className="mt-5">
        <InformationCard
          type="info"
          icon="ri-information-line"
          title="Note:"
          description="This is a view-only replica of GSTR-1 return. The data shown here is for tracking and reference purposes only."
          inlineDescription={false}
        />
      </div>

      <div>
        <div className='mt-5'>
          <InfoCard
            title="Tax Liability Summary for March 2024"
            variant="purple"
            iconName="calculator"
            items={[
              { label: "CGST", value: "₹18,240" },
              { label: "SGST", value: "₹18,240" },
              { label: "IGST", value: "₹9,120" },
              { label: "Total Tax Payable", value: "₹45,600" },
            ]}
          />

        </div>


      </div>
    </div>
  )
}

export default GSTRMonthyReturn


const infoData = [
  { label: "Return Period", value: "March 2024" },
  { label: "Filing Status", value: "Filed", isBadge: true },
  { label: "Filed Date", value: "2024-04-10" },
  { label: "ARN", value: "AA291020241234567", isLink: true },
];