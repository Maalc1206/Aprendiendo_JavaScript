window.onload = function () {
    $(".cap-2-window");
    $(".cap-2-console");
    $(".cap-2-events");

    // Botón de window
    $(".window").click(function(){
      $(".cap-2-window").slideToggle();
    });
    
  // Botón de Herramientas de Google
  $(".console").click(function(){
    $(".cap-2-console").slideToggle();
  });
    
  $(".cap-2-events").hide()
  // Botón de Eventos
  $(".eventos").click(function(){
    $(".cap-2-events").slideToggle();
  });
  }