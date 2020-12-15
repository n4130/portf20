

  //   $('.parent-container').magnificPopup({
  // delegate: 'a', // child items selector, by clicking on it popup will open
  // type: 'image'
  // // other options
  // });
   
  $('.parent-container a').magnificPopup({
      type: 'image',
      closeBtnInside: false,
      closeOnContentClick: false,
    
      callbacks: {
        open: function() {
          var self = this;
          self.wrap.on('click.pinhandler', 'img', function() {
            self.wrap.toggleClass('mfp-force-scrollbars');
          });
        },
        beforeClose: function() {
              this.wrap.off('click.pinhandler');
          this.wrap.removeClass('mfp-force-scrollbars');
        }
      },
      
      image: {
        verticalFit: false
      }
    
    });



  // 타이핑js
  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  var del = -1;
  var repeatInt= null;
  var tyInt = null;


  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 

  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

  if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    tyInt = setInterval(typing,200); // 첫번재 반복동작 
  } 
    
  function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
  $(".typing").append(typingTxt[typingIdx]); 
    // 한글자씩 이어준다. 
    typingIdx++; 
    if(typingIdx == typingTxt.length){
      //첫번째 단어가 써지면 1초쉰다.
        clearInterval(tyInt);
        setTimeout(function(){
          tyInt = setInterval(typing,200);
        },1000);
      }
  } else{ 
    
    //한문장이끝나면
      if(-typingTxt.length-1 < del ){
        //한글자씩 지운다.
          $(".typing").html(typingTxt.slice(0, del))
          del--;
      }else{
        if(liIndex >= liLength-1){
              liIndex=0;
        }else{
          liIndex++;
        }
        
        //변수초기화 
        typingIdx=0;
        del= -1;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
        
        //1분후 다음문장 타이핑 
        clearInterval(tyInt);
        setTimeout(function(){
          tyInt = setInterval(typing,200);
        },1000);
      }
    } 
  }  


















//    //  마우스 휠 스크롤링 
//    var fenetre = {};
//    var sections = ['header', 'about', 'works-a', 'works-b', 'works-c','other-works', 'contact'];
//    var index = 0; 
//    var drapeau = true;
//    fenetre = window; 
   
//    if(fenetre.addEventListener) {
//        // ie9, chrome, safari, opera
//        fenetre.addEventListener('mousewheel', MouseWheelHandler, false); 
//        // firefox
//        fenetre.addEventListener('DOMMouseScroll', MouseWheelHandler, false);  
//    } else {
//        // IE 6/7/8
//        fenetre.attachEvent('onmousewheel', MouseWheelHandler);
//    }

//    var dureeAnim = 700; 
//    var deltaRalentissement = 200; 
   
//    function jeSuisPret(event) { 
//        setTimeout(function(){
//            drapeau = true;
//        }, dureeAnim);
//    }

//    function MouseWheelHandler(e) {
//        // cross-browser wheel delta
//        var e = window.event || e; 
//        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)); 
//        if(delta > 0 && drapeau) {
//            //scroll up code
//            if(index > 0) {
//                drapeau = false;
//                $('html, body').animate(
//                    {
//                        scrollTop: $('#' + sections[--index]).offset().top
//                    }, 
//                    {
//                        duration:
//                            index === 0 
//                             ? dureeAnim + deltaRalentissement
//                             : dureeAnim,
//                        done: jeSuisPret(e),
//                        queue: false
//                    }
//                );
//            }
//        } else if (drapeau) {
//        //scroll down code 
//        if(index < sections.length - 1) { 
//            drapeau = false; 
//            $('html, body').animate(
//                {
//                    scrollTop: $('#' + sections[++index]).offset().top
//                }, 
//                {
//                    duration:
//                        index === sections.length - 1 
//                         ? dureeAnim + deltaRalentissement
//                         : dureeAnim,
//                    done: jeSuisPret(e),
//                    queue: false
//                }
//            );
//        }
//    }
//    return false;
//   };

// 메뉴 클릭 시, 부드럽게 이동 
$(function(){
  $('.main-header a').click(function(){
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 700);
      // return false;
  });
});


