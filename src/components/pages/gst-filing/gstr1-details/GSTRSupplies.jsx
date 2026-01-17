"use client";
import React, { useState } from "react";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import AddB2BInvoiceModal from "./AddB2BInvoicePopup";
import FileReturnSummary from "./FileReturnSummary";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import InfoCard from "@/components/molecules/InfoCard";
import InformationCard from "@/components/molecules/InformationCard";
import Link from "next/link";

const GSTRSupplies = () => {
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [openFileModal, setopenFileModal] = useState(false);

  return (
    <div className="w-full mt-4">
      <Link href="/gst-filing">
      <Button
        variant="outline"
        className="flex items-center gap-2 w-fit"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to Dashboard
      </Button>
      </Link>

      <div className="bg-white p-4 sm:p-5 rounded-xl mt-5 sm:mt-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex-1">
            <Heading
              title="GSTR-1 - Outward Supplies"
              paragraph="Details of outward supplies of goods or services"
            />
          </div>

          <div className="w-full sm:w-48">
            <Input
              type="date"
              icon="none"
              className="w-full border border-gray-300"
            />
          </div>
        </div>


        <InfoCard
          type="bar"
          layout="single"
          border={false}
          items={[
            { label: "Return Period", value: "March 2024" },
            { label: "Filing Status", value: "Draft", isBadge: true },
            { label: "Filed Date", value: "2024-04-10" },
            {
              label: "ARN",
              value: "AA291020241234567",
              isLink: true
            },
          ]}
        />

      </div>

      <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="danger" className="flex gap-2 w-full sm:w-auto">
          <i className="ri-download-2-line" />
          Download GSTR-1
        </Button>

        <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
          <i className="ri-file-text-line" />
          View Summary
        </Button>

        <Button variant="tertiary" className="flex gap-2 w-full sm:w-auto">
          <i className="ri-save-3-line" />
          Save Draft
        </Button>

        <Button
          variant="current"
          className="flex gap-2 w-full sm:w-auto"
          onClick={() => setopenFileModal(true)}
        >
          <i className="ri-send-plane-line" />
          File Return
        </Button>

        <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
          <i className="ri-upload-2-line" />
          Upload File
        </Button>

        <Button
          className="flex gap-2 bg-gray-600 text-white w-full sm:w-auto"
          onClick={() => setOpenInvoiceModal(true)}
        >
          <i className="ri-add-circle-line" />
          Add Invoice
        </Button>
      </div>
      <div className="mt-5">
        <InformationCard
          type="info"
          icon="ri-information-line"
          title="Note:"
          description="This is a view-only replica of GSTR-1 return. The data shown here is for tracking and reference purposes only."
          layout="inline"
        />

      </div>

      <AddB2BInvoiceModal
        open={openInvoiceModal}
        onClose={() => setOpenInvoiceModal(false)}
      />

      <FileReturnSummary
        open={openFileModal}
        onClose={() => setopenFileModal(false)}
      />
    </div>
  );
};

export default GSTRSupplies;


