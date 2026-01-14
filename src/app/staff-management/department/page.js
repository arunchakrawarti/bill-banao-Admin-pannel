import Department from '@/components/pages/staff-management/Department'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Department/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
