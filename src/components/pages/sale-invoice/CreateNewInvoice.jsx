"use client";

import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import InvoiceFooterSection from "./InvoiceFooterSection";

const productColumns = [
    { label: "Product / Services", key: "name" },
    { label: "Quantity", key: "qty" },
    { label: "Unit", key: "unit" },
    { label: "Rate", key: "rate" },
    { label: "Discount", key: "discount" },
    { label: "Tax", key: "tax" },
    { label: "Amount", key: "amount" },
];

const productData = [
    {
        name: <Input placeholder="Nike Jordan" icon="none" />,
        qty: <Input type="number" defaultValue={0} icon="none" className="border border-gray-200 h-10" />,
        unit: <Input placeholder="PCS" icon="none" />,
        rate: <Input type="number" defaultValue={120} icon="none" className="border border-gray-200 h-10" />,
        discount: <Input type="number" defaultValue={0} icon="none" className="border border-gray-200 h-10" />,
        tax: (
            <Input
                type="select"
                icon="none"
                defaultValue={0}
                options={["No Tax", "GST 5%", "GST 18%"]}
            />
        ),
        amount: <span className="font-semibold">₹1360</span>,
    },
];

export default function CreateNewInvoice() {
    return (
        <div className="space-y-6 mt-7 px-4 sm:px-6 lg:px-8">
            {/* Heading + Status */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Heading
                    title="Create New Invoice"
                    paragraph="Fill in the details to generate an invoice"
                />

                <div className="w-full max-w-xs">
                    <Input
                        type="select"
                        icon=""
                        className="border border-gray-300"
                        placeholder="Select One"
                        options={["Select One", "Pending", "Overdue"]}
                    />
                </div>
            </div>

            {/* Invoice Details */}
            <div className="bg-white p-4 border border-gray-300 rounded-2xl space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Input label="Client Name *" placeholder="Enter client name" icon="none" className="border border-gray-400" />
                    <Input label="Invoice Number *" defaultValue="INV-2024-009" icon="none" className="border border-gray-400" />
                    <Input label="Invoice Date *" type="date" className="border border-gray-400" icon="ri-calendar-line" />
                    <Input label="Due Date *" type="date" className="border border-gray-400" icon="ri-calendar-line" />
                    <Input label="Status" type="select" icon="none" className="border border-gray-400" placeholder="Select" options={["Paid", "Pending", "Overdue"]} />
                    <Input label="Reference Number" placeholder="Enter reference" icon="none" className="border border-gray-400" />
                    <Input label="Reference Cycle" placeholder="Monthly / Weekly" icon="none" className="border border-gray-400" />
                    
                    {/* Running Buttons */}
                    <div className="col-span-1 md:col-span-3">
                        <label className="mb-1 block text-lg">Running</label>
                        <div className="flex flex-wrap gap-3">
                            <button className="rounded-lg border px-4 py-2">Yes</button>
                            <button className="rounded-lg border px-4 py-2">No</button>
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto">
                    <BasicTable
                        columns={productColumns}
                        data={productData}
                        wrapperClassName="min-w-[700px] rounded-xl border"
                    />
                </div>

                {/* Discount & Tax */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 bg-white p-4 border border-gray-300 rounded-xl">
                    <Input label="Discount Type" type="select" icon="none" className="border border-gray-400" options={["Percentage", "Flat"]} />
                    <Input label="Discount (%)" type="number" defaultValue={10} icon="none" className="border border-gray-400" />
                    <Input label="TAX" type="select" icon="none" className="border border-gray-400" options={["No Tax", "GST 5%", "GST 18%"]} />
                </div>

                {/* Footer Section */}
                <InvoiceFooterSection />
            </div>
        </div>
    );
}
