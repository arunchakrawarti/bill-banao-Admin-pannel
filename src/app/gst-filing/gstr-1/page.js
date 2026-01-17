import MainLayout from '@/components/templates/MainLayout';
import Gstrdetails from "@/components/pages/gst-filing/gstr1-details/Index";
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Gstrdetails/>
      </MainLayout>
    </div>
  )
}

export default page
