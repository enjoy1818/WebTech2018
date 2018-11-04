
function showHide(){
    var state = document.getElementById("dropdown");
    if(state.style.display == "none"){
        state.style.display = "inline-flex";
        fadeIn("dropdown", 250);
    }else{
        state.style.display = "none";
    }
};
function loadDoc(file, menu){
    // Using this function to load a file and render in html without refreshing eg.'loadDoc('file_name.extension')'
    var httpReq1 = new XMLHttpRequest();
    httpReq1.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("info-block").innerHTML = httpReq1.responseText;
            fadeIn("info-block", 1500);
        }
    };
    httpReq1.open("GET", file, true);
    httpReq1.send();
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("info-block").style.paddingLeft = "7.5%";
    document.getElementById("info-block").style.height = (screen.height*70)/100 + "px";
    
    var httpReq12 = new XMLHttpRequest();
    httpReq12.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("menu").innerHTML = "<h3>Quick guide</h3>";
            document.getElementById("menu").innerHTML += httpReq12.responseText;
        }
    };
    httpReq12.open("GET", menu, true);
    httpReq12.send();
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu").style.width = "15%";
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

function removeElement(elementId, elementRem) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(elementRem);
}