document.addEventListener("DOMContentLoaded", function(event) {
    let mode = localStorage.getItem("dark-mode");
    console.log("web started");
    if(mode === "dark"){
        console.log(document.getElementById("switch-mode").value);
        document.getElementById("switch-mode").checked = true;
        document.body.classList.toggle("dark-mode");
    }

});

function darkMode() {
    let element = document.body;
    let mode = localStorage.getItem("dark-mode");
    
    element.classList.toggle("dark-mode");
    
    if ( mode === "dark" ) {
        localStorage.setItem("dark-mode","light");
    }
    else{
        localStorage.setItem("dark-mode","dark");
    }
    
    console.log(mode);
}