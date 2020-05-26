export default class Servisec {
  _apiBase = 'https://swapi.dev/api/';
  _imgApiBase = 'https://starwars-visualguide.com/#/';

  // получаем данные в зависимости от входящего url
  getResourse = async (patch) => {
    const result = await fetch(`${this._apiBase}${patch}`);
    if (!result) {
      return new Error(`Fetch error ${patch} not found`);
    }
    return result.json();
  };

  // из url вынимаеь id
  _getId = (url) => {
    const idRegexp = /\/([0-9]*)\/$/;
    return url.match(idRegexp)[1];
  };

  // спиок людей
  _getAllPeople = async (page = 1) => {
    const people = await this.getResourse(`people/?page=${page}`);
    return {
      next_Page: people.next,
      prev_Page: people.previous,
      people_List: people.results,
    };
  };

  //получаем данные одного человека
  _getPerson = async (id) => {
    //try
    const person = await this.getResourse(`people/${id}/`);
    return await this._transformPerson(person);

    //catch
  };

  _transformPerson = async (person) => {
    const starshipList = await this._getStarShip(person.starships);
    const homePlanet = await this._getPlanet(person.homeworld);
    return {
      birth_year: person.birth_year,
      name: person.name,
      starships: starshipList,
      homeworld: homePlanet,
      eye_color: person.eye_color,
    };
  };

  //получаем данные одного корабля
  _getStarShip = async (arr) => {
    let promises = arr.map((el) => {
      const id = this._getId(el);
      return this.getResourse(`starships/${id}/`);
    });
    return Promise.all(promises);
  };

  //получаем данные одной планеты
  _getPlanet = async (url) => {
    return await this.getResourse(`planets/${this._getId(url)}`);
  };
}
