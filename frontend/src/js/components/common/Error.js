import React from 'react';

/**
 * Вывод ошибки
 * @param {String} text Текст ошибки 
 */
const Error = ({text}) => (
  <p className="errors">{text}</p>
)

export default Error;