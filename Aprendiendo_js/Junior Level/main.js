window.onload = function () {
    
  // Botón de introducción
  $("#intro").click(function(){
    $(".cap-1-intro").slideToggle();
  });
    
  // Botón de array
  $("#array").click(function(){
    $(".cap-1-array").slideToggle();
  });
  
    // Botón de Programación orientada a objetos
    $("#poo").click(function(){
      $(".cap-1-poo").slideToggle();
    });
  
    // Botón de Métodos de cadenas
    $("#metCadena").click(function(){
      $(".cap-1-metCadena").slideToggle();
    });
  
    // Botón de la consola
    $("#consola").click(function(){
      $(".cap-1-consola").slideToggle();
    });
  
    // Botón del DOM
    $("#dom").click(function(){
      $(".cap-1-dom").slideToggle();
    });
}