function prevTemp(){
  const city1  = document.getElementById('city1').innerHTML;
  const city2  = document.getElementById('city2').innerHTML;
  const city3  = document.getElementById('city3').innerHTML;

  var url1 = `https://api.hgbrasil.com/weather?format=json-cors&key=8367464f&city_name=${city1}`;
  var url2 = `https://api.hgbrasil.com/weather?format=json-cors&key=8367464f&city_name=${city2}`;
  var url3 = `https://api.hgbrasil.com/weather?format=json-cors&key=8367464f&city_name=${city3}`;

  var prev1 = new XMLHttpRequest();
  var prev2 = new XMLHttpRequest();
  var prev3 = new XMLHttpRequest();

  prev1.open('GET', url1);
  prev2.open('GET', url2);
  prev3.open('GET', url3);

  prev1.onload = () =>{
    var resposta1 = JSON.parse(prev1.responseText);
    var chave = Object.keys(resposta1);
    if(resposta1.erro == "true"){
      document.getElementById('city11').innerHTML = "ERRO";
    }
    else{
        document.getElementById('city11').innerHTML = `

            Temp: ${resposta1.results.temp} C
              
        `;
  }
}
prev1.send();

prev2.onload = () =>{
  var resposta2 = JSON.parse(prev2.responseText);
  var chave = Object.keys(resposta2);
  if(resposta2.erro == "true"){
    document.getElementById('city22').innerHTML = "ERRO";
  }
  else{
      document.getElementById('city22').innerHTML = `

          Temp: ${resposta2.results.temp} C
            
      `;
}
}
prev2.send();

prev3.onload = () =>{
  var resposta3 = JSON.parse(prev3.responseText);
  var chave = Object.keys(resposta3);
  if(resposta3.erro == "true"){
    document.getElementById('city33').innerHTML = "ERRO";
  }
  else{
      document.getElementById('city33').innerHTML = `

          Temp: ${resposta3.results.temp} C
            
      `;
}
}
prev3.send();


}
          
          
          










  

