import React from 'react';

const Card = ({ temp = 0, name = '', click }) => (
  <div className="card" onClick={click}>
    <div className="card__city">{name}</div>
    <div className="card__temperature">{temp}&#8451;</div>
  </div>
);

export default Card;
