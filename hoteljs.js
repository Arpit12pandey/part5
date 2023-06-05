console.log("done");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
let elements = document.querySelectorAll('.card');

let clickEvent = () => {
   alert('you have clicked a card');
   document.body.style.backgroundColor = "red";
}
elements.forEach((item) => {
    item.addEventListener('click', clickEvent)
});
