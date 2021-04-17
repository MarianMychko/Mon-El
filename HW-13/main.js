// button which adds characters
window.addEventListener('click', (e) => {
    const filmButton = document.getElementById('getFilm');
    const characters = document.querySelector('.characters');
    const planets = document.querySelector('.planets');
  
    if (filmButton == e.target) {
      const number = document.getElementById('film-id').value;
  
      if (planets) {
        planets.classList.add('hidden');
      }
      characters.classList.remove('hidden');
  
      if (document.querySelector('.character')) {
        document.querySelector('.characters').innerHTML = '';
        getPersonsInfo(number);
      } else {
        getPersonsInfo(number);
      }
    }
  });
  
  // button which adds planets
  window.addEventListener('click', (e) => {
    const planetButton = document.getElementById('getPlanets');
    const characters = document.querySelector('.characters');
    const planets = document.querySelector('.planets');
  
    if (planetButton == e.target) {
      if (characters) {
        characters.classList.add('hidden');
      }
      planets.classList.remove('hidden');
  
      if (document.querySelector('.planets_name')) {
        document.querySelector('.planets').innerHTML = '';
        getPlanets();
      } else {
        getPlanets();
      }
    }
  });
  
  function getPersonsInfo(number) {
    fetch(`https://swapi.dev/api/films/${number}/`)
      .then((response) => response.json())
      .then((data) => {
        data.characters.forEach(person => {
          if (person.slice(0, 5) === 'http:') {
            person = person.replace('http', 'https')
          }
          fetch(person)
            .then((response) => response.json())
            .then((person) => createCharacterCard(person))
        });
      })
  }
  
  async function getPlanets() {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        for (const planet of data.results) {
          createPlanetsList(planet);
        }
        toggleList();
      })
  }
  
  function createCharacterCard(person) {
    const characters = document.querySelector('.characters');
  
    const character = document.createElement('div');
    const characterName = document.createElement('div');
    const characterBirth = document.createElement('div');
    const characterGender = document.createElement('div');
  
    const male = document.createElement('img');
    const female = document.createElement('img');
    const noneGender = document.createElement('img');
  
    male.src = "img/male.png";
    female.src = "img/female.png";
    noneGender.src = "img/none.png";
  
    character.classList.add('character');
    characterGender.classList.add('character__gender');
  
    characterName.innerHTML = '<b>Name: </b>' + person.name;
    characterBirth.innerHTML = '<b>Year of birth: </b>' + person.birth_year;
    characterGender.innerHTML = '<b>Gender: </b>';
  
    switch (person.gender) {
      case 'male':
        characterGender.append(male);
        break;
      case 'female':
        characterGender.append(female);
        break;
      default:
        characterGender.append(noneGender);
        break;
    }
  
    characters.append(character);
    character.append(characterName);
    character.append(characterBirth);
    character.append(characterGender);
  }
  
  function createPlanetsList(planet) {
    const planets = document.querySelector('.planets');
    const planetName = document.createElement('li');
    planetName.classList.add('planets_name');
    planetName.innerHTML = planet.name;
    planets.append(planetName);
  }
  
  async function toggleList() {
    const planetsLength = document.querySelectorAll('.planets_name');
  
    for (let i = planetsLength.length / 2; i < planetsLength.length; i++) {
      planetsLength[i].classList.add('hidden');
    }
  
    // button next
    window.addEventListener('click', (e) => {
      const nextButton = document.getElementById('next');
      if (nextButton == e.target) {
        for (let i = 0; i < planetsLength.length / 2; i++) {
          planetsLength[i + 5].classList.remove('hidden');
          planetsLength[i].classList.add('hidden');
        }
      }
    });
  }