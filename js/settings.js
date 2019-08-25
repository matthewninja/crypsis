function getStarted() {
    $(".signUp").css("display", "block");
    $(".startButtons").css("display", "none");
    $("#slogan").css("display", "none");
}

function hideStuff(whatNottoHide) {
    $(".dashItem").css("display", "none");
    $("#" + whatNottoHide).css("display", "block");
}