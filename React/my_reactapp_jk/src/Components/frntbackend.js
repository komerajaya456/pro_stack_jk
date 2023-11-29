import React from 'react';
import axios from 'axios';

const YourComponent = () => {
  const sendDataToNode = async () => {
    const dataToSend = { variableName: 'yourVariableValue' };

    try {
      const response = await axios.post('http://localhost:8080/', dataToSend);
      console.log('Response from Node.js:', response.data);
    } catch (error) {
      console.error('Error sending data to Node.js:', error);
    }
  };

  return (
    <div>
      <button onClick={sendDataToNode}>Send Data</button>
    </div>
  );
};

export default YourComponent;
