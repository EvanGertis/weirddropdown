let dropdown = document.querySelector("#dropdown"); 

let children = Array.from(dropdown.children);

let target = [];
let i = 0;


children.forEach( e => {
    e.addEventListener("click", clicked);
    target[i] = document.querySelector("#" + e.getAttribute("target"));
    i++;
});

function clicked(e){

    let content = document.querySelector("#" + e.target.getAttribute("target"));
    
    target.forEach(e => {
        if(e == content && e.style.display != "inline-block"){
            e.style.display = "inline-block";
        } else{
            e.style.display = "none";
        }
    });

}
