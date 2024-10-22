$(document).ready(function() {
   $('#mobile-btn').on('click', function() {
      $('#mobile-menu').toggleClass('active');
      
       if ($('#mobile-menu').hasClass('active')) {
         $('main').css('margin-top', '100px'); // Mesma altura que o menu
      } else {
         $('main').css('margin-top', '0'); // Volta à posição normal
      }
      
      
      
      $('#mobile-btn').find('i').toggleClass('fa-x');
   });
   
   const sections = $('section');
   const navItems = $('.nav-item');
   const headerHeight = $('header').outerHeight();  // Altura do header fixo

$(window).on('scroll', function () {
   const scrollPosition = $(window).scrollTop();  // Posição de rolagem da janela

   let activeSectionIndex = 0;

    // Aplica sombra no header ao rolar a página
   if (scrollPosition <= 0) {
        $('header').css('box-shadow', 'none');
   } else {
        $('header').css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
   }

    // Verifica cada seção para determinar qual está ativa
   sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - headerHeight;  // Ajusta pelo header
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
         activeSectionIndex = i;
         return false;  // Interrompe o loop ao encontrar a seção ativa
      }
   });

});
   
   
   ScrollReveal().reveal('.logo-name', {
     origin: 'left',  // Define a origem da animação de baixo para cima
     distance: '100px',  // Define a distância que o elemento vai percorrer
     duration: 3100,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   });
   
   ScrollReveal().reveal('.description', {
     origin: 'right',  // Define a origem da animação de baixo para cima
     distance: '200px',  // Define a distância que o elemento vai percorrer
     duration: 3000,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   });
   
   ScrollReveal().reveal('#portfolio', {
     origin: 'left',  // Define a origem da animação de baixo para cima
     distance: '100px',  // Define a distância que o elemento vai percorrer
     duration: 3200,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   })
   
   ScrollReveal().reveal('.products__card', {
     origin: 'top',  // Define a origem da animação de baixo para cima
     distance: '200px',  // Define a distância que o elemento vai percorrer
     duration: 3500,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   });
   
   ScrollReveal().reveal('#about', {
     origin: 'bottom',  // Define a origem da animação de baixo para cima
     distance: '200px',  // Define a distância que o elemento vai percorrer
     duration: 3000,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   });
   
   ScrollReveal().reveal('.carousel', {
     origin: 'bottom',  // Define a origem da animação de baixo para cima
     distance: '200px',  // Define a distância que o elemento vai percorrer
     duration: 3000,    // Duração da animação em milissegundos 
     opacity: 0,
     reset: true
   });
   
   
   $('.logo-name').hover(
     function() {
       // Quando o mouse entra no item de navegação
       $(this).css({
         'transform': 'scale(1.2)',  // Aumenta o item em 20%
         'transition': 'transform 0.3s ease'  // Transição suave
       });
     }, 
     function() {
       // Quando o mouse sai do item de navegação
       $(this).css({
         'transform': 'scale(1)',  // Volta ao tamanho normal
         'transition': 'transform 0.3s ease'  // Transição suave
       });
     }
   );
      $('#nav-logo').hover(
     function() {
       // Quando o mouse entra no item de navegação
       $(this).css({
         'transform': 'scale(1.2)',  // Aumenta o item em 20%
         'transition': 'transform 0.3s ease'  // Transição suave
       });
     }, 
     function() {
       // Quando o mouse sai do item de navegação
       $(this).css({
         'transform': 'scale(1)',  // Volta ao tamanho normal
         'transition': 'transform 0.3s ease'  // Transição suave
       });
     }
   );
}); 




window.addEventListener("scroll", function(){
   let header = document.querySelector('#header-bar');
   header.classList.toggle('rolagem', window.scrollY > 0);
});


// caroussel inicio
$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const totalItems = items.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        // Certifica-se de que o índice está entre 0 e o total de slides
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        
        // Muda a posição do carrossel
        const offset = -currentIndex * 100;  // Deslocamento para o slide atual
        $('.carousel-inner').css('transform', `translateX(${offset}%)`);
    }

    // Função de avanço automático a cada 15 segundos
    let autoSlide = setInterval(function() {
        showSlide(currentIndex + 1);
    }, 15000);

    // Evento para clicar no botão 'Próximo'
    $('.next').on('click', function() {
        clearInterval(autoSlide);  // Para o autoSlide ao clicar manualmente
        showSlide(currentIndex + 1);
        autoSlide = setInterval(function() {
            showSlide(currentIndex + 1);
        }, 3000);  // Reinicia o autoSlide após clicar
    });

    // Evento para clicar no botão 'Anterior'
    $('.prev').on('click', function() {
        clearInterval(autoSlide);  // Para o autoSlide ao clicar manualmente
        showSlide(currentIndex - 1);
        autoSlide = setInterval(function() {
            showSlide(currentIndex + 1);
        }, 3000);  // Reinicia o autoSlide após clicar
    });
});

// caroulssel fim



