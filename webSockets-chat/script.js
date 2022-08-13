connected = document.getElementById();
log = document.getElementById();
chat = document.getElementById();
form = chat.form;
state = document.getElementById();

if(window.WebSocket === undefined){
  state.innerHTML = "socket não suportado";
  state.className = "falha"
}
else{
  if(typeof String.prototype.startsWith != "function"){
    String.prototype.starsWith = function(str){
      return this.indexOf(str) == 0
    }
    
  }

  window,addEventListener("load", onload, false);
}

function onLoad(){
  var wsUri = "ws://127.0.0.1:7777"
  webSocket = new WebSocket(wsUri)
  websocket.onopen = function(evt) { onOpen(evt)};
  websocket.onclose = function(evt) { onClose(evt)}
  websocket.onmessage = function(evt) { onMessage(evt)};
  websocket.onerror = function(evt) { onError(evt)};

}

function onOpen(evt){
  state.className = "sucesso"
  state.innetHTML = "Conectado ao servidor"
}

function onClose(evt){
  state.className = "falha"
  state.innerHTML = "Não conectado"
  connected.innerHTML = "0"
}

function onMessage(evt){

  var message = evt.data

  if(message.startsWith("log")){
    message = message.slice("log".length)
    log.innerHTML = '<li class="mensagem">' + message + "</li>" + log.innerHTML 
  }
  else if(message.starsWith("conectado")){
    message = message.slice("conectado".length)
    connected.innerHTML = message
  }
}

function onError(evt){
  state.className = "falha"
  state.innerHTML = "erro de comunicação"
}

function addMessage(){
  var message = chat.value
  chat.value = ""
  websocket.send(message)
}