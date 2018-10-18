
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "flex";
    }else{
        state.style.display = "none";
    }
};
function loadDoc(){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("info-block").innerHTML = this.responseText;
        }
    };
    httpReq.open("GET", "sample.txt", true);
    httpReq.send();
};