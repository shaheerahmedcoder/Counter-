var heading=document.querySelector("#heading");

function increase(){
    heading.innerHTML++;
}
function decrease(){
    if(heading.innerHTML>0){
        heading.innerHTML--;
    }
    else{
        heading.innerHTML;
    }
    
}