import {useRef} from 'react'

function Idaccess(){
  const gow=useRef("hvn") //this is object {current:"hvnm"}
  function update(){
    gow.current.innerText="hello"
  }
  return(
    <div>
      <p ref={gow}>useRef ref(id) access{JSON.stringify(gow)}</p>
      
      <button onClick={update}>Click</button>
      
      
    </div>
    )
}

export default Idaccess