

dineroCofla = prompt ("¿Cuánto dinero tienes Cofla?")
dineroPedro = prompt ("¿Cuánto dinero tienes Pedro?")
dineroRoberto = prompt ("¿Cuánto dinero tienes Roberto?")

dineroCofla = parseInt(dineroCofla)
dineroRoberto = parseInt(dineroRoberto)
dineroPedro = parseInt(dineroPedro)

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla, Puedes comprar una PALETA DE AGUA");
    alert("Te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, Puedes comprar un HELADO DE CREMA");
    alert("Te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, Puedes comprar un BOMBON DE HELADO");
    alert("Te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, Puedes comprar un HELADO VICHE");
    alert("Te sobran" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, Puedes comprar un HELADO DE LECHE");
    alert("Te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9){
    alert("Cofla, puedes elegir entre comprar un HELADO DE CONFITES Y 1/4 KG DE HELADO");
    alert("Te sobran" + (dineroCofla - 2.9));
}

else {
    alert("Cofla, Lo lamentamos, no te alcanza para comprar ningún helado");
}


if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro, Puedes comprar una PALETA DE AGUA");
    alert("Te sobran" + (dineroPedro - 0.6));
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro, Puedes comprar un HELADO DE CREMA");
    alert("Te sobran" + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro, Puedes comprar un BOMBON DE HELADO");
    alert("Te sobran" + (dineroPedro - 1.6));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, Puedes comprar un HELADO VICHE");
    alert("Te sobran" + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, Puedes comprar un HELADO DE LECHE");
    alert("Te sobran" + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9){
    alert("Pedro, puedes elegir entre comprar un HELADODE CONFITES Y 1/4 KG DE HELADO");
    alert("Te sobran" + (dineroPedro - 2.9));
}

else {
    alert("Pedro, Lo lamentamos, no te alcanza para comprar ningún helado>")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto, Puedes comprar una PALETA DE AGUA");
    alert("Te sobran" + (dineroRoberto - 0.6));
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, Puedes comprar un HELADO DE CREMA");
    alert("Te sobran" + (dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, Puedes comprar un BOMBON DE HELADO");
    alert("Te sobran" + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, Puedes comprar un HELADO VICHE");
    alert("Te sobran" + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, Puedes comprar un HELADO DE LECHE");
    alert("Te sobran" + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9){
    alert("Roberto, puedes elegir entre comprar un HELADO DE CONFITES Y 1/4 KG DE HELADO");
    alert("Te sobran" + (dineroRoberto - 2.9));
}

else {
    alert("Roberto, Lo lamentamos, no te alcanza para comprar ningún helado>")
}