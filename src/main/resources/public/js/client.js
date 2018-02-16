var position = 0;
var arrayOfBlurbs = [];

function getServerData() {
    $.ajax({
            type: "GET",
            url: "/blurbs",
            success: function (serverData) {
                console.log(serverData);
                arrayOfBlurbs = serverData.blurbs;
            }
        }
    );
}
function prevBtn() {
    //get previous name/blurb from array and write to DOM
    // remove highlight class from current cell and apply to prev cell
    position--;//iterate position down
    if (position < 0) {
        position = 9;
        // prevDOM()
        // } else {
        //     prevDOM();
    }
    if (position == 9) {
        $("#0").removeClass("highlight");
        updateDOM()
    } else {
        $("#" + (position + 1)).removeClass("highlight");
        updateDOM()
    }
}
function nextBtn() {
    //get next name/blurb from array and write to DOM
    // remove highlight class from current cell and apply to next cell
    position++;//iterate position up
    if (position > 9) {
        position = 0;
    //     nextDOM()
    // } else {
    //     nextDOM();
    }
    if (position==0) {
        $("#9").removeClass("highlight");
        updateDOM()
    } else {
        $("#"+(position-1)).removeClass("highlight");
        updateDOM()
    }
}
function prevDOM() {
    //get prev name/blurb from array and write to DOM
    //remove highlight class from current cell and apply to next cell
    if (position==9){
        $("#0").removeClass("highlight");
        updateDOM()
    } else {
        $("#"+(position+1)).removeClass("highlight");
        updateDOM()
    }
}
function nextDOM() {
    //get next name/blurb from array and write to DOM
    //remove highlight class from current cell and apply to next cell
    if (position==0) {
        $("#9").removeClass("highlight");
        updateDOM()
    } else {
        $("#"+(position-1)).removeClass("highlight");
        updateDOM()
    }
}
function updateDOM() {
    $("#"+(position)).addClass("highlight");
    $("#textName").text(arrayOfBlurbs[position].name);
    $("#textBlurb").text(arrayOfBlurbs[position].blurb);
}
$(document).ready(function(){
    $("#btnPrev").on("click", function(){
        prevBtn()
    });
    $("#btnNext").on("click", function () {
        nextBtn()
    });
    getServerData()
    // nextDOM()
});
function userServerData(arrayOfBlurbs) {
    //do something with data from server?
}