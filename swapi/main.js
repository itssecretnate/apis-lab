const button = document.querySelector("button");

const webURL = 'https://swapi.dev/api';
const searchParam = 'Alderaan';

function getResidents(event) {
    event.preventDefault();

    axios.get(`${webURL}/planets?search=${searchParam}`).then((response) => {
        let alderaan = (response.data);

        alderaan.results[0].residents.forEach(resident => {
            console.log(resident);
            axios.get(resident).then(response => createResidentCard(response.data));
        })
    })

}

let docBody = document.querySelector('body');

function createResidentCard(resident) {
    let residentH2 = document.createElement('h2');

    residentH2.innerHTML = resident.name;

    docBody.appendChild(residentH2);
}

button.addEventListener('click', getResidents)