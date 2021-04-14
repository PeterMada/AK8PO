import React, { useState } from 'react';

function App() {
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(response => response.json())
      .then(data => setState(data));
    //  .then(res => res.text())
    //.then(res => setState({ apiResponse: res }));
  }

  const getDataFromApi = async () => {
    try {
      const request = await fetch('http://localhost:9000/testAPI')
      const response = request.json()
      // do something with the data
      console.log(response);
    } catch (e) {
      console.log(e);
      // show a message telling what went wrong
    } finally {
      // un-set the loader 
    }
  }

  getDataFromApi();


  const [state, setState] = useState({ apiResponse: '' });


  return (
    <div className="App">
      <header className="App-header">
        <p className="App-intro">{state.apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
