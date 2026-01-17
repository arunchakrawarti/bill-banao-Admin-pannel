import React from 'react'
import GSTClient from '../GSTClient'
import GSTRSupplies from './GSTRSupplies';
import GSTRSummary from './GSTRSummary';

const Gstrdetails = () => {
  return (
    <div>
      <GSTClient/>
      <GSTRSupplies/>
      <GSTRSummary/>
    </div>
  )
}

export default Gstrdetails;
