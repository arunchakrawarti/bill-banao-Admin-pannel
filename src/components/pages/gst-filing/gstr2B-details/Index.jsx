import React from 'react'
import GSTClient from '../GSTClient'
import GSTRitcStatement from './GSTRitcStatement'
import GSTRitcTable from './GSTRitcTable'
import GSTR2A2BComparison from './ComparisonCard'

const Gstr2BDetails = () => {
  return (
    <div>
      <GSTClient/>
      <GSTRitcStatement/>
      <GSTRitcTable/>
      <GSTR2A2BComparison/>
    </div>
  )
}

export default Gstr2BDetails
