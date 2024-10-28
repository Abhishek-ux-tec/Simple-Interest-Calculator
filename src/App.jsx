
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack } from '@mui/material';





function App() {

  const[principle,setPrinciple]=useState(0)  //to store the value by the principle input feild
  const[interest,setInterest]=useState(0)  //to store the value by the interest input feild
  const[year,setYear]=useState(0)  //to store the value by the year input feild
  const[simpleInterest,setSimpleInterst]=useState(0)

  const[isInvalidPrinciple,setInvalidPrinciple]=useState(false)
  const[isInvalidInterest,setInvalidInterest]=useState(false)
  const[isInvalidYear,setInvalidYear]=useState(false)



  console.log(principle);

  const validateInput=(tag)=>{

    const{name,value}=tag//=====>destructuring the tag 
    console.log(name,value)   //print by the detructuring element or checking


    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))  //its regular expression to check the number is in the string
    
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='principle'){
        setPrinciple(value)
        setInvalidPrinciple(false)
      }else if(name=='Interest'){
        setInterest(value)
        setInvalidInterest(false)
      }else{
        setYear(value)
        setInvalidYear(false)
      }

    
    }else{
      if(name=='principle'){
        setInvalidPrinciple(true)

      }else if(name=='Interest'){
        setInvalidInterest(true)
        
      }else{
        setInvalidYear(true)
      }

    }


    console.log(tag);
    

  }
  


  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");

    if(principle && interest && year){
      setSimpleInterst(principle*interest*year/100)

    }else{
      alert("please fill the data properly")
    }
    
  }

  const removeFeilds=()=>{
    console.log('Button Clicked');

    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidInterest(false)
    setInvalidYear(false)
    

  }
  

  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{height:'600px',width:'400px', borderRadius:'10px',marginLeft:'35%',marginTop:'100px'}}>
       <div  style={{height:'600px',width:'400px', backgroundColor:'white',  borderRadius:'10px'}}>
          <h1 className='fs-2 mt-3 ms-2' style={{color:'black'}}>Simple Interest Calculator</h1>
          <h5 className='fs-5 ms-2' style={{color:'black'}}>Calculate your simple interest Easily</h5>
          <div class='text-bg-primary p-3 container-fluid mt-5 text-center' style={{height:'100px', width:'90%', borderRadius:'5px'}}>
            <h1>₹ {simpleInterest}</h1>
            <p>Total Simple Interest</p>
            </div>
            <form action="">

            <div>
              <TextField value={principle || ""} name='principle' onChange={e=>validateInput(e.target)} style={{marginLeft:'20px',marginTop:'10px',width:'360px'}} id="outlined-basic" label="₹ Principle Amount" variant="outlined"/>
              </div>
              {
                isInvalidPrinciple &&
              <p className='text-danger ms-4'>Invalid principle amount</p>
              }

            <div>
              <TextField value={interest || ""} name='Interest' onChange={e=>validateInput(e.target)} style={{marginLeft:'20px',marginTop:'10px',width:'360px'}} id="outlined-basic" label="Rate" variant="outlined"/>
              </div>
              {
                isInvalidInterest &&
              <p className='text-danger ms-4'>Invalid data</p>
              }

            <div>
              <TextField value={year || ""} name='year' onChange={e=>validateInput(e.target)} style={{marginLeft:'20px',marginTop:'10px',width:'360px'}} id="outlined-basic" label="Time Period" variant="outlined"/>
              </div>
              {
                isInvalidYear &&
              <p className='text-danger ms-4'>Invalid data</p>
              }

            </form>

            <div className='mt-3 m-3'>

              <form>

                <Stack direction='row' spacing={2}>
  
                <Button disabled={isInvalidPrinciple || isInvalidInterest || isInvalidYear} type='submit' onClick={handleCalculate} className='w-100 bg-dark' style={{height:'50px'}} variant="contained">Calculate</Button>
                <Button onClick={removeFeilds} className='w-100' variant="outlined">Reset</Button>
  
                </Stack>

              </form>

            </div>

       </div>
      

      </div>
    </>
  )
}

export default App
