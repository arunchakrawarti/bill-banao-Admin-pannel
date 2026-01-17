"use client"
import Heading from '@/components/atoms/Heading'
import Button from '@/components/common/Button'
import ReportCard from '@/components/molecules/ReportCard'
import {
  DollarSign,
  BarChart3,
  PieChart,
  FileText,
  ArrowUp,
} from "lucide-react";
import React from 'react'
import RechartOverview from './RechartOverview';
import TopPerformingAccount from './TopPerformingAccount';
import ReportsSection from './ReportSection';

const MISReport = () => {
  return (
    <div className='mt-7'>
      <Heading
        title="MIS Report"
        paragraph="Comprehensive analytics and insights"
        actions={[
          {
            text: "Select Period",
            variant: "default",
            icon: <i className="ri-calendar-line text-base" />,
            onClick: () => console.log("Select Period"),
          },
          {
            text: "Export Report",
            variant: "danger",
            icon: <i className="ri-download-2-line text-base" />,
            onClick: () => console.log("Export"),
          },
        ]}
      />
      <div className='mt-3'>
        <Button
          variant="danger"
          className="flex items-center gap-2"
        >
          <i className="ri-pulse-line text-base" />
         Overview
        </Button>
      </div>
       <div className="grid grid-cols-1 mt-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsCards.map((item) => (
        <ReportCard
          key={item.id}
          layout="stats"
          icon={item.icon}
          rightIcon={item.rightIcon}
          title={item.title}
          value={item.value}
          subText={item.subText}
          gradient={item.gradient}
        />
      ))}
    </div>
    <RechartOverview/>
    <TopPerformingAccount/>
    <ReportsSection/>
    </div>
  )
}

export default MISReport

export const statsCards = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹12.5M",
    subText: "+12% from last month",
    icon: <DollarSign size={18} />,
    rightIcon: <ArrowUp size={16} />,
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Net Profit",
    value: "₹4.2M",
    subText: "+8% from last month",
    icon: <BarChart3 size={18} />,
    rightIcon: <ArrowUp size={16} />,
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Operating Cost",
    value: "₹3.9M",
    subText: "+5% from last month",
    icon: <PieChart size={18} />,
    rightIcon: <ArrowUp size={16} />,
    gradient: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
  },
  {
    id: 4,
    title: "Active Projects",
    value: "2,845",
    subText: "+18% from last month",
    icon: <FileText size={18} />,
    rightIcon: <ArrowUp size={16} />,
    gradient: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];
