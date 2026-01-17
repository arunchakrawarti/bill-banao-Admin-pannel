"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";

export default function AddTaskModal({ open, onClose }) {
  return (
    <OverlayModal
      isOpen={open}
      onClose={onClose}
      modalClass="w-[95vw] sm:w-[90vw] md:w-full max-w-3xl"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800">
            Add Task
          </h2>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Task Name"
              placeholder="Enter task name"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />

            <Input
              label="Department"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Created By"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />

            <Input
              label="Assignee To"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Priority"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />

            <Input
              label="Mode"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Due Date"
              type="date"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />

            <Input
              label="Estimate Time"
              type="date"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              In Days
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              In Hours
            </label>
          </div>

          {/* Description */}
          <Input
            label="Description"
            placeholder="Description..."
            type="textarea"
            rows={4}
            icon="none"
            className="w-full border border-gray-300"
          />

          {/* Attachment + Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Attachment"
              type="file"
              icon="none"
              className="w-full border border-gray-300"
            />

            <Input
              label="Mode"
              placeholder="Select"
              type="select"
              icon="none"
              className="h-10 sm:h-11 w-full border border-gray-300"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 px-4 sm:px-5 py-4 border-t bg-gray-50">
          <Button
            variant="default"
            className="w-full sm:w-auto px-5 h-10"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            className="w-full sm:w-auto px-6 h-10 bg-blue-600 text-white"
          >
            Add Task
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
}
