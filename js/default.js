'use strict';

// 메뉴버튼 
$(document).ready(function(){
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('.gnbArea').toggleClass('active');  
    });
})
