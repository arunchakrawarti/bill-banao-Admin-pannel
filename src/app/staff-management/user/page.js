import User from '@/components/pages/staff-management/User'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <User/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
