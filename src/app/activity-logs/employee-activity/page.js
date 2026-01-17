import ClientsActivity from '@/components/pages/activity-logs/ClientsActivity'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading activity...</div>}>
        <ClientsActivity/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
