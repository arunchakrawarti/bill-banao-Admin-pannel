import Heading from '@/components/atoms/Heading'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import InfoCard from '@/components/molecules/InfoCard'
import InformationCard from '@/components/molecules/InformationCard'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GSTR4Details = () => {
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
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Heading
                            title="GSTR-4 - Quarterly Return (Composition Scheme)"
                            paragraph="Return for taxpayers registered under Composition Scheme"
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            icon="none"
                            className="w-full sm:w-auto border border-gray-300"
                        />
                    </div>
                </div>
                <InfoCard
                    type="bar"
                    layout="single"
                    border={false}
                    items={[
                        {
                            label: "Quarter",
                            value: "Q4 (Jan-Mar 2024)",
                        },
                        {
                            label: "Filing Status",
                            value: "Filed",
                            isBadge: true,
                        },
                        {
                            label: "Filed Date",
                            value: "2024-04-18",
                        },
                        {
                            label: "ARN",
                            value: "AA291020241234567",
                            isLink: true,
                        },
                    ]}
                />


            </div>

            <div className='mt-5'>
                <InformationCard
                    title="Composition Scheme"
                    type="purple"
                    layout="stacked"
                >
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Simplified tax scheme for small taxpayers with reduced compliance.</li>
                        <li>Quarterly return filing instead of monthly</li>
                        <li>Fixed tax rate (1% for traders, 5% for restaurants, 6% for manufacturers)</li>
                        <li>No Input Tax Credit (ITC) available</li>
                        <li>Turnover limit: ₹1.5 crore (₹75 lakh for special category states)</li>
                        <li>Cannot make inter-state supplies</li>
                    </ul>
                </InformationCard>
            </div>


          

           <div className='mt-5'>
             <InfoCard
                title="GSTR-4 Summary for Q4 (Jan-Mar 2024)"
                variant="summary"
                items={[
                    {
                        label: "Annual Turnover",
                        value: "₹12,45,000",
                    },
                    {
                        label: "Total Turnover",
                        value: "₹11,80,000",
                    },
                    {
                        label: "Tax Rate",
                        value: "1%",
                    },
                    {
                        label: "Tax Payable",
                        value: "₹11,800",
                    },
                ]}
            />
           </div>

        </div>
    )
}

export default GSTR4Details
