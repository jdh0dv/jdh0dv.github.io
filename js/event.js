'use strict';
$(document).ready(function(){

    //각 영역 높이값
    const section1 = $('#section1').height();
    const section2 = $('#section2').height();
    const section3 = $('#section3').height();
    const section4 = $('#section4').height();  
    const section5 = $('#section5').height();         
  

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
        

        //appeal title 위치변경 & appeal content 나타남
        if( window_top >= section1+section2-300){
            $('#section3 h2').addClass('active')
            
            $('#section3 .appeal>li.1depth').delay(800).animate({
                top: 0,
                opacity: 1
            },500, 'linear')  
            
            $('#section3 .appeal>li.2depth').delay(1500).animate({
                top: 0,
                opacity: 1
            },500, 'linear')              
        }      
        
        //intro background 및 ul 변경
        if( window_top >= section1+section2+section3+300){
            $('#section4 .inner').addClass('active')  
            $('#section4 .link_list').addClass('active')                      
        }          

    })


    //마우스오버 이벤트
    //appeal tag
	$('#section3 .tag li').mouseover(function(){
		$(this).addClass('on');
		$(this).siblings().addClass('off');
	});	
	$('#section3 .tag li').mouseleave(function(){
		$(this).removeClass('on');
		$(this).siblings().removeClass('off');
    });
    //portfolio item
	$('#section4 .item').mouseover(function(){
		$(this).addClass('on');
		$(this).siblings().addClass('off');
	});	
	$('#section4 .item').mouseleave(function(){
		$(this).removeClass('on');
		$(this).siblings().removeClass('off');
    });    
    
    

})
