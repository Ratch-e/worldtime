import { action, observable, computed } from 'mobx';

class Store {
  @observable name = "Banan";
  @observable lastName = "Bulkin"

  @computed get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  @action changeName = () => this.name = "Valera"
  @action changeLastName = () => this.lastName = "Ivanov"
}

export default new Store();