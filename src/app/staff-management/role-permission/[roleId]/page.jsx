import RoleDetails from '@/components/pages/staff-management/RoleDetails'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <RoleDetails/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
