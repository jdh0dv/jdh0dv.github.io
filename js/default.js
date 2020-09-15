'use strict';


$(document).ready(function(){
    var section1 = '.home .visual'

    //기본 애니메이션 효과
    $('.header').css({
        marginTop: 0,
        opacity: 1
    });

    $(section1).css({
        left: 0,
        opacity: 1
    });    
    $(section1).find('p').css({
        bottom: 0,
        opacity: 1
    }); 
    $('.home .goal').addClass('on')

    //scroll 애니메이션 효과


    // 메뉴버튼 
    $('.menu_btn_open').click(function(){
        $('.gnb_area').addClass('active');  
        $('.menu_btn_close').show();
        $(this).hide();
    });
    $('.menu_btn_close').click(function(){
        $('.gnb_area').removeClass('active');  
        $('.menu_btn_open').show();
        $(this).hide();        
    });    

    //scroll fix
    $(window).scroll(function(){
        var win_top = $(window).scrollTop()

        if( win_top >= 1){
            $('.header').addClass('fixed')          
        }else{
            $('.header').removeClass('fixed')                
        }        
    })

    // project
    $('.project_item').mouseenter(function(){
        $(this).addClass('active')
    })
    $('.project_item').mouseleave(function(){
        $(this).removeClass('active')
    })     
})