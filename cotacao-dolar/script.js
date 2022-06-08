function cotDolar() {
  const data = document.getElementById('data').value
  const array = data.split("-")
  let ano = array[0];
  let mes = array[1];
  let dia = array[2];
  const dataCorreta = [mes,dia,ano];
  dataCorreta.toString();
  
  var url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${dataCorreta}%27&$top=100&$format=json`
  var servico = new XMLHttpRequest() //classe js especifica para serviços

  servico.open('GET', url)

  servico.onload = () => {
    var resposta = JSON.parse(servico.responseText) // conversão da resposta que stá em formato texto para JSON

    if (resposta.erro == 'true') {
      document.getElementById('resposta').innerHTML = 'Erro'
    } else {
      document.getElementById('resposta').innerHTML = `
        
            
                 Valor: ${resposta.value[0].cotacaoCompra}
                
            
            
            `
    }
  }
  servico.send()
//   alert(array);
}
