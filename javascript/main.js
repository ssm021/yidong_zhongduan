
$(document).ready(function() {
    function showSecondPage(){
        $(".hide_page").css("display", "block");
        $(".hide_page div.second_show_page").fadeIn(500, function () {
            $(".business_button:nth-child(2),.business_button:nth-child(3),.business_button:nth-child(4),.business_button:nth-child(5)").css("display", "block");
            $(".business_button:nth-child(6),.business_button:nth-child(7),.business_button:nth-child(8),.business_button:nth-child(9)").css("display", "block");
        });
    }



    $(".start").click(function () {
        $(".first_page").fadeOut();
            $(this).animate({width: "0px", height: "0px", opacity: "0"}, 200,function () {
                $(".first_page").hide();
                $(".start").css("width","200px").css("height","50px").css("opacity","1");
                showSecondPage();
        });
    });

    $(".bbhfcz").click(function(){
        $(this).animate({width:"230px",height:"60px"},100).animate({width:"0",height:"0",opacity:"0"},300,function(){

            $(".second_show_page").fadeOut(100,function(){
                $(".second_hide_page_hfcz,.info_con").fadeIn(300);
                $(".bbhfcz").css("width","200px").css("height","50px").css("opacity","1");
            });
        })
    });

    $(".number_board li").click(function(){
        $(".Phone_number").val($(".Phone_number").val()+$(this).val());
        $(this).css("animation","buttonclick 0.3s 1 linear");
    });

    $(".return").click(function(){
        $(".second_hide_page_hfcz,.info_con").fadeOut(100,function(){
            showSecondPage();
        });
    });
    $(".charge").click(function(){
        $(".info_con").fadeOut(100,function(){
            $(".charge_success").fadeIn(200).delay(3000).fadeOut(100,function(){
                $(".first_page").fadeIn(100);
            });
        });
    })
});



