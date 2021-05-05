// courses --> items
// courses-list --> item-detail
// shoppingCartContent = itemCartContent
const items = document.querySelector('#item-detail'),
    itemCartContent = document.querySelector('#cart-content tbody');

loadEventListeners();
function loadEventListeners() {
    // when new item is added
    items.addEventListener('click', buyItem);

    function buyItem(e) {
        if (e.target.classList.contains('add-to-cart')) {
            // read the item values
            const item = e.target.parentElement.parentElement;
            getItemInfo(item);
        }
    }
}

function getItemInfo(item) {
    // create an Object with course data
    const itemInfo = {
        image: item.querySelector('img').src,
        title: item.querySelector('h4').textContent,
        price: item.querySelector('h5').textContent
    }
    addToCart(itemInfo);
}

function addToCart(item) {
    const row = document.createElement('tr');

    row.innerHTML = `
<tr>
    <td>
        <img src="${item.image}" width="100">    
    </td>
    <td>
        ${item.title}
    </td>
     <td>
        ${item.price}
    </td>
</tr>
`
        ;

    itemCartContent.appendChild(row);
}