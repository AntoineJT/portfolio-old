/*
    script.js
    12/16/2018 11:07 - 12/16/2018 11:07
    written by Antoine James Tournepiche
    for his Portfolio website
*/

window.onload = function(){
    loadPage('assets/accueil.xml');
    const li = document.querySelectorAll('nav ul li');
    for (let i = 0; i<li.length; i++){
        li.item(i).addEventListener('click',function(){
            document.getElementById('current').removeAttribute('id');
            this.setAttribute('id','current');
        });
    }
}
/*
function loadPage(page,location){
	fetch(page).then(function(response) {
		return response.text();
	}).then(function(body) {
		document.querySelector(location).innerHTML = body;
	});
}
*/

function loadPage(page,id='content'){
    fetch(page).then(function(response) {
		return response.text();
	}).then(function(body) {
		document.getElementById(id).innerHTML=body;
	}).then(function(){ // Gallery system
        //let qse; // query selected elements
        const qse = document.querySelectorAll('div.gallery>img');
        if(qse!==null && qse.length>0){
            for(let i = 0; i<qse.length; i++){
                qse.item(i).addEventListener('click',function(){
                    window.open(this.getAttribute('src'));
                });
            }
            // THIS IS SOME SHIT
            /*
            const gal=document.querySelectorAll('div.gallery');
            for(let i=0;i<gal.length;i++){
                const item=gal.item(i);
                item.outerHTML+='<div class="buttons"><img alt="left button" src="img/portfolio_folder.png"></img><img alt="right button" src="img/portfolio_folder.png"></img></div>'; // TODO Add button images
                
                let temp=document.querySelectorAll('div.gallery+div.buttons img');
                const bleft=temp[0];
                const bright=temp[1];
                const images=item.querySelectorAll('img');
                
                bleft.style.visibility='hidden';
                
                let nbclick=0;
                bright.addEventListener('click',()=>{
                    item.style.right+=images.item(nbclick).clientWidth;
                    nbclick++;
                    bleft.style.visibility='visible';
                });
            }
            */
        }
    });
}
