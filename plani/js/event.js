'use strict';
$(document).ready(function(){

    //각 영역 높이값
    const section1 = $('#section1').height();
    const section2 = $('#section2').height();
    const section3 = $('#section3').height();
    const section4 = $('#section4').height();            
    console.log('intro 높이 : '+section1);
    console.log('greeting 높이 : '+section2);
    console.log('promise 높이 : '+section3);
    console.log('portfolio 높이 : '+section4);   
  

    //스크롤 이벤트
    $(window).scroll(function(){
        //스크롤 실시간으로 콘솔로그로 확인
        const height = $(document).scrollTop();
        console.log(height);
        //실시간 높이값 가져오기
        var window_top = $(window).scrollTop()

        //header color 변경
        if( window_top >= section1){
            $('#header p').addClass('active')          
        }else{
            $('#header p').removeClass('active')                    
        }
        
        //intro background 변경
        if( window_top >= section1-300){
            $('#section2 .txt_bg').addClass('active')          
        }else{
            $('#section2 .txt_bg').removeClass('active')                    
        }     
        
        //intro background 변경
        if( window_top >= section1+section2-300){
            $('#section3 h2').animate({
                right :'50%',
                marginRight :'-6.2em'
            },3000, 'easeOutBack')          
        }else{                   
        }             
    })

})