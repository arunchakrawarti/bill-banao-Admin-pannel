import React from 'react'
import DashboardOverview from './DashboardOverview'
import RechartOverview from './RechartOverview'
import RecentInvoiceCard from './RecentInvoiceCard'

const Mainhome = () => {
    return (
        <div>
            <DashboardOverview />
            <RechartOverview />
            <RecentInvoiceCard/>

        </div>
    )
}

export default Mainhome
