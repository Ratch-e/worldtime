import React from 'react';

/**
 * Карточка погоды
 * @param {Integer} id
 * @param {Integer} temp температура
 * @param {String} name название города
 * @param {Function} clickAction обработчик клика
 * @param {String} icon имя иконки
 */
const WeatherCard = ({ id = 0, temp = 0, name = '', clickAction, icon }) => (
  <div className="card" onClick={() => clickAction(id)}>
    <div className="card__block">
      {icon ? <img className="card__img" src={`http://openweathermap.org/img/w/${icon}.png`} alt="" /> : null}
      <div className="card__city">{name}</div>
    </div>
    <div className="card__temperature">{temp}&#8451;</div>
  </div>
);

export default WeatherCard;