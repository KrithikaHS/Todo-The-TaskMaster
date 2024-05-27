var mode=document.getElementById("mode")
let clr=document.getElementById("clr")
let clrs=document.getElementById("clrs")
function colrs(){
    if (clr.style.marginLeft=="30px"){
        clr.style.marginLeft="0px"
        clr.style.backgroundColor="rgb(177, 222, 100)"
        clrs.style.backgroundColor="white"
    }
    else{
        clr.style.marginLeft="30px"
        clr.style.backgroundColor="greenyellow"
        clrs.style.backgroundColor="white"

    }
    if(mode.style.display=="none"){
        mode.style.display=""
    }
    else{
        mode.style.display="none"
    }
}