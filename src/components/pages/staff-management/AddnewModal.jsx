"use client";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Heading from "@/components/atoms/Heading";
import OverlayModal from "@/components/common/OverlayModal";

export default function AddnewModal({ open, onClose }) {
  return (
    <OverlayModal
      isOpen={open}
      onClose={onClose}
      modalClass="w-[95vw] sm:w-[90vw] md:w-full max-w-3xl"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-h-[95vh] flex flex-col">
        
        <div className="px-4 sm:px-6 py-4 border-b">
          <Heading
            title="Add New Employee"
            paragraph="Enter user information to create a new employee"
          />
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">

          {/* Profile */}
          <div>
            <p className="text-sm font-medium mb-2">Profile Photo</p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-14 w-14 rounded-full border flex items-center justify-center text-gray-400">
                📷
              </div>
              <Button size="sm">Upload</Button>
              <Button size="sm" variant="outline" className="text-red-500 border-red-300">
                Remove
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            <Input label="First Name" placeholder="Enter first name" icon="none"
              className="border border-gray-300"/>
            <Input label="Last Name" placeholder="Enter last name" icon="none"
              className="border border-gray-300"/>

            <Input
              label="User Name"
              placeholder="Enter user name"
              icon="none"
              className="border border-gray-300"
            />

            <Input label="Email" placeholder="Enter email address" icon="none"
              className="border border-gray-300"/>
            <Input label="Phone No." placeholder="Enter phone number" icon="none"
              className="border border-gray-300"/>

            <Input
              label="Role"
              type="select"
              icon="none"
              className="border border-gray-300"
              options={["Admin", "Manager", "Staff"]}
              placeholder="Select role"
            />

            <Input label="Password" type="password" placeholder="Enter password" icon="none"
              className="border border-gray-300"/>
            <Input
              label="Confirm Password"
              icon="none"
              className="border border-gray-300"
              type="password"
              placeholder="Confirm password"
            />

            <Input
              label="Status"
              type="select"
              icon="none"
              className="border border-gray-300"
              options={["Active", "Inactive"]}
              placeholder="Select status"
            />
          </div>

          {/* Attachment */}
          <div>
            <p className="text-sm font-medium mb-2">Attachments</p>
            <input
              type="file"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 px-4 sm:px-6 py-4 border-t">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button variant="danger" className="w-full sm:w-auto">
            Add User
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
}
