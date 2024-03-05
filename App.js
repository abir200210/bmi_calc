import './App.css';
import './index.css'
import React,{useState} from 'react';

function App() {

  //setting up weight and height//

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBMI]=useState('');
  const [message,setMessage]=useState('');

  let calcBmi=(event)=>{
    event.preventDefault()

    if(weight===0 || height===0){
      alert('Please enter a valid weight and height')
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBMI(bmi.toFixed(1))

      if(bmi<25){
        setMessage('You are underweight!')
      }
      else if(bmi>=25 && bmi<=30){
        setMessage('You are healthy!')
      }
      else{
        setMessage('You are overweight')
      }
    }
  }
  let reload=()=>{
    window.location.reload()
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (lbs)</label>
            <input 
            
            type='text' 
            placeholder='enter your weight' 
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}>

            </input>
          </div>

          <div>
            <label>Height (cms)</label>
            <input 
            
            type='text' 
            placeholder='enter your height' 
            value={height}
            onChange={(event)=>setHeight(event.target.value)}>
            
            </input>
          </div>

          <div>

            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>


          </div>



          <div className='center'>
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
