import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

export default function PersonList() {
    const [person, setPerson] = useState([]);
    console.log(person);
    
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            setPerson(response.data.results);
            console.log(response.data.results[0].name);
        })
        .catch(error => {
          console.log("The data was not returned.", error)
        })
      }, [])

    //   const personArray = person.results;
    //   console.log(personArray);

      return (
          <div className="listCont">
              {person.map(per => {
                //   console.log(per.name);
                  return (
                    <PersonCard
                        person={per}
                        key={per.url}
                        name={per.name}
                        year={per.birth_year}
                        eyeColor={per.eye_color}
                        gender={per.gender}
                        hairColor={per.hair_color}
                        height={per.height}
                        mass={per.mass}
                        skinColor={per.skin_color}
                    />
                  );
              })}
              {/* <PersonCard person={person} /> */}
              Test
          </div>
      )
}
