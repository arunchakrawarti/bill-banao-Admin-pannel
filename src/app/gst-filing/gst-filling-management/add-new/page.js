import AddNewClient from '@/components/pages/gst-filing/gst-fillling-management/AddNewClient'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading clients...</div>}>
        <AddNewClient/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
