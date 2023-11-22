import {useState,useRef} from 'react'
import './useState.css'
function UseState(){
  const idaccess=useRef("")
  //[currentval,updatedval]=useState(currentval)
  idaccess.current="lllk"
  const [currentval,updatevalue]=useState(idaccess.current)
  
  return(
    <>
    <h1>hrr{currentval}</h1>
    <div>
      <button >change</button><span ref={idaccess} className="textbtn">this will chang</span>
      <button >undo</button>
      
      
    
    </div>
    
    
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

