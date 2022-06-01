var biblioteca=["Javascript", "curso", "computador", "transporte", "livraria", "tecnologia", "controle", "churrasco", "brasil", "impressora", "xicara", "telefone", "internet", "camera", "monitor", "brinquedo", "youtube", "portaria", "escola", "carnaval", "teclado", "guitarra", "bateria", "chinelo", "helicoptero", "arduino"]
var qtde=biblioteca.length-1
var pos=Math.round(Math.random()*qtde)
var palavra=biblioteca[pos]
var tam=palavra.length
var cxLetras=[]
var acertos
var errosMax=7
var erros=0
var desenhos=[]
var acertou=false
var jogando=false
var jog

function defineLetras(L) {
  var obj
  for (var i=0; i<20;i++) {
    obj=document.getElementById("letra" + i).value=""
    obj=document.getElementById("letra" + i).style.display="none"
  } 
  for (var i=0; i<L;i++) {
    obj=document.getElementById("letra" + i).style.display="inline-block"
  }
}
function jogar() {
  jog=document.getElementById("letraJ")
  jog.focus()
  if (jog.value=="") {
    alert("Digite uma letra")
  }else {
    if (jogando) {
      var jog
      var obj
      var letraTmp
      var letra
      var pesq
      letra=jog.value
      jog.value=""
      pesq=palavra.match(letra)
      acertou=false
      while (pesq!=null) {
        letraTmp=palavra.search(letra)
        obj=document.getElementById("letra"+letraTmp).value=letra
        palavra=palavra.replace(letra, "0")
        acertos++
        pesq=palavra.match(letra)
        acertou=true
      }
      if (!acertou) {
        document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase()
        erros++
        if (erros<7) {
          desenhos[erros].style.display="block"
        }else {
          document.getElementById("cabeça").src="cabeça2.jpg"
          document.getElementById("dvmsg").innerHTML="PERDEU!!! PERDEU PLAYBOY!!! PERDEU!!! PERDEU PLAYGIRL!!! PERDEU!!! O TROFEU SUMIU JÁ ERA!!!"
          document.getElementById("trofeu").style.display="none"
          jogando=false
        }
      }
      if (acertos==tam) {
        document.getElementById("dvmsg").innerHTML=""
        document.getElementById("dvmsg").innerHTML="GANHOU!!! FAZER O QUE!!! NÃO SE PODE GANHAR TODAS. PARABÉNS!!! O TROFEU DE CAMPEÃO É TODO SEU!!!"
      }
    }
  }
}
function inicia() {
  jogando=true
  jog=document.getElementById("letraJ")
  jog.value=""
  jog.focus()
  acertos=0
  erros=0
  acertou=false
  document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas"
  pos=Math.round(Math.random()*qtde)
  palavra=biblioteca[pos]
  tam=palavra.length
  defineLetras(tam)
  document.getElementById("dvmsg").innerHTML=""
  desenhos[1]=document.getElementById("cabeça")
  desenhos[2]=document.getElementById("corpo")
  desenhos[3]=document.getElementById("braçoE")
  desenhos[4]=document.getElementById("braçoD")
  desenhos[5]=document.getElementById("pernaE")
  desenhos[6]=document.getElementById("pernaD")
  document.getElementById("cabeça").src="cabeça1.jpg"
  for (var i=1;i<7;i++) {
    desenhos[i].style.display="none"
  }
}
function dica() {
  alert(palavra)
  jog.focus()
}
window.addEventListener("load", inicia)