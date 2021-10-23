let cards = [
    {'img' : 'explore-1.jpg', title : 'Get Disaster Relief Assistance'},
    {'img' : 'explore-2.jpg', title : 'Find Fire Information'},
    {'img' : 'explore-3.jpg', title : 'Get Digital Vaccine Record'},
    {'img' : 'explore-4.jpg', title : 'Get COVID-19 Information and Help'},
];

const IMG_PATH = 'img/';

let rootDir = document.querySelector('.explore-wrapper');

function drowCards(){
    for(let i = 0; i < cards.length; i++){
        let card = cards[i];

        let div = document.createElement('div');
        div.className = 'explore-card';

        let img = document.createElement('img');
        img.className = 'explore-card__img';
        img.src = IMG_PATH + card.img;  

        let title = document.createElement('h4');
        title.className = 'explore-card__title';
        title.innerHTML = card.title;

        div.appendChild(img);
        div.appendChild(title)
        rootDir.appendChild(div);
    }
}

drowCards();