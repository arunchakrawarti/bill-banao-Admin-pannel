import Task from '@/components/pages/task-management/Task'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading task...</div>}>
        <Task/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
