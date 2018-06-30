import React from 'react';
import { observer } from 'mobx-react';
import WeatherCard from './WeatherCard';

/**
 * Вывод ошибки
 * @param {Array} list Список для составления карточек
 * @param {Function} remove Обработчик для удаления карточки
 */
const WeatherList = observer(({ list, remove }) => (
  <div className="App__row">
    {list.map((item, key) => (
      <WeatherCard key={key} id={key} icon={item.icon} temp={item.temp} name={item.name} clickAction={remove} />
    ))}
  </div>
));

export default WeatherList;
