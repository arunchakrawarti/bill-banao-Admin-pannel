import AddEmployee from '@/components/pages/staff-management/AddEmployee'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddEmployee/>
      </MainLayout>
    </div>
  )
}

export default page
