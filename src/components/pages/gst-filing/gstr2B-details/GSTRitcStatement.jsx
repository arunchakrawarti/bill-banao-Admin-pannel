import Heading from '@/components/atoms/Heading'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'
import InfoCard from '@/components/molecules/InfoCard'
import InformationCard from '@/components/molecules/InformationCard'
import React from 'react'

const GSTRitcStatement = () => {
    return (
        <div>
            <div className='bg-white rounded-md p-4 border border-gray-300 mt-7'>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Heading
                        title="GSTR-2A - Auto-drafted ITC Statement"
                        paragraph="Auto-populated details of inward supplies (Read Only)"
                    />

                    <Input
                        type="date"
                        icon="none"
                        className="w-full sm:w-auto border border-gray-300"
                    />
                </div>
              <div className='mt-5'>
                 <InfoCard
  type="bar"
  items={filingInfo}
  border={false} 
/>
              </div>

            </div>
          <div className='mt-5'>
             <InformationCard
  title="About GSTR-2B"
  layout="stacked"
  type="success"
>
  <ul className="list-disc pl-5 space-y-1 text-[13px] leading-relaxed text-[#016633]">
    <li>This is a system generated summary based on the filed GSTR-1 return</li>
    <li>ARN can be used to track the status of your return on the GST portal</li>
    <li>Keep this summary for your records and future reference</li>
    <li>Any amendments must be filed in the subsequent tax period</li>
    <li>Download and save a copy of this summary before closing</li>
  </ul>
</InformationCard>
          </div>
          <div className='mt-5'>
             <InfoCard
  title="GSTR-2A Summary for March 2024"
  variant="blueGradient"
  items={[
    { label: "Total Documents", value: "₹189", labelColor: "#432DD7" },
    { label: "Eligible ITC", value: "₹2,28,850", variant: "success", labelColor: "#007595" },
    { label: "Ineligible ITC", value: "₹12,300", variant: "danger", labelColor: "#007595" },
    { label: "ITC on RCM", value: "₹4,050", labelColor: "#007595" },
    { label: "Net ITC", value: "₹2,16,550", labelColor: "#007595" },
  ]}
/>
          </div>
        </div>
    )
}

export default GSTRitcStatement

const filingInfo = [
  { label: "Return Period", value: "March 2024" },
  { label: "Filing Status", value: "Filed", isBadge: true },
  { label: "Filed Date", value: "2024-04-10" },
  { label: "ARN", value: "AA291020241234567", isLink: true },
];