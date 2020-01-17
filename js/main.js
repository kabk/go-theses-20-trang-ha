


$(document).ready(function(){
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
  $('.forTheFirstTime').textillate({
    loop: true,
    in: {
  	// set the effect name
    effect: 'wobble',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: true,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },
    out: {
    effect: 'swing',
    delayScale: 2.5,
    delay: 50,
    sync: true,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  });
  $('.taste').textillate({
    loop: true,
    in: {
  	// set the effect name
    effect: 'rollIn',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 70,

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
    effect: 'rollOut',
    delayScale: 1,
    delay: 0,
    sync: false,
    shuffle: true,
    reverse: false,
    callback: function () {}
  },
  });
  $('.whenYouTouchUpon').textillate({
    loop: true,
    minDisplayTime: 5000,
      in: {
    	// set the effect name
      effect: 'shake',

      // set the delay factor applied to each consecutive character
      delayScale: 1,

      // set the delay between each character
      delay: 15,

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
      effect: 'shake',
      delayScale: 1,
      delay: 15,
      sync: false,
      shuffle: true,
      reverse: false,
      callback: function () {}
      },
    // callback that executes once textillate has finished
    callback: function () {},

    // set the type of token to animate (available types: 'char' and 'word')
    type: 'char'
  });


  $(".extraSpace2").each(function(){
    const curtainH = $(this).parent().height();
    console.log(curtainH);
    const curtainpH = $(".extraSpace2").height();
    const curtainOffTop = (curtainH - curtainpH)/2;
    $(this).css({
      "margin-top" : curtainOffTop,
    });
  });



});
