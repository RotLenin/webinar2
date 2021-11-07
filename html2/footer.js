let groups = [
    {
        title : 'Campaing',
        image : 'fas fa-gopuram',
        list : [
            {title : 'Register to Vote', link : '#'},
            {title : 'Save Our Water', link : '#'},
            {title : 'Flex Alert', link : '#'}
        ]
    },
    {
        title : 'Alerts',
        image : 'fas fa-radiation-alt',
        list : [
            {title : 'Amber Alert', link : '#'},
            {title : 'Cal Alerts', link : '#'},
            {title : 'My Hazards', link : '#'}
        ]
    },
    {
        title : 'About',
        image : 'far fa-address-card',
        list : [
            {title : 'Governor', link : '#'},
            {title : 'Lt. Governor', link : '#'},
            {title : 'California Data', link : '#'}
        ]
    },
    {
        title : 'Support',
        image : 'fas fa-phone',
        list : [
            {title : 'State Directory', link : '#'},
            {title : 'Technical Issues', link : '#'},
        ]
    },
];

let footerNavDiv = document.querySelector('.footer-nav__wrapper');

function drowFooter(){
    for(let i = 0; i < groups.length; i++){
        let group = groups[i];

        let groupDiv = document.createElement('div');
        groupDiv.className = 'footer-nav__group-wrapper';

        let title = document.createElement('h3');
        title.className = 'footer-nav__group-title';
        title.innerHTML = group.title

        let icon = document.createElement('i');
        icon.className = 'footer-nav__group-icon '+group.image;

        title.appendChild(icon);
        groupDiv.appendChild(title);

        let ul = document.createElement('ul');
        ul.className = 'footer-nav__group-list';

        for(let j = 0; j < group.list.length; j++){
            let item = group.list[j];

            let li = document.createElement('li');
            li.className = 'footer-nav__group-item'

            let a = document.createElement('a');
            a.className = 'footer-nav__group-link'
            a.innerHTML = item.title
            a.href = item.link

            li.appendChild(a);
            ul.appendChild(li);
        }

        groupDiv.appendChild(ul);

        footerNavDiv.appendChild(groupDiv);
    }
}

drowFooter();