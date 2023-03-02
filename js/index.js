 // 타이머 작동 일반 시간
function nowTimer(){

    let timer = new Date();
    // console.log(timer);
    let userY = timer.getFullYear();
    let userMM = timer.getMonth()+1;
    let userD = timer.getDate();
    let userT = timer.getHours();
    let userM = timer.getMinutes();
    let userS = timer.getSeconds();
    console.log(userY,':',userMM,':',userD,':',userT,':',userM,':',userS);
    // 날짜
    $('#day01>dl>dd:nth-child(2)>span').text(userY);
    // $('#day01>dl>dd:nth-child(4)>span').text(userMM);
    if(userMM<10){
        $('#day01>dl>dd:nth-child(4)>span').text('0'+userMM);}
        else{
            $('#day01>dl>dd:nth-child(4)>span').text(userMM);
        }
    // $('#day01>dl>dd:nth-child(6)>span').text(userD);
    if(userD<10){
        $('#day01>dl>dd:nth-child(6)>span').text('0'+userD);}
        else{
            $('#day01>dl>dd:nth-child(6)>span').text(userD);
        }
    // 시간
    // $('#day02>dl>dd:nth-child(2)>span').text(userT);
    if(userT>12){
        $('#day02>dl>dd:nth-child(2)>span').text(userT-12);}
        else{
            $('#day02>dl>dd:nth-child(2)>span').text(userT);
        }
    // $('#day02>dl>dd:nth-child(4)>span').text(userM);
    if(userM<10){
        $('#day02>dl>dd:nth-child(4)>span').text('0'+userM);}
        else{
            $('#day02>dl>dd:nth-child(4)>span').text(userM);
        }

    // $('#day02>dl>dd:nth-child(6)>span').text(userS);
    if(userS<10){
        $('#day02>dl>dd:nth-child(6)>span').text('0'+userS);}
        else{
            $('#day02>dl>dd:nth-child(6)>span').text(userS);
        }
}
// 시간에 맞추는 배경
function nowBack(){
    let now = new Date();
    let hr = now.getHours();
    console.log(hr);
   
    // hr=1;
    // 아침
    if(hr >= 5 && hr < 7){
        $('footer>div#back01').css('background-image','url(img/Wakeup.jpg)');
    }
    if(hr >= 7 && hr < 9){
        $('footer>div#back01').css('background-image','url(img/GoingtoWork.jpg)');
    }
    if(hr >= 9 && hr < 12){
        $('footer>div#back01').css('background-image','url(img/MorningWorking.jpg)');
    }
    if(hr >= 12 && hr < 13){
        $('footer>div#back01').css('background-image','url(img/Lunch.jpg)');
    }
    if(hr >= 13 && hr < 14){
        $('footer>div#back01').css('background-image','url(img/Meeting.jpg)');
    }
    if(hr >= 14 && hr < 17){
        $('footer>div#back01').css('background-image','url(img/AfternoonWorking.jpg)');
    }
    if(hr >= 17 && hr < 18){
        $('footer>div#back01').css('background-image','url(img/BacktoHome.jpg)');
    }
     // 점심
     if(hr >= 18 && hr < 19){
         $('footer>div#back01').css('background-image','url(img/Dinner.jpg)');
     }
     // 저녁
     if(hr >= 19 && hr < 23){
         $('footer>div#back01').css('background-image','url(img/Freetime.jpg)');
     }
     // 밤
     if(hr >= 23 || hr < 5){
         $('footer>div#back01').css('background-image','url(img/Sleeping.jpg)');
     }

}

// 버튼
function nowBtn(){
    // 일반버튼
    $('.newday>ul>li>a:not(.newday>ul>li>a.now)').on('click',function(e){
        let btn = $(this).attr('class');
        console.log(btn);
        $('footer').prepend('<div id="back02"></div>');
        // element창에  <aside id="sub"> 서브 메뉴 클릭시 foter에 div가 나오는지 확인

        $('#back02').css({
            backgroundImage:'url(img/'+btn+'.jpg)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center top',
            backgroundSize:'auto 100%'
        });

        
        $('#modal').stop().hide();
       

        $('footer>#back01:not(:animated)').fadeOut(800,function(){
            $(this).remove();
            $('#back02').attr('id','back01');
        });
        
        return false;
         
    });

    // now
$('.newday>ul>li>a.now').on('click',function(e){
    // nowBack();
    // 시간객체
    // 현재의 시간
    let nown = new Date();
    let nowhr = nown.getHours();
    
    // 변수생성->str
    let str = $(this).attr('class');
    // 아침
    if(nowhr >= 5 && nowhr < 7){
        str="Wakeup"
    }
    if(nowhr >= 7 && nowhr < 9){
        str="GoingtoWork"
    }
    if(nowhr >= 9 && nowhr < 12){
        str="MorningWorking"
    }
     // 점심
     if(nowhr >= 12 && nowhr < 13){
        str="Lunch"
     }
    
     if(nowhr >= 13 && nowhr < 14){
        str="Meeting"
     }
     if(nowhr >= 14 && nowhr < 17){
        str="AfternoonWorking"
     }
     if(nowhr >= 17 && nowhr < 18){
        str="BacktoHome"
     }
     if(nowhr >= 18 && nowhr < 19){
        str="Dinner"
     }
     if(nowhr >= 19 && nowhr < 23){
        str="Freetime"
     }
     
     if(nowhr >= 23 || nowhr < 5){
        str="Sleeping"
     }
     $('footer').prepend('<div id="back02"></div>');
     $('#back02').css({
         backgroundImage:'url(img/'+str+'.jpg)',
         backgroundRepeat:'no-repeat',
         backgroundPosition:'center top',
         backgroundSize:'auto 100%'
     });
     $('footer>#back01:not(:animated)').fadeOut(800,function(){
        $(this).remove();
        $('#back02').attr('id','back01');
    });
    $('#modal').stop().hide();
     return false;

});
}
function modal(){
    $('nav>span').click(function(){
        $('#modal').stop().show();
    });
    $('#modal>.close').click(function(){
        $('#modal').stop().hide();
    });
}

