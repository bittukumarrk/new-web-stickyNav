window.addEventListener('scroll',function(){
let navbar =document.getElementById('myTopnav');
        if( window.pageYOffset >= 364){
            navbar.classList.add('sticky');
        }else{
            navbar.classList.remove('sticky');
        }

})
/* Toggle between adding and removing the "responsive" class to topnav */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
