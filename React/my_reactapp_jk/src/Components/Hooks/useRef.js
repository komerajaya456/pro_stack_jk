import {useRef} from "react"

function Idaccess(){
  var Textjk=useRef();
  
  function handle(){
    Textjk.current.value=1;
  }
  return(
    <div>
    
     <p ref={Textjk}>0</p>
     
     <button onClick={handle}>Click</button>
    
    </div>
    
    )
}

export default Idaccess