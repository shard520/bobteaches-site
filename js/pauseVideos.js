$('.videoClose, a[data-toggle="modal"]').click(function(){
    for (i = 0; i < $(".videoClose").length; i++) {
        var playerNum = i + 1;
        var playObj = "player" + playerNum;
        window[playObj].pauseVideo();
    }
});
