import React from 'react'
import GSTClient from '../GSTClient'
import GSTR4Details from './GSTR4Details'
import GSTR4Table from './GSTR4Table'
import GSTRCard from './GSTRCard'

const Gstr4Details = () => {
  return (
    <div>
      <GSTClient/>
      <GSTR4Details/>
      <GSTR4Table/>
      <GSTRCard/>
    </div>
  )
}

export default Gstr4Details
