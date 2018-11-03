
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "inline-flex";
        fadeIn("dropdown", 1000);
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
function fadeIn(id, time){
    var el = document.getElementById(id);
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
};
