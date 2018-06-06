$(document).ready(function() {
    $(".time").ready(function updateTime(){
        var Time = new Date();
        var Hour = Time.getHours();
        var Minute = Time.getMinutes();
        var Seconds = Time.getSeconds();
            if (Seconds < 10){
                Seconds = "0" + Seconds;
            }
        
        $(".time").text(Hour + ":" + Minute + ":" + Seconds);
            setTimeout(function(){updateTime()}, 500);
    });
});