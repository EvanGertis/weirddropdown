

// 1. set click listener on dropdown container.
let dropdown = document.querySelector("#dropdown"); 
dropdown.addEventListener("click", clicked);


// 2. if the target does not have class expanded when clicked then add class expand.
//    otherwise reset all the targets.
function clicked(e){
    let buttonid = e.target.getAttribute("target-id");
    let button = document.querySelector(buttonid);
    
    if(button.getAttribute("class") != "expanded"){
        reset();
        button.setAttribute("class", "expanded");
    } else{
        reset();
    }
    
}

// 3. Reset function loops over all targets
//    sets the class to collapse.
function reset(){
    Array.from(dropdown.children).forEach(e =>{
        if(document.querySelector(e.getAttribute("target-id")).classList.contains("expanded")){
            console.log(document.querySelector(e.getAttribute("target-id")).setAttribute("class", "collapsed"))
        }
    })
}