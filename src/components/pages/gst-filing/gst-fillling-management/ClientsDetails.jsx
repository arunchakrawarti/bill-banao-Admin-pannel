"use client"
import Heading from '@/components/atoms/Heading'
import { ArrowLeft, ChevronRight, LogIn } from 'lucide-react'
import React from 'react'
import { useRouter } from "next/navigation"
import { ShieldCheck } from "lucide-react";
import Badge from '@/components/common/Badge'
import Button from "@/components/common/Button";
import Input from '@/components/common/Input'

const ClientsDetails = () => {
    const router = useRouter();
    return (
        <div className="space-y-6 mt-6">

            {/* Breadcrumbs */}
            <p className="flex flex-wrap items-center gap-1 font-inter font-normal text-[0.75rem] tracking-[-0.006rem] text-[#6A7282]">
                <span>Admin Panel</span>
                <ChevronRight size={12} />
                <span>GST Filing</span>
                <ChevronRight size={12} />
                <span>Client Section</span>
            </p>

            {/* Heading */}
            <Heading
                title="GST – Client Selection"
                paragraph="Select a client to access their GST account"
                actions={[
                    {
                        text: "Back to Client List",
                        variant: "outline",
                        route: "/gst-filing/gst-filling-management/access-clients",
                        icon: <ArrowLeft size={14} />,
                        onClick: () => console.log("Back"),
                    },
                ]}
            />

            {/* Security Notice */}
            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
                <ShieldCheck size={16} className="mt-0.5 text-amber-600" />
                <p className="text-xs font-inter text-amber-700">
                    <span className="font-medium">Security Notice:</span>{" "}
                    Credentials are securely stored and masked. Only authorized
                    administrators can access client GST accounts. All actions are logged
                    for audit purposes.
                </p>
            </div>

            {/* Client Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">
                    Client Information
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <p className="text-xs text-gray-500">GSTIN</p>
                        <p className="text-sm font-medium text-gray-900">29ABCDE1234F1Z5</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Trade Name</p>
                        <p className="text-sm font-medium text-gray-900">Tech Solutions Pvt Ltd</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">State</p>
                        <p className="text-sm font-medium text-gray-900">Karnataka</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <Badge text="Active" skin="approved" />
                    </div>
                </div>
            </div>

            {/* GST Portal Credentials */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-6">
                <h3 className="text-sm font-semibold text-gray-900">GST Portal Credentials</h3>

                <div className="space-y-4">
                    <div>
                        <Input
                            label="GST Username*"
                            required
                            className='border border-gray-300'
                            value="gstuser_29ABCDE123"
                            disabled
                            icon="none"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Auto-filled from stored credentials
                        </p>
                    </div>

                    <div>
                        <Input
                            label="Password*"
                            type="password"
                            className='border border-gray-300'
                            placeholder="Enter stored password"
                            icon="ri-lock-password-line"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Masked for security
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 border-t border-gray-200 pt-4 space-y-3">
                    <Button
                        variant="danger"
                        icon={LogIn}
                        className="w-full sm:w-auto"
                    >
                        Login & Access GST Dashboard
                    </Button>

                    <Button variant="outline" className="w-full sm:w-auto">
                        Cancel
                    </Button>
                </div>

                {/* Note */}
                <p className="mt-4 text-xs text-gray-500">
                    <span className="font-medium">Note:</span>{" "}
                    This is a secure admin interface to access client GST accounts for
                    management purposes. Ensure you have proper authorization before
                    proceeding.
                </p>
            </div>
        </div>
    )
}

export default ClientsDetails
