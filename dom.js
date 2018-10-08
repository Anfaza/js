const allListItems = document.getElementsByTagName('li');

console.log(allListItems);
const ul = document.getElementById('grocerylist');

const firstChild = ul.firstElementChild;

console.log(firstChild);
const ph = document.getElementById('grocerylist');
const newListItem = document.createElement('li');
newListItem.innerText = 'Krop Sla';

ph.appendChild(newListItem);

const grocerylist = [
    {
        'name': 'Tandenborstel',
        'price': 1.79
    },

    {
        'name': 'Deodorant',
        'price': 2.10
    },

    {
        'name': 'Bakmeel',
        'price': 0.79
    },

    {
        'name': 'Wortels',
        'price': 2.00
    },

    {
        'name': 'Krop Sla',
        'price': 1.39
    }

];

const getTotalPrice = function () {
    let total = 0;
    let price = grocerylist.forEach(function (element, index, array) {
        total += element.price;
    });
    console.log(total);
};

getTotalPrice();

function createTable() {

    const table = document.createElement('table');

    for (let index = 0; index < grocerylist.length; index++) {
        console.log(index);
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.id = 'name' + index;
        tdName.innerText = grocerylist[index].name;
        const tdPrice = document.createElement('td');
        tdPrice.innerHTML = grocerylist[index].price;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        table.appendChild(tr);
    }
    const body = document.getElementById('body');
    body.appendChild(table);






}




createTable();
firstChild.classList.add('standOut')