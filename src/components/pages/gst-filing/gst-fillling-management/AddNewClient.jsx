"use client"
import React from 'react'
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { ArrowLeft, ChevronRight, Save } from "lucide-react";
import Heading from '@/components/atoms/Heading';

const AddNewClient = () => {
    return (
        <div>
            <div>
                <p className="flex items-center gap-1 font-inter font-normal text-[0.75rem] tracking-[-0.006rem] text-[#6A7282]">
                    <span>Admin Panel</span>
                    <ChevronRight size={12} />
                    <span>GST Filing</span>
                    <ChevronRight size={12} />
                    <span>Add New Client</span>
                </p>

                <Heading
                    title="GST – Add New Client"
                    paragraph="Register a new client for GST filing and management"
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

            <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-4">
                    <Input
                        label="GSTIN"
                        placeholder="Enter 15-character GSTIN"
                        icon="none"
                        className="border border-gray-300"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                        Example: 29ABCDE1234F1Z5
                    </p>
                </div>

                <div className="mb-4">
                    <Input
                        label="Legal Name"
                        placeholder="Enter legal business name"
                        icon="none"
                        className="border border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <Input
                        label="Trade Name"
                        placeholder="Enter trade name"
                        icon="none"
                        className="border border-gray-300"
                    />
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                        type="select"
                        label="Business Type"
                        icon="none"
                        className="border border-gray-300"
                        options={[
                            { label: "Proprietorship", value: "proprietorship" },
                            { label: "Partnership", value: "partnership" },
                            { label: "Private Limited", value: "pvt_ltd" },
                            { label: "LLP", value: "llp" },
                        ]}
                    />

                    <Input
                        type="select"
                        label="State"
                        icon="none"
                        className="border border-gray-300"
                        options={[
                            { label: "Karnataka", value: "KA" },
                            { label: "Maharashtra", value: "MH" },
                            { label: "Delhi", value: "DL" },
                            { label: "Tamil Nadu", value: "TN" },
                        ]}
                    />
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                        label="Registration Date"
                        type="date"
                        icon="none"
                        className="border border-gray-300"
                    />

                    <Input
                        type="select"
                        label="Filing Frequency"
                        icon="none"
                        className="border border-gray-300"
                        options={[
                            { label: "Monthly", value: "monthly" },
                            { label: "Quarterly", value: "quarterly" },
                        ]}
                    />
                </div>
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                        label="Authorized Email"
                        type="email"
                        placeholder="email@example.com"
                        icon="none"
                        className="border border-gray-300"
                    />
                    <Input
                        label="Mobile Number"
                        type="tel"
                        placeholder="10-digit mobile number"
                        icon="none"
                        className="border border-gray-300"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                    <Button variant="danger" icon={Save}>
                        Save & Create Client
                    </Button>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewClient;
