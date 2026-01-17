import React from 'react'
import GSTClient from '../GSTClient'
import GSTR9Detils from './GSTR9Detils'
import GSTRBasicDetails from './GSTRBasicDetails'
import GSTR9Table from './GSTR9Table'

const Gstr9Details = () => {
  return (
    <div>
      <GSTClient/>
      <GSTR9Detils/>
      <GSTRBasicDetails/>
      <GSTR9Table/>
    </div>
  )
}

export default Gstr9Details
