
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "flex";
    }else{
        state.style.display = "none";
    }
};
function loadDoc(file){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var parsedJson = JSON.parse(this.responseText);
            document.getElementById("info-block").innerHTML = "<h1>I'm "+parsedJson.name+" "+parsedJson.surname+"</h1><br>";
            
        }
    };
    httpReq.open("GET", file, true);
    httpReq.send();
};
function toTop(){
    window.scrollTo(0, 0);
};