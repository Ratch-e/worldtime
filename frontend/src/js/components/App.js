import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Card from './Card';
import Loader from '../../images/gif/30.gif';

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
    this.generateCards = this.generateCards.bind(this);
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

  /**
   * Создание карточек с городами
   * @param {array} cards
   */
  generateCards(cards) {}

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.newCityInput} onChange={e => this.handleInput(e)} />
        <button onClick={() => this.createNewCity()}>Click!</button>
        <p className="errors">{this.props.Store.error}</p>
        <div className="App__row">
          {this.props.Store.isLoading ? <img src={Loader} alt="" /> : null}
          {this.props.Store.weatherCards.map((item, key) => {
            return (
              <Card key={key} temp={item.temp} name={item.name} click={() => this.props.Store.removeCard(key)} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
