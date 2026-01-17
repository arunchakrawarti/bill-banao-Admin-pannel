"use client";
import React from "react";
import Badge from "@/components/common/Badge";
import FileReturnSummaryTable from "./FileReturnSummaryTable";
import OverlayModal from "@/components/common/OverlayModal";

const FileReturnSummary = ({ open, onClose }) => {
    return (
        <OverlayModal isOpen={open}
            onClose={onClose}
            modalClass="max-w-4xl overflow-hidden">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow border overflow-y-auto overflow-hidden h-[600px] py-10 px-2">
                <div className="flex items-center justify-between bg-blue-600 px-5 py-3">
                    <div>
                        <h2 className="text-sm font-medium text-white">
                            GSTR-1 Return Summary
                        </h2>
                        <p className="text-xs text-blue-100">
                            Outward Supplies • March 2024
                        </p>
                    </div>

                </div>

                <div className="mt-3">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-green-200 bg-green-50 px-5 py-3">

                        <div className="flex items-start gap-3">
                            <i className="ri-checkbox-circle-line text-green-600 text-lg mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-green-800">
                                    Return Filed Successfully
                                </p>
                                <p className="text-xs text-green-700 mt-1">
                                    ARN (Acknowledgement Reference Number)
                                </p>
                                <p className="text-xs font-medium text-green-900">
                                    AA291020241234567
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col sm:items-end gap-2">
                            <div>
                                <p className="text-xs text-gray-500">Filing Date & Time</p>
                                <p className="text-sm font-medium text-gray-900">
                                    2024-04-10 14:35:22
                                </p>
                            </div>

                            <Badge text="Filed" variant="success" />
                        </div>

                    </div>
                </div>
                <div className="w-full bg-white rounded-xl border border-gray-300 mt-5 shadow-sm">

                    {/* Title */}
                    <div className="px-4 py-3 border-b border-gray-300">
                        <p className="text-sm font-medium text-gray-900">
                            Taxpayer Details
                        </p>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">

                        <div>
                            <p className="text-xs text-gray-500">GSTIN</p>
                            <p className="text-sm font-medium text-gray-900">
                                29ABCDE1234F2Z5
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Legal Name</p>
                            <p className="text-sm font-medium text-gray-900">
                                Tech Solutions Pvt Ltd
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Trade Name</p>
                            <p className="text-sm font-medium text-gray-900">
                                Tech Solutions
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Return Period</p>
                            <p className="text-sm font-medium text-gray-900">
                                March 2024
                            </p>
                        </div>

                    </div>
                </div>
                <FileReturnSummaryTable />
            </div>
        </OverlayModal>
    );
};

export default FileReturnSummary;
