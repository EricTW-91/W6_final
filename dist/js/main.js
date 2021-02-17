$(document).ready(function(){
    
    //title fade in

    $('.title').fadeIn(3000);

    $(window).scroll(function(){
        if ($(document).scrollTop() > 300){
            $('.music').slideDown(2000);
        }else{
            $('.music').slideUp(500);
        }
        
    });
    
    $('nav').on('click', function(){
        $('.music').slideDown(2000);
    })
    

    //play button

    $('#playBt01').on('click', function(){
        $('#play01').show();
        $('#play02').hide();
        $('#play03').hide();
        $('#play04').hide();
        $('#play05').hide();
        $('#play06').hide();
    });
    $('#playBt02').on('click', function(){
        $('#play02').show();
        $('#play01').hide();
        $('#play03').hide();
        $('#play04').hide();
        $('#play05').hide();
        $('#play06').hide();
    });
    $('#playBt03').on('click', function(){
        $('#play03').show();
        $('#play01').hide();
        $('#play02').hide();
        $('#play04').hide();
        $('#play05').hide();
        $('#play06').hide();
    });
    $('#playBt04').on('click', function(){
        $('#play04').show();
        $('#play01').hide();
        $('#play02').hide();
        $('#play03').hide();
        $('#play05').hide();
        $('#play06').hide();
    });
    $('#playBt05').on('click', function(){
        $('#play05').show();
        $('#play01').hide();
        $('#play02').hide();
        $('#play03').hide();
        $('#play04').hide();
        $('#play06').hide();
    });
    $('#playBt06').on('click', function(){
        $('#play06').show();
        $('#play01').hide();
        $('#play02').hide();
        $('#play03').hide();
        $('#play04').hide();
        $('#play05').hide();
    });


    //color mode
    $('#optionBt').on('click', function(){
        $('#optionBt').hide(500);
        $('#optionBox').show(500).css({'display': 'flex'});
        $('#liteModeImg').show(500);
    });

    $('#colorModeBt').on('click', function(){
        $('#liteModeImg').toggle(500);
        $('#darkModeImg').toggle(500);
    })

    $('#CMBt_close').on('click', function(){
        $('#optionBox').hide(500);
        $('#optionBt').show(500);
    })


});

function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }