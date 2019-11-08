import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Example from './components/Carousel';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);
  console.log(person.results);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      setPerson(response.data);
      console.log(response.data);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Example />
    </div>
  );
}

export default App;
