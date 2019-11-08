import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

export default function PersonList() {
    const [person, setPerson] = useState([]);
    console.log(person.name);
    
    useEffect(() => {
        axios.get('https://swapi.co/api/people/1')
        .then(response => {
          setPerson(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log("The data was not returned.", error)
        })
      }, [])

      return (
          <div className="listCont">
          <PersonCard person={person} />
          </div>
      )
}
