var diryJ, dirxJ,jog,velJ,pjx,pjy
var jogo
var velT
var frames
var tamTelaW,tamTelaH
var px=0
var py=0
var contBombas, painelContBombas,velB,tmpCriaBomba
var bombasTotal
var vidaPlaneta,barraPlaneta
var ie,isom
var telaMsg

function teclaDw(){
  var tecla=event.keyCode
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
    atira(pjx+24,pjy)
  }
}
function teclaUp(){
  var tecla=event.keyCode
  if((tecla==38)||(tecla==40)){
    diryJ=0
  }
  if ((tecla==37)||(tecla==39)){
    dirxJ=0
  }
}

function criaBomba(){
  if(jogo){
    var y=0
    var x=Math.random()*tamTelaW
    var bomba=document.createElement("div")
    var att1=document.createAttribute("class")
    var att2=document.createAttribute("style")
    att1.value="bomba"
    att2.value="top:"+y+"px; left:"+x+"px;"
    bomba.setAttributeNode(att1)
    bomba.setAttributeNode(att2)
    document.body.appendChild(bomba)
    contBombas--
  }
}

function controlaBomba(){
  bombasTotal=document.getElementsByClassName("bomba")
  var tam=bombasTotal.length
  for(var i=0;i<tam;i++){
    if(bombasTotal[i]){
      var pi=bombasTotal[i].offsetTop
      pi+=velB
      bombasTotal[i].style.top=pi+"px"
      if(pi>tamTelaH){
        vidaPlaneta-=10
        criaExplosão(2,bombasTotal[1].offsetLeft,null)
        bombasTotal[i].remove()
      }
    }
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
      colisãoTiroBomba(tiros[i])
      if(pt<0){
        tiros[i].remove()
      }
    }
  }
}

function colisãoTiroBomba(tiro){
  var tam=bombasTotal.length
  for(var i=0;i<tam;i++){
    if(bombasTotal[i]){
      if(
          (
            (tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&& //Cima tiro baixo bomba
            ((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)) //baixo tiro cima bomba
          )
          &&
          (
            (tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&& //Esquerda tiro com direita bomba
            ((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft)) //Direita tiro com esquerda bomba
          )
        ){
          criaExplosão(1,bombasTotal[i].offsetLeft-25,bombasTotal[i].offsetTop)
          bombasTotal[i].remove()
          tiro.remove()
      }
    }
  }
}

function criaExplosão(tipo,x,y){ //Explosão tipo 1 = Ar tipo 2 = Chão
  if (document.getElementById("explosão"+(ie-4))){
    document.getElementById("explosão"+(ie-4)).remove()

  }
  var explosão=document.createElement("div")
  var img=document.createElement("img")
  var som=document.createElement("audio")
  //Atributos para div
  var att1=document.createAttribute("class")
  var att2=document.createAttribute("style")
  var att3=document.createAttribute("id")
  //Atributo para imagem
  var att4=document.createAttribute("src")
  //Atributos para audio
  var att5=document.createAttribute("src")
  var att6=document.createAttribute("id")

  att3.value="explosão"+ie
  if(tipo==1){
    att1.value="explosãoAr"
    att2.value="top:"+y+"px;left:"+x+"px;"
    att4.value="explosão_ar.gif?"+new Date() //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  }else{
    att1.value="explosãoChão"
    att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;"
    att4.value="explosão_chão.gif?"+new Date()
  }
  att5.value="exp1.mp3?"+new Date()
  att6.value="som"+isom //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  explosão.setAttributeNode(att1)
  explosão.setAttributeNode(att2)
  explosão.setAttributeNode(att3)
  img.setAttributeNode(att4)
  som.setAttributeNode(att5)
  som.setAttributeNode(att6)
  explosão.appendChild(img)
  explosão.appendChild(som)
  document.body.appendChild(explosão)
  document.getElementById("som"+isom).play() //Ficar de olho XXXXXXXXXXXXXXXXXXX
  ie++
  isom++
}

function controlaJogador(){
  pjy+=diryJ*velJ
  pjx+=dirxJ*velJ
  jog.style.top=pjy+"px"
  jog.style.left=pjx+"px"
}

function gerenciaGame(){
  barraPlaneta.style.width=vidaPlaneta+"px"
  if(contBombas<=0){
    jogo=false
    clearInterval(tmpCriaBomba)//AAAAAqqquuuiiiii
    telaMsg.style.backgroundImage="url('vitoria.jpg')"
    telaMsg.style.display="block"
  }
  if(vidaPlaneta<=0){
    jogo=false
    clearInterval(tmpCriaBomba)//AAAAAqqquuuiiiii
    telaMsg.style.backgroundImage="url('fimdejogo.jpg')"
    telaMsg.style.display="block"
  }
}

function gameLoop(){
  if(jogo){
    //Funções de controle
    controlaJogador()
    controleTiros()
    controlaBomba()
  }
  gerenciaGame()
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

  //Controle das Bombas
  clearInterval(tmpCriaBomba)
  contBombas=150 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  velB=3
  tmpCriaBomba=setInterval(criaBomba, 1700)

  //Controles do planeta
  vidaPlaneta=300
  barraPlaneta=document.getElementById("barraPlaneta")
  barraPlaneta.style.width=vidaPlaneta+"px"
  //controle de explosão
  ie=isom=0

  //Telas
  telaMsg=document.getElementById("telaMsg")

  gameLoop()
}

window.addEventListener("load", inicia)
document.addEventListener("keydown", teclaDw)
document.addEventListener("keyup", teclaUp)