function criarCookie(nome, valor, expira){
  var dtExpira="expires="+ expira
  document.cookie = nome + "=" + valor + "; " + dtExpira
}
function lerCookie(nome){
  var vnome= nome + "=" 
  var ca = document.cookie.split(';')
  for (var i=0; i<ca.length; i++){
    var c=ca[i]
    while(c.charAt(0)==' '){
      c = c.substring(1)
    }
    if(c.indexOf(vnome) == 0) return c.substring(vnome.length, c.length)
  }
  return ""
}
function verificaCookie(){
  var username=lerCookie("username")
  if (username!=""){
    alert("Bem vindo novamente" + username)
  }else{
    username=prompt("Digite o seu nome:","")
    if (username != "" && username != null) {
      criarCookie("username", username, "Tue, 01 Jan 2115 18:00:00 UTC ")
    }
  }
}