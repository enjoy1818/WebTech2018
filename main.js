
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "inline-flex";
        fadeIn("dropdown", 250);
    }else{
        state.style.display = "none";
    }
};
function loadDoc(file, menu, activateId){
    // Using this function to load a file and render in html without refreshing eg.'loadDoc('file_name.extension')'
    document.getElementById("info-block").innerHTML = "";
    var httpReq1 = new XMLHttpRequest();
    httpReq1.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("info-block").innerHTML += httpReq1.responseText;
        }
    };
    httpReq1.open("GET", file, true);
    httpReq1.send();
    var httpReq11 = new XMLHttpRequest();
    httpReq11.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("menu").innerHTML = "<h3>Category</h3>";
            document.getElementById("menu").innerHTML += httpReq11.responseText;
        }
    };
    httpReq11.open("GET", menu, true);
    httpReq11.send();
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("info-block").style.paddingLeft = "7.5%";
    document.getElementById("info-block").style.height = (screen.height*80)/100 + "px";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu").style.width = "15%";
    document.getElementById("chevron-up").style.display = 'none';
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

function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView();
}
function activate(elementId){
    document.getElementById(elementId);
}
