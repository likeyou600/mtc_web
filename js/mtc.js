$(document).ready(function() {
    $("#intro").hide();
    if ($("body").width() >= 1280) {

        //coin

        let coin = document.getElementById("coin");
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            coin.style.bottom = (value * 1.5) + 700 + 'px';

        });

        //coin


        $("#showintro").hover(function() {
            $("#intro").css("display", "block");
            $("#plus").css("display", "none");
            $("#close").css("display", "block");
        }, function() {
            $("#intro").css("display", "none");

            $("#plus").css("display", "block");
            $("#close").css("display", "none");
        });

        $("#gotop").on("click", function() {
            $("html, body").animate({ scrollTop: 0 }, 100);
        });


        //highlight
        var i = 0;
        for (i = 1; i <= 7; i++) {
            highlight(i);
        }

        function highlight(i) {
            $("#hover_highlight" + i).hover(function() {
                $("#afterhover" + i).css("display", "block");
                $("#beforehover" + i).addClass("beforehover");


            }, function() {
                $("#afterhover" + i).css("display", "none");
                $("#beforehover" + i).removeClass("beforehover");

            });
        }
        //highlight


        //service
        var j = 0;
        for (j = 1; j <= 3; j++) {
            service(j);
        }

        function service(j) {
            $("#hover_service" + j).hover(function() {
                $("#service_afterhover" + j).css("display", "block");
                $("#service_beforehover" + j).addClass("beforehover");


            }, function() {
                $("#service_afterhover" + j).css("display", "none");
                $("#service_beforehover" + j).removeClass("beforehover");

            });
        }

        //service


    } else { //min-device
        $("#showintro").on('touchstart', function() {
            $("#intro").css("display", "block");
            $("#plus").css("display", "none");
            $("#close").css("display", "block");
            $("#showintro").removeClass("title1-3").addClass("title1-3_hover");

        });
        $("#showintro").on('touchend', function() {
            $("#intro").css("display", "none");
            $("#plus").css("display", "block");
            $("#close").css("display", "none");
            $("#showintro").removeClass("title1-3_hover").addClass("title1-3");
        });

        //highlight touch
        var i = 0;
        for (i = 1; i <= 7; i++) {
            highlight(i);
        }


        function highlight(i) {
            $("#hover_service" + i).on('touchstart', function() {
                $("#service_afterhover" + i).css("display", "block");
                $("#service_beforehover" + i).addClass("beforehover");


            });
            $("#hover_service" + i).on('touchend', function() {
                $("#service_afterhover" + i).css("display", "none");
                $("#service_beforehover" + i).removeClass("beforehover");

            });
        }
        //highlight touch

        //service touch
        var j = 0;
        for (j = 1; j <= 7; j++) {
            service(j);
        }


        function service(j) {
            $("#hover_highlight" + j).on('touchstart', function() {
                $("#afterhover" + j).css("display", "block");
                $("#beforehover" + j).addClass("beforehover");


            });
            $("#hover_highlight" + j).on('touchend', function() {
                $("#afterhover" + j).css("display", "none");
                $("#beforehover" + j).removeClass("beforehover");

            });
        }
        //service touch


        //coin

        // let coin = document.getElementById("coin");
        // window.addEventListener('scroll', function() {
        //     var value = window.scrollY;
        //     coin.style.bottom = (value * 1) + 'px';

        // });

        //coin
        $("#gotop").on('touchstart', function() {
            $("html, body").animate({ scrollTop: 0 }, 100);
            $("#gotop").addClass("gotop_hover");


        });
        $("#gotop").on('touchend', function() {
            $("#gotop").removeClass("gotop_hover");

        });



    }
    $("#navbar_mindevice_content").hide();
    $("#menu").click(function() {
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });







    //EXCLUSIVE slide
    const exclusivelist = document.getElementById('exclusivelist');
    var maxScrollLeft = exclusivelist.scrollWidth - exclusivelist.clientWidth;
    var done = 0;
    var timeoutID;

    function scroll() {
        timeoutID = self.setInterval(() => {

            if (done == 0) {
                if (exclusivelist.scrollLeft <= maxScrollLeft - 3) {
                    exclusivelist.scrollTo(exclusivelist.scrollLeft + 1, 0);
                } else {
                    done = 1;
                }
            } else {
                if (exclusivelist.scrollLeft != 0) {
                    exclusivelist.scrollTo(exclusivelist.scrollLeft - 1, 0);
                } else {
                    done = 0;
                }
            }
        }, 15);
    }
    scroll();
    if ($("body").width() >= 1280) {
        $("#exclusivelist").hover(
            function() {
                clearInterval(timeoutID);
            },
            function() {
                scroll();
            }
        );
    } else {
        $("#exclusivelist").on('touchstart', function() {
            clearInterval(timeoutID);
        });
        $("#exclusivelist").on('touchend', function() {
            scroll();
        });
    }

    //EXCLUSIVE slide


    $(document).scroll(function() {

        const pageheight = document.documentElement.scrollTop +
            document.body.scrollTop;
        if (pageheight >= 0 && pageheight < 600) {
            $("#bar1").css("opacity", 1);
            $("#bar2").css("opacity", 0.3);
            $("#bar3").css("opacity", 0.3);
            $("#bar4").css("opacity", 0.3);
            $("#bar5").css("opacity", 1);
            $("#bar6").css("opacity", 0.3);
            $("#bar7").css("opacity", 0.3);
            $("#bar8").css("opacity", 0.3);
        } else if (pageheight >= 600 && pageheight < 1200) {
            $("#bar1").css("opacity", 0.3);
            $("#bar2").css("opacity", 1);
            $("#bar3").css("opacity", 0.3);
            $("#bar4").css("opacity", 0.3);
            $("#bar5").css("opacity", 0.3);
            $("#bar6").css("opacity", 1);
            $("#bar7").css("opacity", 0.3);
            $("#bar8").css("opacity", 0.3);
        } else if (pageheight >= 1200 && pageheight < 2700) {
            $("#bar1").css("opacity", 0.3);
            $("#bar2").css("opacity", 0.3);
            $("#bar3").css("opacity", 1);
            $("#bar4").css("opacity", 0.3);
            $("#bar5").css("opacity", 0.3);
            $("#bar6").css("opacity", 0.3);
            $("#bar7").css("opacity", 1);
            $("#bar8").css("opacity", 0.3);
        } else if (pageheight >= 2700 && pageheight < 3600) {
            $("#bar1").css("opacity", 0.3);
            $("#bar2").css("opacity", 0.3);
            $("#bar3").css("opacity", 0.3);
            $("#bar4").css("opacity", 1);
            $("#bar5").css("opacity", 0.3);
            $("#bar6").css("opacity", 0.3);
            $("#bar7").css("opacity", 0.3);
            $("#bar8").css("opacity", 1);
        } else if (pageheight >= 3600) {
            $("#bar1").css("opacity", 0.3);
            $("#bar2").css("opacity", 0.3);
            $("#bar3").css("opacity", 0.3);
            $("#bar4").css("opacity", 0.3);
            $("#bar5").css("opacity", 0.3);
            $("#bar6").css("opacity", 0.3);
            $("#bar7").css("opacity", 0.3);
            $("#bar8").css("opacity", 0.3);
        }
    });



    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top:" + (e.pageY - 110) + "px; left:" + (e.pageX - 110) + "px;")
    })






    $("#bar1").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#firstbox").offset().top - 350
        }, 100);

    });
    $("#bar2").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#secondbox").offset().top - 150
        }, 100);
    });

    $("#bar3").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#thirdbox").offset().top - 100
        }, 100);
    });

    $("#bar4").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#fourthbox").offset().top - 100
        }, 100);
    });

    $("#bar5").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#firstbox").offset().top - 350
        }, 100);
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();


    });
    $("#bar6").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#secondbox").offset().top - 150
        }, 100);
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });

    $("#bar7").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#thirdbox").offset().top - 100
        }, 100);
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });

    $("#bar8").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#fourthbox").offset().top - 100
        }, 100);
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });
});