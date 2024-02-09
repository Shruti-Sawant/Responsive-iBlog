
let searchbtn=document.querySelector('.search-btn');
let closebtn=document.querySelector('.close-btn');
let searchBox=document.querySelector('.search-Box');
let navigation=document.querySelector('.navigation');
let listnav=document.querySelector('.list-nav');
let menuToggle=document.querySelector('.togglebar');

searchbtn.onclick=function(){
    searchBox.classList.add('active');
    closebtn.classList.add('active');
    searchbtn.classList.add('active');
    menuToggle.classList.add('hide');
    listnav.classList.remove('open');
}
searchbtn.onclick=function(){
    searchBox.classList.remove('active');
    closebtn.classList.remove('active');
    searchbtn.classList.remove('active');
    menuToggle.classList.remove('hide');
}
menuToggle.onclick=function(){
    listnav.classList.toggle('open');
    closebtn.classList.remove('active');
    searchbtn.classList.remove('active');
    searchBox.classList.remove('active');
}