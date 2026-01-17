import Heading from '@/components/atoms/Heading'
import Badge from '@/components/common/Badge'
import Input from '@/components/common/Input'
import InfoCard from '@/components/molecules/InfoCard'
import InformationCard from '@/components/molecules/InformationCard'
import React from 'react'

const GSTR9Detils = () => {
    return (
        <div>
            <div className='bg-white rounded-md p-4 border border-gray-300 mt-7'>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Heading
                            title="GSTR-9 - Annual Return"
                            paragraph="Consolidated summary of outward and inward supplies for the financial year"
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
                            label: "Financial Year",
                            value: "2023-2024",
                        },
                        {
                            label: "Filing Status",
                            value: "Filed",
                            isBadge: true,
                        },
                        {
                            label: "Filed Date",
                            value: "2024-12-31",
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
                    title="About GSTR-2B"
                    type="purple"
                    layout="stacked"
                >
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Annual Return to be filed once for each financial year.</li>
                        <li>Due date: 31st December of the following financial year</li>
                        <li>Consolidates all GSTR-1 and GSTR-3B filed during the year</li>
                        <li>Mandatory for taxpayers with annual turnover above ₹2 crore</li>
                        <li>Contains reconciliation of annual figures</li>
                    </ul>
                </InformationCard>
            </div>



            <div className="rounded-xl bg-[linear-gradient(135deg,#FFF7ED_0%,#FFEDD4_100%)] px-4 py-5 mt-5 border border-[#E9D4FF] sm:px-6">
                <p className="text-[13px] font-medium text-[#7E2A0C] mb-4">
                    GSTR-9 Summary for FY 2023-2024
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <div>
                        <p className="text-[12px] text-[#CA3500]">Annual Turnover</p>
                        <p className="text-lg font-semibold text-black">₹2.85 Cr</p>
                    </div>

                    <div>
                        <p className="text-[12px] text-[#CA3500]">Total Tax Liability</p>
                        <p className="text-lg font-semibold text-black">₹5,47,280</p>
                    </div>

                    <div>
                        <p className="text-[12px] text-[#CA3500]">Total ITC Claimed</p>
                        <p className="text-lg font-semibold text-[#00A63E]">₹2,74,620</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#CA3500]">Net Tax Paid</p>
                        <p className="text-lg font-semibold text-black">₹2,72,660</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GSTR9Detils
