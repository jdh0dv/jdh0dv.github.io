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
    $(window).scroll(function(){
        var win_top = $(window).scrollTop()
        var win_h = $(window).height()
        var wrap1 = $('#section2').offset().top
        var wrap1_5 = $('#section2 .skills').offset().top        
        var wrap2 = $('#section3').offset().top
        var wrap3 = $('#section4').offset().top												

        if( win_top >= wrap1 - 200){
            $('.greeting').addClass('active')
            $('.img_area').addClass('active')  
            $('.skills').addClass('active')                      
        }

        if( win_top >= wrap1_5 -300 ){
            $('#section2 .skills').addClass('active')
        }

        if( win_top >= wrap2 -300 ){
            $('#section3').addClass('active')
        }
        
        if( win_top >= wrap3 -300 ){
            $('#section4').addClass('active')
        }							
    })    


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