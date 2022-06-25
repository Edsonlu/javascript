//Elementos
var vbtIniciar
var vbola
var vcpu
var vjogador
var vPaineltxtPontos

//Controles de Animação
var game,franes

//Posições
var posBolaX, posBolaY
var posJogadorX, posJogadorY
var posCpuX, posCpuY

//Direção de acordo com a tecla
var dirJy

//Posições iniciais
var posJogIniY=180,posCpuIniY=180,posBolaIniX=475,posBolaIniY=240

//Tamanhos
var campoX=0,campoY=0,campoW=960,campoH=500
var barraW=20,barraH=140,bolaW=20,bolaH=20

//Direção
var bolaX,bolaY 
var cpuY=0

//Velocidade
var velBola,velCpu,velJogador

//Controle
var pontos=0
var tecla
jogo=false

function controlajog(){
  if(jogo){
    posJogadorY+=velJogador*dirJy
      if(((posJogadorY+barraH)>=campoH)||((posJogadorY)<=0)){
        posJogadorY+=(velJogador*dirJy)*(-1)
      }
    vjogador.style.top=posJogadorY+"px" //Não aceito pela js
  }
}
function controlacpu() {
  if(jogo) {
    if((posBolaX > (campoW/2)) && (bolaX > 0)) {
      //Movimentar CPU
      if (((posBolaY+(bolaH/2)) > ((posCpuY+(barraH/2)))+velCpu)){
        //Mover para baixo
        if((posCpuY+barraH) <= campoH){
          posCpuY+=velCpu
        }
      }else if ((posBolaY+(bolaH/2)) < (posCpuY+(barraH/2)) - velCpu){
        //Mover para cima
        if(posCpuY >=0){
          posCpuY-=velCpu
        }
      }
      }else {
        //Posicionar CPU no centro
        if ((posCpuY+(barraH/2)) < (campoH/2)){
          posCpuY+=velCpu
      }else if((posCpuY+(barraH/2)) > (campoH/2)){
        posBolaY-=velCpu
      }
    }
    vcpu.style.top=posCpuY+"px"
  }
}

function controlaBola() {
  //Movimentação da bola
  posBolaX+=velBola*bolaX
  posBolaY+=velBola*bolaY

  //Colisão com jogador
  if(
    (posBolaX <= posJogadorX+barraW)&&
    ((posBolaY+bolaH >= posJogadorY)&&(posBolaY <= posJogadorY+barraH))
    ){
    bolaY=(((posBolaY+(bolaH/2))-(posJogadorY+(barraH/2)))/16)
    bolaX*=-1
  }
  //Colisão com CPU
  if(
    (posBolaX >= posCpuX-barraW)&&
    ((posBolaY+bolaH >= posCpuY)&&(posBolaY <= posCpuY+barraH))
  ){
    bolaY=(((posBolaY+(bolaH/2))-(posCpuY+(barraH/2)))/16)
    bolaX*=-1
  }
  //Limites superior e inferior
  if((posBolaY >= 480) || (posBolaY <=0)) {
    bolaY*=-1
  }
  //Saiu da tela pela direita ou pela esquerda
  if(posBolaX >= (campoW - bolaW)){
    velBola=0
    posBolaX=posBolaIniX
    posBolaY=posBolaIniY
    posJogadorY=posJogIniY
    posCpuY=posCpuIniY
    pontos++
    vPaineltxtPontos.value=pontos
    jogo=false
    vjogador.style.top=posJogadorY+"px"
    vcpu.style.top=posCpuY+"px"
  }else if(posBolaX <=0) {
    velBola=0
    posBolaX=posBolaIniX
    posBolaY=posBolaIniY
    posJogadorY=posJogIniY
    posCpuY=posCpuIniY
    pontos--
    vPaineltxtPontos.value=pontos
    jogo=false
    vjogador.style.top=posJogadorY+"px"// aqui também
    vcpu.style.top=posCpuY+"px" //aqui também
  }

  vbola.style.top=posBolaY+"px"
  vbola.style.left=posBolaX+"px"
}//ficar de olho nessa chave
  
function teclaDw(){
  tecla=Event.keyCode//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXFicar de olho nesse keyCode
  if(tecla==38){//Tecla para cima XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    dirJy=-1
  }else if(tecla==40){//Tecla para baixo
    dirJy=+1
  }
}

function teclaUp(){
  tecla=Event.keyCode//Ficar de olho nesse keyCode
  if(tecla==38){//Tecla para cima
    dirJy=0
  }else if(tecla==40){//Tecla para baixo
    dirJy=0
  }
}

function game(){
  if(jogo){
    controlajog()
    controlaBola()
    controlacpu()
  }
  frames=requestAnimationFrame(game)
}

function iniciaJogo(){
  if(!jogo){
    velBola=velCpu=velJogador=8 
    cancelAnimationFrame(frames)
    jogo=true
    dirJy=0
    bolaY=0
    if((Math.random()*10)<5){
      bolaX=-1
    }else{
      bolaX=1
    }
    posBolaX=posBolaIniX
    posBolaY=posBolaIniY
    posJogadorY=posJogIniY
    posJogadorX=posBolaIniX
    posCpuX=posBolaIniX
    posCpuY=posCpuIniY
    game()
  }
}
function inicializa(){
  velBola=velCpu=velJogador=8
  vbtIniciar=document.getElementById("btIniciar")
  vbtIniciar.addEventListener("click",iniciaJogo)
  vjogador=document.getElementById("dvJogador")
  vcpu=document.getElementById("dvCpu")
  vbola=document.getElementById("dvBola")
  vPaineltxtPontos=document.getElementById("txtPontos")
  document.addEventListener("keydown",teclaDw)
  document.addEventListener("keyup",teclaUp)
}

window.addEventListener("load", inicializa)