import React from 'react'
import GSTClient from '../GSTClient'
import GSTRStatement from './GSTRStatement'
import B2BInvoicesTable from './GSTRstatementTable'

const Gstr2ADetails = () => {
  return (
    <div>
      <GSTClient/>
      <GSTRStatement/>
      <B2BInvoicesTable/>
    </div>
  )
}

export default Gstr2ADetails
