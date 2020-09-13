'use strict';

// project
$(function(){
    $('.project_item').mouseenter(function(){
        $(this).addClass('active')
    })
    $('.project_item').mouseleave(function(){
        $(this).removeClass('active')
    })    
})
