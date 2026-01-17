import SubTaskDeatils from '@/components/pages/task-management/SubTaskDeatils'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading task...</div>}>
        <SubTaskDeatils/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
