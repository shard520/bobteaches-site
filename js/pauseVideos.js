$('.modal-close, a[data-toggle="modal"], .modal-backdrop-close').click(function(){
    for (i = 0; i < $(".modal-backdrop-close").length; i++) {
        var playerNum = i + 1;
        var playObj = "player" + playerNum;
        window[playObj].pauseVideo();
    }
});
