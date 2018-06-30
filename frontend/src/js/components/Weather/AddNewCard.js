import React from 'react';

/**
 * Инструмент добавления новой карточки с погодой
 * @param {String} input текущее значение 
 * @param {Function} inputHandler обработчик инпута
 * @param {Function} submit обработчик сабмита
 */
const AddNewCard = ({ input = '', inputHandler, submit }) => (
  <div className="weather__row">
    <input type="text" value={input} onChange={e => inputHandler(e)} />
    <button className="button" onClick={() => submit()}>
      Добавить город
    </button>
  </div>
);

export default AddNewCard;