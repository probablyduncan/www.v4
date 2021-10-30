//scroll control
function scrollControl(){
    progressBar();
}

//flash menu button
function flashMenuButton(){
    document.getElementById('menu-button').style.opacity = '0';
}

//menu functions
function toggleMenu(){
    if(menuOpenBool)
    {
        exitMenu();
        menuOpenBool = false;
    }
    else
    {
        openMenu();
        menuOpenBool = true;
    }
    console.log(menuOpenBool);
}
function openMenu(){
    //make menu visible
    document.getElementById('menu').classList.add('menu-visible');
    document.getElementById('menu').classList.remove('menu-hidden');
    //document.getElementById('wrapper').classList.add('opacity80');
    menuOpenBool = true;
}
function exitMenu(){
    //make menu invisible
    document.getElementById('menu').classList.add('menu-hidden');
    document.getElementById('menu').classList.remove('menu-visible');
    //document.getElementById('wrapper').classList.remove('opacity80');
    menuOpenBool = false;
}

//content image hover functions
function siMouseOver(e){
    //on mouse over, add class to bottom line of content card which widens it
    e.parentNode.children[3].classList.add('content-line-hover');
}
function siMouseOut(e){
    //remove class from bottom line
    e.parentNode.children[3].classList.remove('content-line-hover');
}


//bottom link hover functions
function blMouseOver(e){
    //on mouse over, add class which lighten color of arrows and slide them right
    e.children[0].classList.add('bl-hover');
}
function blMouseOut(e){
    //on mouse out, remove hover class
    e.children[0].classList.remove('bl-hover');
    e.children[0].classList.remove('bl-active');
}
function blActive(e){
    //on press, add active class
    e.children[0].classList.add('bl-active');
}


//updates scroll progress bar
function progressBar(){
    //window.pageYOffset -> amount scrolled
    //document.body.scrollHeight -> total page height
    //window.innerHeigh -> window height
    document.getElementById('progress-bar').style.width = Math.min((101 * window.pageYOffset / (document.body.scrollHeight - window.innerHeight)), 100) + '%';
}