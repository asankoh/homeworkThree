import * as MODEL from "./model.js";

function initListeners() {
    $("nav a").click((e) => {
        let btnID = e.currentTarget.id;
        console.log("click" + btnID);
    }); 
} 

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if(pageID == ""){
        MODEL.changePage("home");
    } else{
        MODEL.changePage(pageID)
    }
}


function initApp(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
initApp()
initListeners();
});