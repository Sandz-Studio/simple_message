import React from 'react';

function App() {
    const [message, setMessage] = React.useState('I love Javascript?');

    function handleClick() {
        setMessage("I love React");
    }
  
    return (
        <div>
          <h1>{message}</h1>
          <button onClick={handleClick}>Update the message!</button>
        </div>
    );
}
    export default App;





  // // This is the long hand of the above so we dont constantly have to be using divs
