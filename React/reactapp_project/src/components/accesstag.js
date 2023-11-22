import React ,{useRef} from 'react'

function Tagaccess() {
  const textRef = useRef();
  
  const handleButtonClick = () => {
    
      // Accessing the text content within the React tag using a ref
      textRef.current.innerText="changed"
  };
  
  const undofun = ()=>{
    textRef.current.innerText="again changed"
  }
   //const kom=handleButtonClick()
  return (
    <div>
    
      <p ref={textRef} >helhhhylo</p>
     <h1>{textRef.current.innerText}</h1>
      <button onClick={handleButtonClick}>Get Text </button>
      
      <button onClick={undofun}>undo</button>

    </div>
  );
}
export default Tagaccess;