import React ,{useRef} from 'react'

function Tagaccess() {
  const textRef = useRef();

  const handleButtonClick = () => {
    if (textRef.current) {
      // Accessing the text content within the React tag using a ref
      const text = textRef.current.innerText;
      
      return text;
    }
  };

  return (
    <div>
      <p ref={textRef}>Text to access from</p>
      <button onClick={handleButtonClick}>Get Text</button>
    </div>
  );
}
export default Tagaccess;