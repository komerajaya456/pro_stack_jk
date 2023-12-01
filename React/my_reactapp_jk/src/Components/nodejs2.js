const SendDataToNode = async () => {
  const data = { name: 'komera' }; // Replace with your actual data

  try {
    const response = await fetch('http://localhost:3001/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.error('Failed to send data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  return(<h1>heading now</h1>)
};

// Call the function when you want to send data

SendDataToNode();
export default SendDataToNode;
