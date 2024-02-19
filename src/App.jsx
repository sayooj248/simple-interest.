
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [pamount,setPamount]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)
  const [result,setResult]=useState(0)

  const[validrate,setvalidrete]=useState(false)
  const[validtime,setvalidtime]=useState(false)

  const[validpamount,setvalidpamound]=useState(false)
  const validinput=(e)=>{
    const { name,value}=e.target
    // console.log(name,value);
    if(value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=="pamount"){
        setPamount (value)
        setvalidpamound(true)
      }
      else if(name=="rate"){
        setRate (value)
        setvalidrete(true)
    }
    else{
      setTime(value)
      setvalidtime(true)
    }
    }
    else{
      if(name=="pamount"){
        setPamount (0)
        setvalidpamound(false)
      }
      else if(name=="rate"){
        setRate (0)
        setvalidrete(false)
    }
    else{
      setTime(0)
      setvalidtime(false)
    }

    }
    
}

console.log(pamount,rate,time);

  const submitted=(e)=>{
    e.preventDefault()
    
    const res=pamount*rate*time/100
    setResult(res)


   }
   const resetform=()=>{
    setPamount(0)
    setRate(0)
    setTime(0)
    setResult(0)
  
    setvalidpamound(false)
    setvalidrete(false)
    setvalidtime(false)
  }
  return (
    <>
    <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{height:"100vh"}} >
      <div className='bg-light w-50 shadow rounded p-5'>
        <h4 className='d-flex justify-content-center align-items-center'style={{fontSize:30}} >Simple Interest Calculator</h4>
        <div className='d-flex justify-content-center  p-5 border shadow mt-3' style={{backgroundColor:"yellow"}}>
        ₹ {result}
        </div>
        <form onSubmit={(e)=>{submitted(e)}}>
          <div className='mt-2'>
          <TextField id="outlined-basic" value={pamount} name='pamount' onChange={(e)=>{validinput(e)}} style={{width:"100%"}} label=" ₹ Principle Amount" variant="outlined" />
          {
            !validpamount &&
            <div className='text-danger'>
              Invalid pamount
            </div>
          }
          </div>
          <div className='mt-2'>
          <TextField id="outlined-basic" value={rate} name='rate' onChange={(e)=>{validinput(e)}}   style={{width:"100%"}}  label="Rate" variant="outlined" />
          {
            !validrate &&
            <div className='text-danger'>
              Invalid Rate
            </div>
          }
          </div>
          <div className='mt-2'>
          <TextField id="outlined-basic" value={time} name='time' onChange={(e)=>{validinput(e)}}   style={{width:"100%"}} label="Time" variant="outlined" />
          {
            !validtime &&
            <div className='text-danger'>
              Invalid time
            </div>
          }
          </div>
          <Stack direction={"row"} spacing={2} className='mt-2'>
            <Button variant="contained"  disabled={validpamount&&validrate&&validtime?false:true} type="submit" style={{height:"50px",width:"50%"}}>Submit </Button>
            <Button variant="contained"  onClick={resetform} className='bg-dark' style={{height:"50px",width:"50%"}} >Reset </Button>
          </Stack>

        </form>
      </div>

    </div>
    </>
  )
}
export default App
