import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ cohortType }) => cohortType.map((person) => (
  <Person
    key={person.id}
    id={person.id}
    name={person.name}
    quote={person.quote}
    superlative={person.superlative}
    photo={person.photo}
  />
));

export default Cohort;
