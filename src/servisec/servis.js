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

  // из url вынимаю id
  _getId = (url) => {
    const idRegexp = /\/([0-9]*)\/$/;
    return url.match(idRegexp)[1];
  };
  _getPage = (next_page, prev_page) => {
    const next = next_page ? next_page.match(/[0-9]/)[0] : false;
    const prev = prev_page ? prev_page.match(/[0-9]/)[0] : false;
    return { next, prev };
  };

  // спиок всех элементов
  _getAllItems = async ({ root, page }) => {
    try {
      const items = await this.getResourse(`${root}/?page=${page}`);
      const { next, prev } = this._getPage(items.next, items.previous);
      return {
        next_Page: next,
        prev_Page: prev,
        item_List: items.results,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  //получаем данные одного человека
  _getPerson = async (id) => {
    try {
      const person = await this.getResourse(`people/${id}/`);
      return await this._transformPerson(person);
    } catch (error) {
      throw new Error(error);
    }
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

  //получаем данные масива кораблей
  _getStarShip = async (arr) => {
    try {
      let promises = arr.map((el) => {
        const id = this._getId(el);
        return this.getResourse(`starships/${id}/`);
      });
      return Promise.all(promises);
    } catch (error) {
      throw new Error(error);
    }
  };

  //получаем данные одной планеты
  _getPlanet = async (url) => {
    try {
      return await this.getResourse(`planets/${this._getId(url)}`);
    } catch (error) {
      throw new Error(error);
    }
  };
}
