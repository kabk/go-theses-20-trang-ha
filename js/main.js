


$(document).ready(function(){




//image  center

  $('img').each(function(){
    const screenW = $(window).width();
    const imgW = $(this).width();
    const imgTopH = $(this).height()/2;
    const centerW  = (screenW - imgW)/2;
    $(this).css('left',centerW);


  });

  // var lazyLoadInstance = new LazyLoad({
  //     elements_selector: ".lazy",
  //     // load_delay: 300
  //     // ... more custom settings?
  // });
  // lazyLoadInstance.update();



  $('.nav3').click(function(){
    $('.commoItem').toggleClass('commoItemClicked');
  });
  $('.nav4').click(function(){
    $('.layerItem').toggleClass('layerItemClicked');
  });
  $('.nav5').click(function(){
    $('.explodeItem').toggleClass('explodeItemClicked');
  });
  $('.nav6').click(function(){
    $('.alterItem').toggleClass('alterItemClicked');
  });
  $('.nav7').click(function(){
    $('.communiItem').toggleClass('communiItemClicked');
  });

  $('.fnt_').textillate({
    loop: true,
    in: {
  	// set the effect name
    effect: 'flash',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },
    out: {
    effect: 'flash',
    delayScale: 2.5,
    delay: 50,
    sync: false,
    shuffle: true,
    reverse: false,
    callback: function () {}
  },
  });


// Veritcal centering the name of windows
  $(".extraSpace2").each(function(){
    const curtainH = $(this).parent().height();
    const curtainpH = $(this).height();
    const curtainOffTop = (curtainH - curtainpH)/2;
    console.log(curtainH);
    $(this).css({
      "margin-top" : curtainOffTop,
    });
  });

//Credits to Laurel Schwulst/beautiful-company.com on her Flight Simulator website
//Flight Simulator is a collaboration between Laurel Schwulst and Soft.

  // draggable window shade
     dragElement(document.getElementById("window-shade"));
     dragElement(document.getElementById("window-shade1"));
     dragElement(document.getElementById("window-shade2"));
     dragElement(document.getElementById("window-shade3"));
     dragElement(document.getElementById("window-shade4"));
     dragElement(document.getElementById("window-shade5"));
     dragElement(document.getElementById("window-shade6"));
     dragElement(document.getElementById("window-shade7"));
     dragElement(document.getElementById("window-shade8"));
     dragElement(document.getElementById("window-shade9"));
     dragElement(document.getElementById("window-shade10"));
     // dragElement(document.getElementById("window-shade11"));
     // dragElement(document.getElementById("window-shade12"));
     // dragElement(document.getElementById("window-shade13"));
     // dragElement(document.getElementById("window-shade14"));

     function dragElement(elmnt) {
       var x_1 = 0,
         x_2 = 0;
       elmnt.addEventListener("touchstart", dragMouseDown);
       elmnt.addEventListener("mousedown", dragMouseDown);

       function dragMouseDown(e) {
         e = e || window.event;
         e.preventDefault();
         // get event's x coordinate
         x_2 = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;

         document.addEventListener("touchend", closeDragElement);
         document.addEventListener("mouseup", closeDragElement);

         document.addEventListener("touchmove", elementDrag);
         document.addEventListener("mousemove", elementDrag);
       }

       function elementDrag(e) {
         e = e || window.event;
         // e.preventDefault();

         // get event's x coordinate
         var clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;

         // calculate the new cursor position and update
         x_1 = x_2 - clientX;
         x_2 = clientX;

         // set the element's new position. max: 0%, min: -85%.
         elmnt.style.left =
           Math.max(
             0,
             Math.min(85, ((elmnt.offsetLeft - x_1) / elmnt.offsetWidth) * 100)
           ) + "%";
       }

       // stop moving when mouse button is released
       function closeDragElement() {
         document.removeEventListener("touchend", closeDragElement);
         document.removeEventListener("mouseup", closeDragElement);
         document.removeEventListener("touchmove", elementDrag);
         document.removeEventListener("mousemove", elementDrag);
       }
     }



});

// $(window).scroll(function(){
//
// });
