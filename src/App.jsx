import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInput = (inputTag) => {
    console.log(inputTag);
    // here destructuring for get one or more value in a object , inputTag is a object
    const { name, value } = inputTag


    //name seted for each textfield for identify each one
    console.log(name, value);

    // !! for getting true or false 
    console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));   // search regular expression , validation , also we can use \d  , ^ this at the start and $ this at end 
    console.log(!!value.match(/^\d*\.?\d+$/));     // ? is for if there is . then after that a number is must 

    if (name == 'principle') {
      setPrinciple(value)

      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {

        setinvalidPrinciple(false)

      } else if (!value == "") {
        setinvalidPrinciple(true)
      }




    } else if (name == 'rate') {
      setRate(value)



      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setinvalidRate(false)

      } else if (!value == "") {
        setinvalidRate(true)


      }

    } else if (name == 'year') {
      setYear(value)


      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setinvalidYear(false)

      } else if (!value == "") {
        setinvalidYear(true)
      }

    }

    






  }

  const handleCalculate = (e) =>{
    //we passed the event and preventDefault is html predifined for page not refresh after click the button
    e.preventDefault()
    if (principle && rate && year) {

      setInterest(principle*rate*year/100)
      
    }else{
      alert("please enter the form completely")
    }
  }

  const handleReset =()=>{

    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)


    
  }







  return (
    <>

      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Simple Interest Easily</p>

          <div className='bg-warning p-5 rounded text-center'>
            <h1>$ {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>

          <form className='mt-5' >
            {/* principle amout */}
            <div className='mb-5'>
              {/* value is attribute of textfield */}
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="$ Principle Amount" variant="outlined" />
            </div>
            {/* invalid principle */}

            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
              Invalid Principle amount
            </div>}



            {/* Rate  */}
            <div className='mb-5'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-Rate" label="% Rate" variant="outlined" />
            </div>

            {/* invalid Rate */}

            {invalidRate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate amount
            </div>}

            {/* year */}
            <div className='mb-5'>
              <TextField value={year || ""} name='year' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time of period (Yr)" variant="outlined" />
            </div>

            {/* invalid year */} 

            {invalidYear && <div className='text-danger fw-bolder mb-3'>
              Invalid Year
            </div>}

            <Stack direction="row" spacing={2}>

              {/* button will disable when the invalid is true ,  */}

              {/* do not use the () in the onclick function because its react , when use the () it call continuosly */}
              {/* type submit for , if we click the enter , the button will work */}

              <Button type='submit' onClick={handleCalculate}   disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: '50%', height: '70px' }} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }} className='border border-dark text-dark'>Reset</Button>

            </Stack>
          </form>


        </div>




      </div>

    </>
  )
}

export default App
