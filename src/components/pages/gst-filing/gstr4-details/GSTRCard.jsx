"use client";
import React from 'react';
import { Download, Eye, FileText } from "lucide-react"; 
import Button from '@/components/common/Button';

const GSTRCard = () => {

  return (
    <div className="flex flex-col gap-8 w-full">
      <section className='bg-white p-4 mt-5 rounded-2xl'>
        <h3 className="text-gray-700 text-[0.875rem] font-medium mb-4">
          Important Notes for Composition Taxpayers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note, i) => (
            <div key={i} className="bg-[#FFFBEB] border border-amber-100 p-4 rounded-xl shadow-xs">
              <div className={`flex items-center gap-2 font-bold text-[0.75rem] mb-1 ${note.color}`}>
                <span>{note.icon}</span> {note.title}
              </div>
              <p className="text-[0.75rem] text-gray-500 leading-relaxed ml-5">
                {note.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-white p-4 mt-5 rounded-2xl'>
        <h3 className="text-gray-700 text-[0.875rem] font-medium mb-4">
          Payment Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Challan Number</p>
            <p className="text-[0.875rem] font-semibold text-gray-800 tracking-tight">{paymentDetails.challanNo}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Payment Date</p>
            <p className="text-[0.875rem] font-semibold text-gray-800 tracking-tight">{paymentDetails.paymentDate}</p>
          </div>
          <div className="bg-[#F0FDF4] p-4 rounded-xl border border-green-100 flex flex-col items-start justify-center">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Payment Status</p>
            <span className="bg-[#DCFCE7] text-[#15803D] px-3 py-0.5 rounded-full text-[0.75rem] font-bold border border-green-200">
              {paymentDetails.status}
            </span>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-dashed border-gray-200">
        <Button variant='danger'>
          <Download size={18} strokeWidth={2.5} /> Download GSTR-4
        </Button>
        
        <Button variant='outline'>
          <Eye size={18} /> View Summary
        </Button>

        <Button variant='outline'>
          <FileText size={18} /> CMP-08 (Statement)
        </Button>
      </div>

    </div>
  );
};

export default GSTRCard;


const notes = [
    { title: "No ITC Available", desc: "Composition taxpayers cannot claim Input Tax Credit on purchases", icon: "❌", color: "text-red-600" },
    { title: "No Inter-State Supply", desc: "Cannot make inter-state taxable supplies (except to SEZ/exports)", icon: "❌", color: "text-red-600" },
    { title: "Tax Invoice Restriction", desc: "Must issue 'Bill of Supply' instead of tax invoice", icon: "⚠️", color: "text-amber-600" },
    { title: "Annual Turnover Limit", desc: "Must not exceed ₹1.5 crore in the preceding financial year", icon: "📊", color: "text-blue-600" },
  ];

  const paymentDetails = {
    challanNo: "CHN2024041800456",
    paymentDate: "2024-04-18",
    status: "Paid"
  };