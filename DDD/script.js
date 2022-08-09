// function listarCidades(){

// const ddd = document.getElementById("ddd").value;
// const resposta = document.getElementById("resposta");

// var url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

// var lista = new XMLHttpRequest();
// lista.open('GET', url);

// lista.onload = () =>{
//   var resp = JSON.parse(lista.responseText);
//   // var chave = Object.keys(resposta1);
  
//   if(resp.erro == "true"){
//     document.getElementById('resposta').innerHTML = "<h2>Erro ao carregar cidades</h2>";
//   }
//   else{
//       var cidades = resp.cities;
//       resposta.innerHTML =`<h2>Cidades de <strong>${resp.state}</strong></h2>`
//       for(let i = 0 ; i < cidades.length; i++){
//         var item = document.createElement("p");
//         resposta.appendChild(item).textContent = cidades[i];
//       }
      
//       console.log(ddd)
//   }
//   }
//   lista.send();
// }


    

   async function cidades (){
      const ddd = 19
      await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
      // fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response)=> response.json())
      .then((data)=> console.log(data.state))

      console.log("depois do fetch")
   }
   
   
            





