/*
    script.js
    12/16/2018 11:07 - 12/16/2018 11:07
    written by Antoine James Tournepiche
    for his Portfolio website
*/

window.onload = function(){
    loadPage("assets/accueil.xml");
    const li = document.querySelectorAll("nav ul li");
    li.forEach((elem) => {
        elem.addEventListener("click",function(){
            document.getElementById("current").removeAttribute("id");
            this.setAttribute("id","current");
        });
    });
}

async function loadPage(page,id="content"){
    const response = await fetch(page).then((res) => res.text());
    document.getElementById(id).innerHTML = response;
    const qse = document.querySelectorAll("div.gallery>img");
    if(qse !== null){
        qse.forEach((elem) => {
            elem.addEventListener("click",function(){
                window.open(this.getAttribute("src"));
            });
        });
    }
}

async function parseProjects(){
    const file = "assets/projects.json";
    const id = "content";
    const template_file = "assets/project.xml";

    const template = await fetch(template_file).then((res) => res.text());
    const json = await fetch(file).then((res) => res.text());
    try {
        let body = "";
        const obj = JSON.parse(json);
        await obj.projects.forEach((elem) => {
            const name = elem.name;
            const description = elem.description;
            const languages = elem.languages; // this is an array

            const content_elem = document.getElementById("content");
            content_elem.innerHTML = template;
            const name_elem = document.getElementById("name");
            name_elem.innerHTML = name;
            const desc_elem = document.getElementById("description");
            desc_elem.innerHTML = `<span class="label">Description : </span>${description}`;
            const lang_elem = document.getElementById("languages");
            languages.forEach((elem2) => {
                lang_elem.innerHTML += `<li>${elem2}</li>`;
            });

            function idToClass(elem, classname){
                elem.removeAttribute("id");
                elem.setAttribute("class",classname);
            }
            idToClass(name_elem,"name");
            idToClass(desc_elem,"description");
            idToClass(lang_elem,"languages");
            
            body += document.getElementById("content").innerHTML;
            document.getElementById("content").innerHTML = "";
        });
        document.getElementById(id).innerHTML = body;
    } catch (exception){
        console.error("Parsing error : ", exception);
    }
}
