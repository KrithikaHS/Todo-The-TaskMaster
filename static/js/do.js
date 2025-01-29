var mode = document.getElementById("mode");
let clr = document.getElementById("clr");
let clrs = document.getElementById("clrs");

let selectedColor = null;

function colrs() {

    

    if (clr.style.marginLeft === "20px") {
        clr.style.marginLeft = "-30px";
        clr.style.backgroundColor = "rgb(177, 222, 100)";
        clrs.style.backgroundColor = "white";
    } else {
        clr.style.marginLeft = "20px";
        clr.style.backgroundColor = "greenyellow";
        clrs.style.backgroundColor = "white";
    }

    
    // Toggle the visibility of mode
    if (mode.style.display === "none") {
        mode.style.display = "";
    } else {
        mode.style.display = "none";
    }
}

// Adjustments for responsive behavior
window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
        clr.style.marginLeft = "-30px";  // Reset for small screens
        clr.style.backgroundColor = "rgb(177, 222, 100)";  // Keep default color
    } else {
        clr.style.marginLeft = clr.style.marginLeft || "-30px";
    }
});
