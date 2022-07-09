var diryJ, dirxJ,jog,velJ,pjx,pjy
var jogo
var frames
var tamTelaW,tamTelaH
var px=0
var py=0

    document.addEventListener("keydown",function(event) {
      var obj=document.getElementById("naveJog")
      var tecla=event.shiftKey
      // 37-Esquerda / 38-Cima / 39-Direita / 40-Baixo
      if(tecla==37) {
        px-=10
        obj.style.left=px+"px"
      }else if(tecla==38) {
        py-=10
        obj.style.top=py + "px"
      }else if(tecla==39) {
        px+=10
        obj.style.left=px + "px"
      }else if(tecla==40) {
        py+=10
        obj.style.top=py + "px"
      }
    })

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
  velJ=5
  jog=document.getElementById("naveJog")
  jog.style.top=pjy+"px"
  jog.style.left=pjx+"px"

  gameLoop()
}
window.addEventListener("load", inicia)
document.addEventListener("keydown", teclaDw)
document.addEventListener("keyup", teclaUp)