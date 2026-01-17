import TaskUpdate from '@/components/pages/task-management/TaskUpdate'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading task...</div>}>
        <TaskUpdate/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
