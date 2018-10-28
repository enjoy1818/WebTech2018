
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "flex";
    }else{
        state.style.display = "none";
    }
};
function loadDoc(file){
    // Using this function to load a file and render in html without refreshing eg.'loadDoc('file_name.extension')'
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("info-block").innerHTML = httpReq.responseText;
        }
    };
    httpReq.open("GET", file, true);
    httpReq.send();
    document.getElementById("dropdown").style.display = "none";
};
function toTop(){
    document.getElementById("header").scrollIntoView();
};
