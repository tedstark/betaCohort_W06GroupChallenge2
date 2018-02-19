var position = 0;
var arrayOfBlurbs = [];

$(document).ready(function(){
    getServerData()
});

function getServerData() {
    $.ajax({
            type: "GET",
            url: "/hotdog",
            success: function (serverData) {
                console.log("Server Data Received");
                arrayOfBlurbs = serverData.blurbs;
                console.log(serverData);
                updateDOM()
            }
        }
    );
    $("#btnPrev").on("click", function(){
        prevBtn()
    });
    $("#btnNext").on("click", function () {
        nextBtn()
    });
}
function prevBtn() {
    position--;//iterate position down by one
    if (position < 0) {//If evaluates value of position; if any value less than 0, it will:
        position = 9;//set value of position to 9
    }
    if (position === 9) {//If evaluates value of position; if equal to 9, it will:
        $("#0").removeClass("highlight");//remove highlight class from Div 0;
        updateDOM()//run function updateDOM()
    } else { //If not <0 or =9, then:
        $("#" + (position + 1)).removeClass("highlight");//remove highlight class from div one number higher than position
        updateDOM()//run function updateDOM()
    }
}
function nextBtn() {
    position++;//iterate position up by one
    if (position > 9) {//If evaluates value of position; if any value greater than 9, it will:
        position = 0;//set value of position to 0
    }
    if (position===0) {//If evaluates value of position; if equal to 0, it will:
        $("#9").removeClass("highlight");//remove highlight class from Div 9;
        updateDOM()//run function updateDOM()
    } else {
        $("#"+(position-1)).removeClass("highlight");//remove highlight class from div one number less than position
        updateDOM()//run function updateDOM()
    }
}
function updateDOM() {
    $("#"+(position)).addClass("highlight");//Adds highlight class to whatever Div ID matches current value of position
    $("#textName").text(arrayOfBlurbs[position].name);//changes textName element to array value matching value of position
    $("#textBlurb").text(arrayOfBlurbs[position].blurb);//changes textBlurb element to array value matching value of position
}


function userServerData(arrayOfBlurbs) {
    //do something with data from server?
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