
//particles
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#000',
        lineColor: '#000'
    });
    var intro = document.getElementById('wrapper');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


//nav
function anim(targetedDiv) {

    var targetedLetter = $("#" + targetedDiv + " .rotate").text();



    var asciiValue = targetedLetter.charCodeAt(0);

    var pointer = 65;

    changeChar();

    function changeChar() {
        if (pointer <= asciiValue == true) {
            $("#" + targetedDiv + " .rotate").text(String.fromCharCode(pointer));
            pointer++;
            setTimeout(changeChar, 20);
        }
        else {
            $(this).stop;
        }
    }
}

//OpenMenuClick 
$(document).ready(function () {
    $("#openMenu").click(function () {
        $("#logoSection").animate({ left: "0%" })
        $("#menuSection").animate({ left: "50%" })
        $("#openMenu").animate({ top: "-50%" })
        $("#closeMenu").animate({ right: "2%" })
        $(".main_content").fadeOut(200)

        $(".logo-ani-small path").removeClass(".logo-ani-small path").addClass(".logo-ani-small path");
        //setTimeout(function () {
        //$(".logo-ani-small path").removeClass('animated');
        //}, 1500);

    });
});
//ClosMenuClick 
$(document).ready(function () {
    $("#closeMenu").click(function () {
        $("#logoSection").animate({ left: "-200%" })
        $("#menuSection").animate({ left: "200%" })
        $("#openMenu").animate({ top: "2%" })
        $("#closeMenu").animate({ right: "-50%" })
        $(".main_content").fadeIn(200)

    });
});

//get id of chapter

function chp_click(id) {

    window.location = 'Videos.html';
}

//Video control

window.onload = init;
var indexofVid;
var nextVideo = new Array();
var vids;
var videoPlayer;
function init() {

    vids = document.getElementsByClassName('myvideos');
    videoPlayer = document.getElementById('videoPlayer');
    $('video[class="myvideos"]').each(function (index, item) {
        // vids is an HTMLCollection
        for (var i = 0; i < vids.length; i++) {
            document.getElementById('videoPlayer').src = vids.item(0).src;
            nextVideo[i] = vids.item(i).src;

        }
    });

    videoPlayer.onended = function () {

        indexofVid = nextVideo.indexOf(videoPlayer.src);
        if (indexofVid === nextVideo.length - 1) {
            indexofVid = 0;
        }
        else {
            indexofVid++;
        }


        videoPlayer.src = nextVideo[indexofVid];
    }

}


function firstVideo() {

    videoPlayer.src = nextVideo[0];
}

function lastVideo() {

    var lastVid = nextVideo.length - 1;
    videoPlayer.src = nextVideo[lastVid];
}
function previousVid() {

    indexofVid = nextVideo.indexOf(videoPlayer.src);
    if (indexofVid === 0) {
        indexofVid = 0;
    }
    else {
        indexofVid--;
    }
    videoPlayer.src = nextVideo[indexofVid];
}

function nextVid() {

    indexofVid = nextVideo.indexOf(videoPlayer.src);
    if (indexofVid === nextVideo.length - 1) {
        indexofVid = 0;
    }
    else {
        indexofVid++;
    }
    videoPlayer.src = nextVideo[indexofVid];
}



//hover video play
$(document).ready(function () {
    $(".myvideos").on("mouseover", function (event) {
        this.play();

    }).on('mouseout', function (event) {
        this.pause();

    });
});

//list video click

$(document).ready(function () {
    $(".myvideos").click(function () {
        var videolist = nextVideo.indexOf(this.src);
        videoPlayer.src = nextVideo[videolist];

    });
});
