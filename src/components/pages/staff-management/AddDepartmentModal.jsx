"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";

export default function AddDepartmentModal({ open, onClose }) {
  return (
    <OverlayModal
      isOpen={open}
      onClose={onClose}
      modalClass="w-[95vw] sm:w-[90vw] md:w-full max-w-xl"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800">
            Add Department
          </h2>
          
          </div>
        <div className="p-4 sm:p-6 space-y-5 flex-1 overflow-y-auto">

          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-600 mb-1 block">
              Department Name
            </label>
            <Input
              placeholder="Enter department name"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-600 mb-1 block">
              Description
            </label>
            <Input
              placeholder="Description..."
              icon="none"
              className="h-24 w-full border border-gray-300"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 px-4 sm:px-6 py-4 border-t bg-gray-50">
          <Button
            variant="default"
            className="w-full sm:w-auto px-6 h-10"
            onClick={onClose}
          >
            Close
          </Button>

          <Button
            variant="danger"
            className="w-full sm:w-auto px-6 h-10"
          >
            Save
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
}
