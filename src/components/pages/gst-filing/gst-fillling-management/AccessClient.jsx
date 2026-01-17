"use client"
import Heading from '@/components/atoms/Heading'
import Input from '@/components/common/Input'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Downloadbtn } from "../../../atoms/Icons";
import {
    GST_CLIENT_COLUMNS,
    GST_CLIENT_DATA,
} from "../../../../config/gstClients";
import React from 'react'
import BasicTable from '@/components/common/BasicTable';

const AccessClient = () => {
    return (
        <div>
            <div>
                <p className="flex items-center gap-1 font-inter font-normal text-[0.75rem] tracking-[-0.006rem] text-[#6A7282]">
                    <span>Admin Panel</span>
                    <ChevronRight size={12} />
                    <span>GST Filing</span>
                    <ChevronRight size={12} />
                    <span>Client Section</span>
                </p>

                <Heading
                    title="GST – Client Selection"
                    paragraph="Select a client to access their GST account"
                    actions={[
                        {
                            text: "Back",
                            variant: "outline",
                            route: "",
                            icon: <ArrowLeft size={14} />,
                            onClick: () => console.log("Back"),
                        },
                    ]}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-5 bg-white p-4 rounded-xl">

                <Input
                    label="Search"
                    placeholder="Search by GSTIN / Trade Name"
                    icon="ri-search-line"
                    className='border border-gray-300 h-11'
                    type="text"
                />
                <Input
                    label="State"
                    type="select"
                    placeholder="Select State"
                    className='border border-gray-300 h-11'
                    icon="none"
                    options={[
                        { label: "Maharashtra", value: "MH" },
                        { label: "Gujarat", value: "GJ" },
                        { label: "Delhi", value: "DL" },
                    ]}
                    labelKey="label"
                    valueKey="value"
                />
                <Input
                    label="GST State"
                    type="select"
                    placeholder="GST Status"
                    icon="none"
                    className='border border-gray-300 h-11'
                    options={[
                        { label: "Active", value: "active" },
                        { label: "Inactive", value: "inactive" },
                        { label: "Cancelled", value: "cancelled" },
                    ]}
                    labelKey="label"
                    valueKey="value"
                />

            </div>
            <div className='mt-5'>
                <div className='bg-white p-4 rounded-t-2xl'>
                    <h1>Registered Clients (8)</h1>
                </div>
                <BasicTable
                    columns={GST_CLIENT_COLUMNS}
                    data={GST_CLIENT_DATA}
                    actions={[Downloadbtn]}
                    wrapperClassName="rounded-b-2xl"
                    pagination
                    total={GST_CLIENT_DATA.length}
                    pageSize={10}
                />
            </div>
        </div>
    )
}

export default AccessClient
