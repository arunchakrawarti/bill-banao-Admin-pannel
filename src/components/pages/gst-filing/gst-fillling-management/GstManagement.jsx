"use client"
import Heading from '@/components/atoms/Heading';
import Button from '@/components/common/Button';
import InformationCard from '@/components/molecules/InformationCard';
import { ChevronRight, UserPlus, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


const GstManagement = () => {
   
  return (
    <div>
        <p className="flex items-center gap-1 font-inter font-normal text-[0.75rem] tracking-[-0.006rem] text-[#6A7282] mb-3">
        <span>Admin Panel</span>
        <ChevronRight size={12} />
        <span>GST Filing</span>
        <ChevronRight size={12} />
      </p>
       
       <Heading
        title="GST Filing Management"
        paragraph="Manage GST returns for all registered clients"
      />
      <div className='mt-5'>
         <InformationCard
  type="info"
  title="Note"
  description="This module is for GST tracking and management only. Actual filing is done on the official GST portal."
/>

      </div>

<div className="flex flex-col gap-6 w-full mt-5 ">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mb-4">
            <Users className="text-[#2E90FA]" size={32} />
          </div>
          <h3 className="text-[1.125rem] font-bold text-gray-800 mb-2">Select Existing Client</h3>
          <p className="text-[0.875rem] text-gray-500 mb-6 max-w-[250px]">
            Access GST accounts and manage returns for registered clients.
          </p>
          <Link href="/gst-filing/gst-filling-management/access-clients">
          <Button variant='danger'>
            Access Clients
          </Button>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#ECFDF3] rounded-full flex items-center justify-center mb-4">
            <UserPlus className="text-[#12B76A]" size={32} />
          </div>
          <h3 className="text-[1.125rem] font-bold text-gray-800 mb-2">Add New Client</h3>
          <p className="text-[0.875rem] text-gray-500 mb-6 max-w-[250px]">
            Register a new client for GST filing and management.
          </p>
          <Link href="/gst-filing/gst-filling-management/add-new">
          <Button variant='tertiary'>
            Add Client
          </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs">
            <p className="text-[0.75rem] font-medium text-gray-500 mb-1">
              {item.label}
            </p>
            <p className={`text-[1.75rem] font-bold ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

    </div>

    </div>
  )
}

export default GstManagement


 const stats = [
    { label: "Total Clients", value: "156", color: "text-gray-800" },
    { label: "Active GST Accounts", value: "142", color: "text-[#12B76A]" },
    { label: "Pending Returns", value: "23", color: "text-[#F04438]" },
    { label: "This Month Filings", value: "89", color: "text-[#2E90FA]" },
  ];