let itemList = [];
const menuItem= (name, price, description) => {
    const displayItem =(contentContainer) => {
        const ItemHolder = document.createElement('div');
        const menuName = document.createElement('h3');
        menuName.textContent = menuItem.name;
        const itemPrice = document.createElement('p');
        itemPrice.textContent = menuItem.price;
        itemPrice.setAttribute('id', 'itemPrice');
        const discription = document.createElement('p');
        discription.textContent = menuItem.description;
        discription.setAtttribute('id', 'itemDescription');
        ItemHolder.appendChild(menuName);
        ItemHolder.appendChild(itemPrice);
        ItemHolder.appendChild(discription);
    }
    return {name, price, description, displayItem};
    
};
export default menuItem 
export {itemList}
function createNavBar(){
    const navBarContainer = document.createElement('div');
    navBarContainer.classList = 'navBarContainer';
    const navBarListContainer = document.createElement('ul');
    const listItem1 = document.createElement('li');
    listItem1.textContent = 'Menu';
    const listItem2 = document.createElement('li');
    listItem2.textContent = 'About Us';
    const listItem3 = document.createElement('li');
    listItem3.textContent = 'Location';
    navBarListContainer.appendChild(listItem1);
    navBarListContainer.appendChild(listItem2);
    navBarListContainer.appendChild(listItem3);
    navBarContainer.appendChild(navBarListContainer);
    contentContainer.appendChild(navBarContainer);
}


const storeImage = () => {
    const storeImage = document.createElement('img');
    storeImage.src = "/Pictures/IceCreamStore.jpeg";
    contentContainer.appendChild(storeImage);
    storeImage.setAttribute('id', 'storeImage');
}
export { createNavBar, storeImage }