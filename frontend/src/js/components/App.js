import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Card from './Card';

@inject('Store')
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCityInput: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.createNewCity = this.createNewCity.bind(this);
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
  }

  componentDidMount() {
    this.setCurrentPosition();
  }

  /**
   * Поиск текущей позиции и запрос погоды
   */
  setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.props.Store.getWeatherByLocation(position.coords));
    } else {
      this.props.Store.setError = 'Для работы приложения необходимо включить средства геолокации';
    }
  }

  /**
   * Хэндлер инпута
   * @param {*} e
   */
  handleInput(e) {
    this.setState({
      newCityInput: e.target.value,
    });
  }

  /**
   * Добавление нового города
   */
  createNewCity() {
    this.props.Store.getWeatherInCity(this.state.newCityInput);
    this.setState({
      newCityInput: '',
    });
  }

  render() {
    const store = this.props.Store;
    return (
      <div className="App">
        <input type="text" value={this.state.newCityInput} onChange={e => this.handleInput(e)} />
        <button className="button" onClick={() => this.createNewCity()}>Добавить город</button>
        <p className="errors">{store.error}</p>
        <div className="App__row">
          {store.weatherCards.map((item, key) => (
            <Card 
              key={key} 
              icon={item.icon} 
              temp={item.temp} 
              name={item.name} 
              click={() => store.removeCard(key)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
