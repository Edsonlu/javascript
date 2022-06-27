var diryJ, dirxJ

function teclaDw(){
  var tecla=Event.keyCode
  if(tecla==38){//Cima
    diryJ=-1
  }else if(tecla==40){//Baixo
    diryJ=1
  }
  if(tecla==37){//Esquerda
    dirxJ=-1
  }else if(tecla==39){//Direita
    dirxJ=1
  }
  if(tecla==32){//Espaço /Tiro
    //Tiro
  }
}
function teclaUp(){
  var tecla=Event.keyCode
  if((tecla==38) || (tecla==40)){
    diryJ=0
  }
  if((tecla==37) || (tecla==39)){//Esquerda
    dirxJ=0
  }
}