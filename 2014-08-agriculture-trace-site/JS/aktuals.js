global_current_elem = 1;
global_elem_hovered = 0;

var interval_variable = setInterval("autoScroll()", 3000);
/**/

$(document).ready(function() {
    //对播放器头部进行slideupand down
    $(".tag").hover(
        function() {
            $(".picplayer1 .background").slideDown("slow");
            global_elem_hovered = 1;
        },
        function() {
            $(".picplayer1 .background").slideUp("slow");
            global_elem_hovered = 0;
        }
    );
    $(".tag1").hover(
        function() {
            $(".picplayer2 .background").slideDown("slow");
            global_elem_hovered = 1;
        },
        function() {
            $(".picplayer2 .background").slideUp("slow");
            global_elem_hovered = 0;
        }
    );
});

function scrollToElem(elem) {
    jQuery('#aktuals_field').scrollTo('#aktuals' + elem, 500, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    jQuery('#aktuals_field1').scrollTo('#aktuals' + elem, 1000, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    set_active_btn(elem);
    global_current_elem = elem;
    reset_interval();
}

function scrollRight() {
    if (global_current_elem == 5) {
        elem = 1;
    } else {
        elem = global_current_elem + 1;
    }
    jQuery('#aktuals_field').scrollTo('#aktuals' + elem, 1100, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    jQuery('#aktuals_field1').scrollTo('#aktuals' + elem, 2200, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    set_active_btn(elem);
    global_current_elem = elem;
}

function scrollLefty() {
    if (global_current_elem == 1) {
        elem = 5;
    } else {
        elem = global_current_elem - 1;
    }
    jQuery('#aktuals_field').scrollTo('#aktuals' + elem, 1100, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    jQuery('#aktuals_field1').scrollTo('#aktuals' + elem, 2200, {
        easing: 'easeInOutExpo',
        axis: 'x'
    });
    set_active_btn(elem);
    global_current_elem = elem;
}



function autoScroll() {
    if (global_elem_hovered === 0) {
        scrollRight();
    }
}

function set_hover_on() {
    global_elem_hovered = 1;
}

function set_hover_off() {
    global_elem_hovered = 0;
    reset_interval();
}

function set_active_btn(elem) {

    jQuery("#aktuals1_btn").removeClass("active");
    jQuery("#aktuals2_btn").removeClass("active");
    jQuery("#aktuals3_btn").removeClass("active");
    jQuery("#aktuals4_btn").removeClass("active");
    jQuery("#aktuals5_btn").removeClass("active");
    jQuery("#aktuals" + elem + "_btn").addClass("active");
    jQuery("#aktuals1_btn1").removeClass("active");
    jQuery("#aktuals2_btn1").removeClass("active");
    jQuery("#aktuals3_btn1").removeClass("active");
    jQuery("#aktuals4_btn1").removeClass("active");
    jQuery("#aktuals5_btn1").removeClass("active");
    jQuery("#aktuals" + elem + "_btn1").addClass("active");
}

function reset_interval() {
    clearInterval(interval_variable);
    interval_variable = setInterval("autoScroll()", 2000);
}