//this is called once the body has loaded
function afterLoadControl(){
    fadeInBody()
    flashMenuButton();
}


//flash menu button
function flashMenuButton(){
    //maybe flash an animation that switches the page name to (menu) and then back to the page name?
    //document.getElementById('menu-button').style.opacity = '0';

    setTimeout(() => {

        let mb = document.getElementById('menu-button');
        let str = mb.innerHTML;
        mb.style.opacity = 0;

        setTimeout(() => {
            mb.innerHTML = '-> MENU';
            mb.style.opacity = '1';

            setTimeout(() => {
                //mb.innerHTML = '>&nbsp;&nbsp;>MENU'
                setTimeout(() => {
                    //mb.innerHTML = '>&nbsp;&nbsp;>&nbsp;&nbsp;>MENU'

                    setTimeout(() => {
                        mb.style.opacity = '0';

                        setTimeout(() => {
                            mb.innerHTML = str;
                            mb.style.opacity = '1';
                        }, 500);

                    }, 700);

                }, 700);
            }, 700);

        }, 500);

    }, 1000);
    
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
    //console.log(menuOpenBool);
}
function openMenu(){
    
    //update menu button style
    document.getElementById('menu-button').classList.add('menu-button-active');
    document.getElementById('menu-button').classList.remove('menu-button-inactive');

    //make menu visible (display none to display flex)
    document.getElementById('menu').classList.remove('menu-disabled');
    document.getElementById('menu').classList.add('menu-enabled');
    //after that, fade in menu
    setTimeout(() => {
        document.getElementById('menu').classList.add('menu-visible');
        document.getElementById('menu').classList.remove('menu-hidden');
    }, 1);
    
    menuOpenBool = document.getElementById('menu').classList.contains('menu-enabled');
}
function exitMenu(){
    //update menu button style
    document.getElementById('menu-button').classList.add('menu-button-inactive');
    document.getElementById('menu-button').classList.remove('menu-button-active');

    //make menu invisible
    document.getElementById('menu').classList.add('menu-hidden');
    document.getElementById('menu').classList.remove('menu-visible');
    setTimeout(() => {
        document.getElementById('menu').classList.add('menu-disabled');
        document.getElementById('menu').classList.remove('menu-enabled');
    }, 500);
    

    menuOpenBool = document.getElementById('menu').classList.contains('menu-enabled');
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

function htmlSwap(e,str){
    e.innerHTML = str;
}

//sets body opacity to 1
function fadeInBody(){
    document.body.style.opacity = '1';
}


/*
    PROJECT CARD BUILDER

    imgsrc: mooncall.jpg or whatever
    catagory: on yearning or for reel or whatever, automatically converts to upper case 
    color: color in hex (without #) for catagory, should go with image
    title: full title, must be capitalized and with a period at the end
    pagename: the page that this will link to (without .html). this will also be the card's id
*/

/*
function buildProjectCard(imgsrc, catagory, color, title, pagename){
    return `<div id="${pagename}" class="content-card"><a href="${pagename}.html" style="color: unset;" onmouseover="siMouseOver(this)" onmouseout="siMouseOut(this)"><img class="shadow-img si-hover" src="${imgsrc}"></a><h3 class="content-catagory" style="color: #${color};">${catagory.toUpperCase()}</h3><h4 class="content-title">${title}</h4><div class="content-line"></div></div>`;
} 
*/
