import React from 'react';

const WeatherCard = ({ temp = 0, name = '', click = () => {}, icon }) => (
  <div className="card" onClick={click}>
    <div className="card__block">
      {icon ? <img className="card__img" src={`http://openweathermap.org/img/w/${icon}.png`} alt="" /> : null}
      <div className="card__city">{name}</div>
    </div>
    <div className="card__temperature">{temp}&#8451;</div>
  </div>
);

export default WeatherCard;
