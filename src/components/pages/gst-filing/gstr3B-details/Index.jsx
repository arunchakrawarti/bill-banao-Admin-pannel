import React from 'react'
import GSTClient from '../GSTClient'
import GSTRMonthyReturn from './GSTRMonthyReturn'
import GSTRTable from './GSTRTable'

const Gstr3Bdetails = () => {
  return (
    <div>
      <GSTClient/>
      <GSTRMonthyReturn/>
      <GSTRTable/>
    </div>
  )
}

export default Gstr3Bdetails
