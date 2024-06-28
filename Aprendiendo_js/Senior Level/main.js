window.onload = function () {
    $(".cap-2-window");
    $(".cap-2-console");

    // Botón de window
    $(".window").click(function(){
      $(".cap-2-window").slideToggle();
    });
      
    // Botón de Herramientas de Google
    $(".console").click(function(){
      $(".cap-2-console").slideToggle();
    });
  }