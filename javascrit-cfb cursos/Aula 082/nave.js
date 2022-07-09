var diryJ, dirxJ,jog,velJ,pjx,pjy
var jogo
var velT
var frames
var tamTelaW,tamTelaH
var px=0
var py=0

function teclaDw(){
  var tecla=Event.keyCode
  if (tecla==38){
    diryJ=-1
  }else if(tecla==40){
    diryJ=1
  }
  if(tecla==37){
    dirxJ=-1
  }else if(tecla==39){
    dirxJ=1
  }
  if (tecla==32){
    //Tiro
    atira(pjx+17,pjy)
  }
}
function teclaUp(){
  var tecla=Event.keyCode
  if((tecla==38)||(tecla==40)){
    diryJ=0
  }
  if ((tecla==37)||(tecla==39)){
    dirxJ=0
  }
}

function atira(x,y){
  var t=document.createElement("div")
  var att1=document.createAttribute("class")
  var att2=document.createAttribute("style")
  att1.value="tiroJog"
  att2.value="top:"+y+"px;left:"+x+"px"
  t.setAttributeNode(att1)
  t.setAttributeNode(att2)
  document.body.appendChild(t)
}

function controleTiros(){
  var tiros=document.getElementsByClassName("tiroJog")
  var tam=tiros.length
  for (var i=0;i<tam;i++){
    if(tiros[i]){
      var pt=tiros[i].offsetTop
      pt-=velT
      tiros[i].style.top=pt+"px"
      if(pt<0){
        tiros[i].remove()
      }
    }
  }
}
function controlaJogador(){
  pjy+=diryJ*velJ
  pjx+=dirxJ*velJ
  jog.style.top=pjy+"px"
  jog.style.left=pjx+"px"
}
function gameLoop(){
  if(jogo){
    //Funções de controle
    controlaJogador()
    controleTiros()
  }
  frames=requestAnimationFrame(gameLoop)// de olho xxxxxxxxxxxxxxxxxx
}
function inicia(){
  jogo=true

  //Ini Tela
  tamTelaH=window.innerHeight
  tamTelaW=window.innerWidth

  //Ini Jogador
  dirxJ=diryJ=0
  pjx=tamTelaW/2
  pjy=tamTelaH/2
  velJ=velT=5
  jog=document.getElementById("naveJog")
  jog.style.top=pjy+"px"
  jog.style.left=pjx+"px"

  gameLoop()
}
window.addEventListener("load", inicia)
document.addEventListener("keydown", teclaDw)
document.addEventListener("keyup", teclaUp)