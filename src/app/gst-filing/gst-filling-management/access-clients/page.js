import AccessClient from '@/components/pages/gst-filing/gst-fillling-management/AccessClient'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading clients...</div>}>
        <AccessClient/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
