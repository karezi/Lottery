startnum = 0;
endnum = 100;
stop = 1;
number = 0;
flag = 1;
pushNo = 1;
$(document).ready(function () {
    music = document.getElementById("music");
    tmp = new Array();
    tmp[0] = -1;
    $("#setting").click(function () {
        $("#settings").show();
        $("#start").hide();
        stop = 1;
        $("#start").html("开始");
        music.pause();
        pushNo = 0;
    });

    $("#save").click(function () {
        startnum = $("#startnum").val();
        endnum = $("#endnum").val();
        if (endnum - startnum > 0 && startnum >= 0 && endnum <= 9999) {
            $("#startnum").css("border-color", "black");
            $("#endnum").css("border-color", "black");
            $("#settings").hide();
            $("#start").show();
        }
        else if (startnum < 0 && 0 < endnum <= 9999) {
            $("#startnum").css("border-color", "red");
            $("#endnum").css("border-color", "black");
        }
        else if (endnum > 9999 && 9999 > startnum >= 0) {
            $("#startnum").css("border-color", "black");
            $("#endnum").css("border-color", "red");
        }
        else {
            $("#startnum").css("border-color", "red");
            $("#endnum").css("border-color", "red");
        }
        pushNo = 1;
    });

    $("#start").click(function () {
        stop = !stop;
        if (stop) {
            $("#start").html("开始");
            music.pause();
        }
        else {
            $("#start").html("停止");
            music.play();
        }
        if(flag){
			setTimeout(run, 5650);
			flag = 0;
		}
		else{
			run();
		}
    });
});



function run() {
    while (1) {
        number = getNum();
        if (tmp.indexOf(number) == -1)
            break;
    }
    if (stop && pushNo) {
        $("#number").html(number);
        tmp.push(number);
    }
    else if (stop && !pushNo) {
        $("#number").html(number);
    }
    else {
        $("#number").html(number);
        setTimeout(run, 100);
    }
}

function getNum() {
    return parseInt(startnum) + Math.floor((endnum - startnum + 1) * Math.random());
}