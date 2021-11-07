let cards = [
    {
        'img' : 'explore-1.jpg', 
        title : 'Get Disaster Relief Assistance',
        info : {
            title : 'Get COVID-19 Information and Help',
            description : 'Official website for California Coronavirus (COVID-19) Response daily updates and resources. Stay home - save lives. Find information and services to help you and help others....',
        }
    },
    {
        'img' : 'explore-2.jpg', 
        title : 'Find Fire Information',
        info : {
            title : 'Get Disaster Relief Assistance',
            description : 'Find information on how to access disaster relief services and information on ensuring your health and safety....',
        }
    },
    {
        'img' : 'explore-3.jpg', 
        title : 'Get Digital Vaccine Record',
        info : {
            title : 'Find Fire Information',
            description : 'Find information on fires in California....',
        }
    },
    {
        'img' : 'explore-4.jpg', 
        title : 'Get COVID-19 Information and Help',
        info : {
            title : 'Get Digital Vaccine Record',
            description : 'If you want to share your proof of vaccination digitally, you can get an electronic version of the record card you were given at time of vaccination. Enter a few details to get a link to a QR code and...',
        }
    },
];

const IMG_PATH = 'img/';

let exploreDir = document.querySelector('.explore-wrapper');
let infoDir = document.querySelector('.explode-info-wrapper');

function drowCards(){
    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        drowCard(card, i);

        let info = card.info;
        drowInfo(info, i);
    }
}

function drowCard(card, id){
    let div = document.createElement('div');
    div.className = 'explore-card';
    div.dataset.cardId = id;
    div.addEventListener('click', switchInfo);

    let img = document.createElement('img');
    img.className = 'explore-card__img';
    img.src = IMG_PATH + card.img;  

    let title = document.createElement('h4');
    title.className = 'explore-card__title';
    title.innerHTML = card.title;

    let openWrapper = document.createElement('div')
    openWrapper.className = 'explore-card__icon-wrapper'

    let open = document.createElement('i')
    open.className = 'fas fa-plus-circle'
    openWrapper.appendChild(open)

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(openWrapper)
    
    exploreDir.appendChild(div);
}

function drowInfo(info, id){
    let {title, description} = info;

    let div = document.createElement('div');
    div.className = 'explore-card-info hidden';
    div.dataset.cardId = id;

    let infoTitle = document.createElement('h5');
    infoTitle.className = 'explore-card-info__title';
    infoTitle.innerHTML = title;

    let infoDescription = document.createElement('p');
    infoDescription.className = 'explore-card-info__description';
    infoDescription.innerHTML = description;

    let close = document.createElement('i');
    close.dataset.cardId = id;
    close.className = 'explore-card-info__close fas fa-times';
    close.addEventListener('click', switchInfo);

    div.appendChild(infoTitle);
    div.appendChild(infoDescription);
    div.appendChild(close);
    infoDir.appendChild(div);
}

function switchInfo(event){
    event.preventDefault();
    let currentTarget = event.currentTarget;
    let id = currentTarget.dataset.cardId;
    let list = infoDir.querySelectorAll('.explore-card-info');
    for(let i = 0; i < list.length; i++){
        let infoCard = list[i];
        if(i === 1*id){
            infoCard.classList.toggle("hidden");
        } else {
            infoCard.classList.add("hidden");
        }
    }    
}

drowCards();