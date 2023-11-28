import {useRef} from 'react'
function Inptoobj(props){
  //localStorage.clear()
  var inputvalue="  "
  const paratext=useRef();
  
  const inptext=useRef();
  const inpnum=useRef();
  //var ourarray=props.myobjlist
  
  function btnclick(){
    
  if (localStorage.length==0){
        localStorage.setItem("user",JSON.stringify([]));}
    
    
    if (inptext.current.value==inputvalue){
      alert("change input values");
    }

    
    
    else if((inptext.current.value).length>0 && inpnum.current.value>0){
    
      var stringarr=localStorage.getItem("user");
      var array=JSON.parse(stringarr);
    
      var pushingobj= {name:inptext.current.value,age:inpnum.current.value}
    
      array.push(pushingobj)
      
      
      localStorage.setItem("user",JSON.stringify(array))
      paratext.current.innerText=localStorage.getItem("user");
      
      inputvalue=inptext.current.value;
    }
    else{alert("Enter valid inputs")}
  }
  
  return (
    
    <>
    
    <label>name:-</label>
    <input ref={inptext} type="text" /><br/>
    <label>age:-</label>
    <input ref={inpnum} type="number" /><br/>
    <button onClick={btnclick} className="btn btn-primary" >Add</button>
    <p ref={paratext}>{localStorage.getItem("user")}</p>
    
    
    </>
    
    
    
    )
}

export default Inptoobj;



    

