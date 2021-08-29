 window.onload=function(){
     var app = document.getElementById('random');

        var typewriter = new Typewriter(app, {
          loop: true
        });

        typewriter.
           typeString('I')
          .pauseFor(500)
          .deleteAll()
          .typeString('Me')
          .pauseFor(500)
          .deleteAll()
          .typeString('Myself')
          .pauseFor(600)
          .deleteAll()
          .pauseFor(4000)
          .start();
    
          var app = document.getElementById('randomagain');

          var typewriter = new Typewriter(app, {
            loop: true
          });
          
          typewriter.pauseFor(5000)
          .typeString('E')
            .pauseFor(100)
            .typeString('v')
            .pauseFor(100)
            .typeString('e')
            .pauseFor(100)
            .typeString('r')
            .pauseFor(100)
            .typeString('y')
            .pauseFor(100)
            .typeString('t')
            .pauseFor(100)
            .typeString('h')
            .pauseFor(100)
            .typeString('i')
            .pauseFor(100)
            .typeString('n')
            .pauseFor(100)
            .typeString('g')
            .deleteAll()
            .start()

            $("#navbarNav").on('show.bs.collapse', function() {
                $('a.nav-link').click(function() {
                    $("#navbarNav").collapse('hide');
                });
            });


            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                observer: true,
                observeParent: true,
                
              });
        
    }  
      