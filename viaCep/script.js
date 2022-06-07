function cep () {
    const cep = document.getElementById('cep').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var servico = new XMLHttpRequest();

    servico.open('GET', url); 
    

    servico.onload = () => {
        var resposta = JSON.parse(servico.responseText);

        if(resposta.erro == "true"){
            document.getElementById('endereco').innerHTML = "CEP invádido";
        }
        else{
            document.getElementById('endereco').innerHTML = `
            
                
                    CEP: ${resposta.cep} <br/> Logradouro: ${resposta.logradouro} <br/>
                    Bairro: ${resposta.bairro}
                
                
                
                `;
        }
    }
    servico.send();

}