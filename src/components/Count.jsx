import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    const [countplus,setCountplus]=useState(0);
    const[countminus,setCountminus]=useState(0);
    const[countreset,setCountreset]=useState(0);
    const countPlus=()=>{
        setCountplus(countplus+1);
    }
    const countMinus=()=>{
        setCountminus(countminus-1);
    }
    const countReset=()=>{
        setCountplus(0);
        setCountminus(0);
    }

  return (
    <>
    <div className='container countbox'>
    <Button variant="outlined" onClick={countPlus}>COUNT PLUS</Button> 
        <p>Button pressed {countplus} times.</p><br /><br />
        <Button variant="outlined" onClick={countMinus}>COUNT MINUS</Button> 
        <p>Button pressed {countminus} times.</p><br /><br />
        <Button variant="outlined" onClick={countReset}>COUNT RESET</Button> 
    </div>
    </>
  )
}

export default Count