import UserDetails from '@/components/pages/staff-management/UserDetails'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <MainLayout>
                  <Suspense fallback={<div>Loading...</div>}>
                <UserDetails />
                </Suspense>
            </MainLayout>
        </div>
    )
}

export default page
