import {useRef} from 'react'

function LocalStorage(){
  //localStorage.clear();
  const paratext=useRef();

  function btnclick(){
    if (localStorage.length==0){
          localStorage.setItem("user",JSON.stringify([]))
        
    }
    
    var stringarr=localStorage.getItem("user");
    var array=JSON.parse(stringarr)
    //x=x.toString()
    array.push({name:"komera",age:8})
    localStorage.setItem("user",JSON.stringify(array))
    paratext.current.innerText=stringarr;
    
    //localStorage.setItem("user",arr)
    
    
  }
  
  return(
    <>
    
    <p ref={paratext}>{localStorage.getItem('user')}</p>
    
    <button onClick={btnclick}>Add</button>
    
    
    </>
    )
  
}

export default LocalStorage;