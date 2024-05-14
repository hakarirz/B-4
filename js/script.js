$(function(){
    let currentindex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentindex++;
        $(".sliderWrap").animate({marginLeft:-1200 * currentindex},600);

        if(currentindex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentindex = 0;
            },700);
        }
    },3000)

    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(400);
        $("#header .container").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#header .container").removeClass("on");
    });

    $(".popup_btn").click(function(){
        $(".popup_view").show();
    });
    $(".popup_close").click(function(){
        $(".popup_view").hide();
    });
});