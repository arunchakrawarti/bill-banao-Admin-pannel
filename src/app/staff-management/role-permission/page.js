import RolesPermissions from '@/components/pages/staff-management/RolesPermission'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <RolesPermissions/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
