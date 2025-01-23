import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Form = () => {
    const [form,setForm]=useState({
        name:'',
        email:'',
        password:'',
        conpassword:'',
        phone:'',
        address:''
    })
    const displayform=()=>{
        console.log(form);
    }
  return (
    <>
    <div className='box1'>

    <h2 >STUDENT REGISTRATION FORM</h2>

        <Box 
      component="form"
      sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={form.name}
          onChange={(e)=>
            setForm({...form,name:e.target.value}) /*'...' is called the spread operator it is used to get the current value from an array */
          }
          
        />
        <TextField
          required
          id="outlined-disabled"
          label="Email"
          value={form.email}
          onChange={(e)=>
            setForm({...form,email:e.target.value})/*the form here is the variable given in the const[form,setForm]. */
          }
         
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={form.password}
          onChange={(e)=>
            setForm({...form,password:e.target.value})
          }
          
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          value={form.conpassword}
          onChange={(e)=>
            setForm({...form,conpassword:e.target.value})
          }
          
        />
        </div>
        <div>
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
          value={form.phone}
          onChange={(e)=>
            setForm({...form,phone:e.target.value})
          }
        />
        <TextField
          
          id="outlined-disabled"
          label="Address"
          value={form.address}
          onChange={(e)=>
            setForm({...form,address:e.target.value})
          }
        
        />
      </div>
      <div className='btn1'>
      <Button variant="contained" onClick={displayform}>SUBMIT</Button>
      </div>
      
    </Box>
    </div>
    </>

  )
}

export default Form