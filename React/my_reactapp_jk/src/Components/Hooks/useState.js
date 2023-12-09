import {useState,useRef} from 'react'
import './useState.css'
function UseState(){
 
 
  const [one,sec]=useState("HI")
    
 return(<>
    <button onClick={()=>sec(one+"gow")}>+</button>
    <span>{one}</span>
    <button onClick={()=>sec(one+"jk")}>-</button>
    
 
 
 
 </>
 )
    
}



export default UseState


//         EXAMPLE ADD CART 
  
  // <div>
  //     <button onClick={()=>{updatevalue(currentval-1)}}>-</button>
  //     <span className="btn">{currentval}</span>
  //     <button onClick={()=>{updatevalue(currentval+1)}}>+</button>
    
  //   </div>    

