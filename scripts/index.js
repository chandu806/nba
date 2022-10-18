async function getteamplayers() {
    try{
        let req = await fetch('https://www.balldontlie.io/api/v1/players');
        let res = await req.json();
        console.log(res);
        appenddetails(res.data);
    }
    catch (err) {
        console.log(err);
    }
}

getteamplayers();

function appenddetails(players) {
    
    players.map((e) => {
        let contain = document.createElement('div');
        contain.setAttribute('id', 'playersCard');

        let position1 = document.createElement('img');
        position1.setAttribute('id', 'position');
        position1.src = 'https://www.balldontlie.io/images/cryingjordan.jpeg'

        let name = document.createElement('h1');
        name.setAttribute('id', 'Name');
        name.innerText = `Name: ${e.name} `;

        let pos = document.createElement('p');
        pos.setAttribute('id', 'playerPos');
        pos.innerText = `Position: ${e.pos}`;

        let data = document.createElement('button');
        data.setAttribute('id', 'dataBtn');
        data.innerText = 'Team Details';
        let modal = document.querySelector('.modal');
        data.addEventListener('click', function(){
            showModal(e);
            console.log(e.team.city);
            modal.style.display = 'block';
        });

        card.append(contain, name, pos, data);
        document.getElementById('maindiv').append(contain);
        
    });
}

function showModal(e){

    let modal = document.querySelector('.button');
    
let teamName = document.createElement('p');
teamName.innerText = e.team.name;

let abbrevation = document.createElement('p');
abbrevation.innerText = e.team.abbreviation;


let division = document.createElement('p');
division.innerText = e.team.division;

let conference = document.createElement('p');
conference.innerText = e.team.conference;

let city = document.createElement('p');
city.innerText = e.team.city;


modal.append(abbrevation, city, division, conference, teamName);
    let button = document.getElementById('button');
        button.addEventListener('click', function(){
            modal.style.display = 'none';
        });
}