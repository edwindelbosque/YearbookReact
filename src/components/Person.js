import React from 'react';
import './Person.css';

const Person = ({ name, quote, superlative, photo }) => (
  <article>
    <main>
      <h3>{name}</h3>
      <img
        src={photo}
        alt={name}
      />
      <p className="quote" contentEditable="true">{`"${quote}"`}</p>
      <p className="superlative" contentEditable="true">{superlative}</p>
    </main>
  </article>
);

export default Person;
