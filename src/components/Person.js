import React from 'react';
import './Person.css';

const Person = ({ name, quote, superlative, photo }) => (
  <article>
    <h3>{name}</h3>
    <img
      src={photo}
      alt={name}
    />
    <p>{quote}</p>
    <p>{superlative}</p>
  </article>
);

export default Person;
