import {useRef} from 'react'
function Inpidaccess(props){
  const inpvaltext=useRef();
  const headtext=useRef('');
  var x=0;
  function Inpvalue(){
    inpvaltext.current.value=JSON.stringify(props.myobj[1]);
    if (x==0){
    headtext.current.innerText=(JSON.stringify(props.myobj[1]));x=1;}
    else{headtext.current.innerText="click again";x=0;alert("Done")}
    
    
  }
  
  return(
    <div>
     <h1 ref={headtext}>this is input</h1>
      <input ref={inpvaltext} type="text"  value="attributeval" />
      <button onClick={Inpvalue}>Inpval</button>

      
    </div>
    )
}

export default Inpidaccess;
