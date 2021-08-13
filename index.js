function subscribe(){
    alert("subscribe success");
}

document.querySelectorAll(".dropdown_click").forEach(function(tag){
    tag.onclick = function(e){
        let dropdown = this.parentNode.children[2];
        if(dropdown.style.display === "none"){
            dropdown.style.display = "block";
        }else{
            dropdown.style.display = "none";
        }
    }
})