let home = new Boolean(true);
let location = new Boolean(false);
let menu = new Boolean(false);
const menuButton = document.getElementById('menu');
const homeButton = document.getElementById('home');
const locationButton = document.getElementById('location');
homeButton.addEventListener('click', function(){
    home == true;
    menu == false;
    location == false;
    console.log('home is true');
});
menuButton.addEventListener('click', function(){
    menu == true;
    home == false;
    location == false;
    console.log('menu is true');
});
locationButton.addEventListener('click', function(){
    menu == false;
    home == false;
    location == true;
    console.log('location is true');
});
if(menu == true){
    // content to render menu items
    console.log('menu is true');

}
else if(home == true){
//content to render home page
    console.log('home is true')
}
else if(location == true){
    //content to render location page
    console.log('location is true');
}
