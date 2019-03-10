// let slide = $('.single-slide')

// console.log('single-slide')


// $( "#hide" ).click( function() {  
//        $( "p" ).fadeOut( "slow" ); 
//     } ); 
 
// $( "#show" ).click( function() { 
//         $( "p" ).fadeIn( "fast" ); 
//     } );


    let SlideShow = $('.slide-show');
    let SingleSlide = $('.single-slide');
    let prevSlide = $('.prev-slide');
    let nextSlide = $('.next-slide');
    let SingleSlideWidth = SingleSlide.length * 100 + '%';
    let proportionSlide = 100 / SingleSlide.length;
    let globalCounter = 0;


console.log(SingleSlideWidth)
//ustawiamy szerokość dla calego kontenera z obrazkami
    SlideShow.css('width', SingleSlideWidth);

    //ustawiamy serokość dla poszczegulnego obrazka

    SingleSlide.css('width', proportionSlide + '%');

    // SlideShow.find('.single-slide').css({
    //     width:''
    // })

    //utawiamy margines dla obrazków
    SingleSlide.each(function(index, element){
        $(element).css('margin-left', index  *  proportionSlide + '%');
    });

    //dowolne zdarzenie dla przcisków

    prevSlide.click(function(){
        // console.log('prev')
        slide(globalCounter - 1 );
    });
    nextSlide.click(function(){
        // console.log('next')
        slide(globalCounter + 1);
    });

    function slide(newGlobalCounter){
        if (newGlobalCounter < 0 || newGlobalCounter >= SingleSlide.length ) {
            return;
        }
            //pobieramy i ukrywamy na przesuwanieciu bieżacy napis
        let slideCaption = SlideShow.find('.slide-caption').eq(newGlobalCounter);
        slideCaption.fadeOut();

        let marginLeft = (newGlobalCounter * (-100)) + '%';


        SlideShow.animate({marginLeft: marginLeft}, 1000, function(){
            slideCaption.fadeIn();

            globalCounter = newGlobalCounter;
        });
        //console.log(globalCounter);
    }
