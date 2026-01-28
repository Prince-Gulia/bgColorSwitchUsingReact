import { useState } from 'react'
import Button from './Button'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <>
      
      <div className="w-full h-screen duration-200 text-white" style={{backgroundColor : color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
          
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 

            <Button color="red" colorText="Red" setColor = {setColor}/>
            <Button color="blue" colorText="Blue" setColor = {setColor}/>
            <Button color="yellow" colorText="Yellow" setColor = {setColor}/>
            <Button color="green" colorText="Green" setColor = {setColor}/>
            <Button color="black" colorText="Black" setColor = {setColor}/>
            <Button color="grey" colorText="Grey" setColor = {setColor}/>
            <Button color="purple" colorText="Purple" setColor = {setColor}/>
            <Button color="orange" colorText="Orange" setColor = {setColor}/>

          </div>
        
        </div>

      </div>

    </>
  )
}

export default App
