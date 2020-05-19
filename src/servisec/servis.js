export default class Servisec {
  _apiBase = 'https://swapi.dev/api/';
  _imgApiBase = 'https://starwars-visualguide.com/#/';

  // получаем данные в зависимости от входящего url
  getResourse = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result) {
      return new Error(`Fetch error ${url} not found`);
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
    const person = await this.getResourse(`people/${id}/`);
    return {
      birth_year: person.birth_year,
      name: person.name,
      starships: person.starships,
      homeworld: person.homeworld,
      eye_color: person.eye_color,
    };
  };
}
