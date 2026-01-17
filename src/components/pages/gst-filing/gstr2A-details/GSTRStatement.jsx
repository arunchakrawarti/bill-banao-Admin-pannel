import Heading from '@/components/atoms/Heading'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import InfoCard from '@/components/molecules/InfoCard'
import InformationCard from '@/components/molecules/InformationCard'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GSTRStatement = () => {
  return (
    <div className='mt-5'>
       <Link href="/gst-filing">
      <Button
        variant="outline"
        className="flex items-center gap-2 w-fit"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to Dashboard
      </Button>
      </Link>
      <div className='bg-white rounded-md p-4 border border-gray-300 mt-7'>
        <div className="
  flex flex-col gap-4
  md:gap-6
  lg:flex-row lg:items-center lg:justify-between
">

          {/* LEFT : Heading */}
          <div className="w-full lg:w-auto">
            <Heading
              title="GSTR-2A - Auto-drafted ITC Statement"
              paragraph="Auto-populated details of inward supplies (Read Only)"
            />
          </div>

          {/* RIGHT : Inputs */}
          <div className="
    flex flex-col gap-3
    md:flex-row md:items-center md:justify-end
    lg:flex-row lg:items-center
  ">
            <Input
              type="date"
              icon="none"
              className="w-full md:w-[180px] lg:w-[180px] border border-gray-300"
            />
            <Input
              type="date"
              icon="none"
              className="w-full md:w-[180px] lg:w-[180px] border border-gray-300"
            />
          </div>

        </div>




        <InfoCard
          type="bar"
          border={false}
          items={filingDetails}
        />
      </div>

      <div className='mt-5'>
        <InformationCard
          title="Important"
          layout="stacked"
          type="warning"
        >
          <ul className="list-disc ml-4 space-y-1">
            <li>GSTR-2A is auto-populated from suppliers' GSTR-1 filings. This is a read-only view.</li>
            <li>Data is updated dynamically based on supplier filings.</li>
            <li>You cannot edit or modify this data.</li>
          </ul>
        </InformationCard>
      </div>

      <div className='mt-5'>
        <InfoCard
          title="GSTR-2A Summary for March 2024"
          variant="summary"
          border
          items={[
            { label: "Total Suppliers", value: "45" },
            { label: "Total Invoice", value: "178" },
            { label: "Total Taxable Value", value: "₹18,45,600" },
            { label: "Total ITC Available", value: "₹2,28,850" },
          ]}
        />
      </div>

    </div>
  )
}

export default GSTRStatement


const filingDetails = [
  { label: "Return Period", value: "March 2024" },
  { label: "Filing Status", value: "Filed", isBadge: true },
  { label: "Filed Date", value: "2024-04-10" },
  { label: "ARN", value: "AA291020241234567", isLink: true },
];