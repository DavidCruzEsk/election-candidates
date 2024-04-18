import React from 'react'
import Card from './Card.jsx';
import './list.css';

const List = () => {
    const candidateNames = [
        "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
        "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
        "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
        "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler", 
        "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres", 
        "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
        "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
        "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
    ];

  return (
    <>
      <p className='list-container'>Person</p>
      <div className='voter-list'>
          {candidateNames.map(person => {
            return <Card key={person} name={person} />
          })}
      </div>
    </>
  )
}

export default List