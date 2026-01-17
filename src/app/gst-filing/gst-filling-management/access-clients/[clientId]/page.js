import ClientsDetails from '@/components/pages/gst-filing/gst-fillling-management/ClientsDetails'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading clients...</div>}>
        <ClientsDetails/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
