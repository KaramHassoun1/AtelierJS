const day=document.querySelector("#day");
const content=document.querySelector("#content");
const list=document.querySelector(".list-group");
const form=document.querySelector(".right")
const adding=document.querySelector(".add")

form.addEventListener("input",(e)=>{
    if((day.value)&&(content.value)){
        adding.disabled=false
    }else{
        adding.disabled=true
    }
});

adding.addEventListener("click", function(e) {
        list.innerHTML+='<li class="list-group-item">'+day.value+" : "+content.value+
        '<button type="button" onclick="destroy(event)">X</button>'+'</li>';
        day.value="";
        content.value="";
        adding.disabled=true;
});

function destroy(e){
    const element=e.target;
    element.parentNode.parentNode.removeChild(element.parentNode);
};