"use client";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Heading from "@/components/atoms/Heading";
import OverlayModal from "@/components/common/OverlayModal";

export default function AddB2BInvoiceModal({ open, onClose }) {
  return (
    <OverlayModal
      isOpen={open}
      onClose={onClose}
      modalClass="w-[95vw] sm:w-[90vw] md:w-full max-w-5xl"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-h-[95vh] flex flex-col">
        <div className="px-4 sm:px-6">
            <h2 className="border-b pb-5 border-gray-300 mt-2 ">Add B2B Invoice</h2>
        </div>
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
          <div>
            <p className="text-sm font-medium mb-3">Invoice Details</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Input
                label="GSTIN of Recipient *"
                placeholder="Enter 15-digit GSTIN"
                icon="none"
                className="border border-gray-300"
              />
              <Input
                label="Invoice Number *"
                placeholder="Invoice number"
                icon="none"
                className="border border-gray-300"
              />
              <Input
                label="Invoice Date *"
                type="date"
                icon="none"
                className="border border-gray-300"
              />

              <Input
                label="Place of Supply *"
                icon="none"
                className="border border-gray-300"
              />
              <Input
                label="Invoice Type"
                icon="none"
                className="border border-gray-300"
              />
              <Input
                label="Reverse Charge"
                icon="none"
                className="border border-gray-300"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium">Invoice Line Items</p>
              <Button variant="danger" size="sm" className="flex items-center gap-2">
                <i className="ri-add-line" />
                Add Item
              </Button>
            </div>

            <div className="border border-gray-300 rounded-lg bg-gray-50 p-4 space-y-4">

              <p className="text-sm font-medium">Item #1</p>


              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Input label="Description" icon="none" className="border border-gray-300"/>
                <Input label="HSN Code" icon="none" className="border border-gray-300"/>
                <Input label="Quantity" icon="none" className="border border-gray-300"/>
                <Input label="Unit" icon="none" className="border border-gray-300"/>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Input label="Rate" icon="none" className="border border-gray-300"/>
                <Input
                  label="Taxable Value"
                  icon="none"
                  className="border border-gray-300"
                />
                <Input label="CGST %" defaultValue="9" icon="none" className="border border-gray-300"/>
                <Input label="SGST %" defaultValue="9" icon="none" className="border border-gray-300"/>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Input label="CGST Amt" icon="none" className="border border-gray-300" />
                <Input label="SGST Amt" icon="none" className="border border-gray-300"/>
                <Input label="IGST %" defaultValue="0" icon="none" className="border border-gray-300"/>
                <Input label="IGST Amt" icon="none" className="border border-gray-300"/>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Input label="Type" icon="none" className="border border-gray-300"/>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3 px-4 sm:px-6 py-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button variant="danger" className="w-full sm:w-auto">
            Save Invoice
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
}
