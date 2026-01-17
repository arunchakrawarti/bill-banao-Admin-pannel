"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import {
    GST_TABLE_COLUMNS,
    GST_TABLE_DATA,
    LAST_MONTH_TAX,
    PAYMENT_STATUS,
} from "../../../config/gstTable";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";


const GSTTable = () => {
    return (
        <div className="grid grid-cols-1 mt-7 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-300 flex justify-between items-center">
                    <div> <h1 className="font-inter text-[0.875rem]  tracking-[-0.009375rem] font-normal">Select Return Type</h1></div>
                    <div>
                        <Input
                            type="date"
                            className="border border-gray-300"
                            icon="none"
                        />
                    </div>
                </div>
                <div className="bg-white rounded-2xl mt-5">
                    <div className="p-4">
                        <h2 className="text-sm font-medium text-gray-800">
                            Last 5 Months GST Return Status
                        </h2>
                    </div>

                    <BasicTable columns={GST_TABLE_COLUMNS} data={GST_TABLE_DATA} />
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <i className="ri-eye-line text-lg" />
                        View Return Summary
                    </Button>

                    <Button variant="outline" className="flex items-center gap-2">
                        <i className="ri-download-2-line text-lg" />
                        Download Return PDF
                    </Button>

                    <Button variant="outline" className="flex items-center gap-2">
                        <i className="ri-file-list-3-line text-lg" />
                        View Liability Ledger
                    </Button>

                    <Button variant="outline" className="flex items-center gap-2">
                        <i className="ri-history-line text-lg" />
                        View Payment History
                    </Button>

                </div>
            </div>

            <div className="space-y-4">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <h3 className="font-inter font-normal text-[0.975rem] [letter-spacing:-0.009375rem] text-blue-900">
                        Last Month Tax Liability
                    </h3>
                    <p className="mt-2 text-blue-500">Month</p>
                    <p className="text-lg  mt-1 border-b border-blue-500 pb-4">{LAST_MONTH_TAX.month}</p>

                    <div className="mt-3 space-y-2 text-sm">
                        <h1 className="text-blue-700">Tax Breakdown</h1>
                        {LAST_MONTH_TAX.breakdown.map((item, i) => (
                            <Row key={i} label={item.label} value={item.value} />
                        ))}
                    </div>

                    <div className="mt-3 pt-2 border-t font-medium text-sm flex justify-between">
                        <span className="font-inter font-normal text-[0.875rem] tracking-[-0.009375rem]">Total Tax Liability</span>
                        <span className="font-inter font-normal text-[0.875rem] tracking-[-0.009375rem]">{LAST_MONTH_TAX.total}</span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="text-sm font-medium text-gray-800">
                        Previous Month Payment Status
                    </h3>

                    <div className="mt-3 space-y-2 text-sm">
                        <Row label="Month" value={PAYMENT_STATUS.month} />
                        <Row label="Tax Payable" value={PAYMENT_STATUS.payable} />
                        <Row label="Tax Paid" value={PAYMENT_STATUS.paid} green />
                        <Row label="Challan Number" value={PAYMENT_STATUS.challan} />
                        <Row label="Payment Date" value={PAYMENT_STATUS.date} />
                    </div>

                    <div className="mt-3">
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-[2px] rounded bg-green-100 text-green-700">
                            ● {PAYMENT_STATUS.status}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Row = ({ label, value, green }) => (
    <div className="flex justify-between">
        <span className="font-inter font-normal text-[0.75rem] tracking-[0px] text-[#1C398E]">{label}</span>
        <span className={green ? "text-green-600 font-medium" : "font-inter font-normal text-[0.975rem] tracking-[-0.009375rem]"}>{value}</span>
    </div>
);



export default GSTTable;
