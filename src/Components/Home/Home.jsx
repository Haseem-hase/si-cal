import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
    // Holding values from the input box
    const[amount,setAmount]=useState("")
    const[rate,setRate]=useState("")
    const[year,setYear]=useState("")

    // To assign calculated interest value
    const[interest,setInterest]=useState(0)
    console.log(amount,year,rate);

    //caculate interest
    const handleCalculate=()=>{
        let output = amount*year*rate/100 
        console.log(output);
        setInterest(output)

 
        

    }
    const handleReset = () => {
      setInterest('0'); // Reset the input value
    }
    
  return (
    <div className='p-5'>
       <center>
       <div className='p-5 shadow' style={{border:'solid 2px red', backgroundImage:`url('https://vakilsearch.com/blog/wp-content/uploads/2022/11/Simple-Interest-Calculation.webp')`, backgroundPosition:'center'}}>
          <center>
          
          
          <div className='mt-4 ' style={{width:'65%', height:'170px', border:'solid 1px red',}}>
            <h5 className='p-3' style={{fontFamily:"serif"}}>Calculate Your simple Interest with Us❤️</h5>
            <center>
                <h1>₹{interest} </h1>
                <p className='mb-4'>Your Total Interest </p>
            </center>
          </div>
          <div className='mt-3' style={{width:'65%', height:'210px', }} >
          <MDBInput onChange={(e)=>setAmount(e.target.value)} label="Amount" id="formControlLg" type="text" size="lg" style={{backgroundColor:'white'}} />
          <MDBInput onChange={(e)=>setYear(e.target.value)} className='mt-3' label="Year" id="formControlLg" type="text" size="lg" style={{backgroundColor:'white'}} />
          <MDBInput onChange={(e)=>setRate(e.target.value)} className='mt-3' label="Rate" id="formControlLg" type="text" size="lg" style={{backgroundColor:'white'}} />
         
   
      
      <Button onClick={handleCalculate} className='m-3' variant="contained">Calculate</Button>
      <Button onClick={handleReset} className='m-3' variant="contained">Reset</Button>
     
    
          </div>
        
          </center>
        </div>
       </center>

    </div>
  )
}

export default Home