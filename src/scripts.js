/*
  --------------------------------------------------------------------------------------
  *************************************************************************************************************************************************************************
  *************************************************************************************************************************************************************************
  BUSCAS NA  API da OPENAI 
  *************************************************************************************************************************************************************************
  *************************************************************************************************************************************************************************
  --------------------------------------------------------------------------------------
*/
/*
  --------------------------------------------------------------------------------------
  Função para obter da API da OPENAI as caracteristicas de um Automóvel fazendo uma requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getGPT_DiferencialAuto = async () => {

  
 /* let inputRegiao = document.getElementById("localizacao-select").value;*/
  let inputCategoria_modelo = document.getElementById("categoria-select").value;
  let inputTipoModelo = document.getElementById("tipoVeiculos-select").value;
  let inputTipo_cambio_modelo = document.getElementById("tipoCambio-select").value;
  let inputMarca = document.getElementById("marca-select").value;
  let inputModelo = document.getElementById("modelo").value;
  let inputAno_desde_modelo = document.getElementById("anoDesde").value;
  

  nome_modelo = "Automóvel Brasileiro, " + inputCategoria_modelo + ",  "  + ",  marca " +inputMarca + ",  modelo " + inputModelo + ", ano " +inputAno_desde_modelo
  nome_modelo = nome_modelo + ". Apresentar resumidamente 4 características sobre este automóvel." 
  
 ///Nome do modelo deve ser passado para o endpoint
 let url = 'http://127.0.0.1:5001/bestcaracteristicasautomovel?request=' + nome_modelo;
 ////////////////////////



  fetch(url, {
    method: 'get',  })
    .then((response) => response.text())
      .then((text) => {
        item=text;
        ////////////////////////
        document.getElementById("aiInfoDif_Auto").value=item;
       
      })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para obter da API da OPENAI o valor médio do automóvel na região informada via CEP fazendo uma requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getGPT_ValorMedioAuto = async () => {

  
   let inputRegiao = document.getElementById("Regiao_Armazenar").value;
   let inputCategoria_modelo = document.getElementById("categoria-select").value;
   let inputTipoModelo = document.getElementById("tipoVeiculos-select").value;
   let inputTipo_cambio_modelo = document.getElementById("tipoCambio-select").value;
   let inputMarca = document.getElementById("marca-select").value;
   let inputModelo = document.getElementById("modelo").value;
   let inputAno_desde_modelo = document.getElementById("anoDesde").value;
   
 
   nome_modelo = "Automóvel , " + inputCategoria_modelo +  ", marca " +inputMarca + ", modelo " + inputModelo + ", ano " + inputAno_desde_modelo + + ", região: " + inputRegiao
   nome_modelo = nome_modelo + ". Apresentar somente o valor médio deste automóvel fabricado no ano citado e na região informada, sem nenhum tipo de informação adicional. " 
   
  ///Nome do modelo deve ser passado para o endpoint
  let url = 'http://127.0.0.1:5001/valormedionaregiao?request=' + nome_modelo;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.text())
      .then((text) => {
        item=text;
         ////////////////////////
         document.getElementById("aiValorMedioAuto").value=item;
         
       })
     .catch((error) => {
       console.error('Error:', error);
     });
 }
 
 
/*
  --------------------------------------------------------------------------------------
  Função para obter da API da OPENAI o valor médio do seguro anual do automóvel na região informada via CEP fazendo uma requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getGPT_ValorSeguroAutoRegiao = async () => {

  
   let inputRegiao = document.getElementById("Regiao_Armazenar").value;
   let inputCategoria_modelo = document.getElementById("categoria-select").value;
   let inputTipoModelo = document.getElementById("tipoVeiculos-select").value;
   let inputTipo_cambio_modelo = document.getElementById("tipoCambio-select").value;
   let inputMarca = document.getElementById("marca-select").value;
   let inputModelo = document.getElementById("modelo").value;
   let inputAno_desde_modelo = document.getElementById("anoDesde").value;
   
 
   nome_modelo = "Automóvel Brasileiro, " + inputCategoria_modelo + ", marca " +inputMarca + ", modelo " + inputModelo + " , ano " +inputAno_desde_modelo+ " , Região: "+ inputRegiao+ ". "  
   nome_modelo = nome_modelo + ". Apresentar somente o valor médio de um seguro anual para o Automóvel citado na região informada, sem nenhum outro tipo de informação adicional." 
   
  ///Nome do modelo deve ser passado para o endpoint
  let url = 'http://127.0.0.1:5001/valormedioseguroautonaregiao?request=' + nome_modelo;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.text())
      .then((text) => {
        item=text;
         ////////////////////////
         document.getElementById("aiValorSeguroAutoRegiao").value=item;
         
       })
     .catch((error) => {
       console.error('Error:', error);
     });
 }
 

 /*
  --------------------------------------------------------------------------------------
  Função para obter da API da OPENAI, as características positivas na região informada via CEP fazendo uma requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getGPT_InformacaoRegiaoCep = async () => {

  
   let inputRegiao = document.getElementById("Regiao_Armazenar").value;
   
   nome_modelo = "Região do Brazil:  " + inputRegiao  + " . "
   nome_modelo = nome_modelo + " informe um resumo de 4 linhas com caracteristicas da rua, bairro e cidade da região informada." 
   
  ///Nome do modelo deve ser passado para o endpoint
  let url = 'http://127.0.0.1:5001/informacoesregiao?request=' + nome_modelo;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.text())
      .then((text) => {
        item=text;
         ////////////////////////
         document.getElementById("aiInfoRegiaoCep").value=item;
         
       })
     .catch((error) => {
       console.error('Error:', error);
     });
 }



/*
  --------------------------------------------------------------------------------------
  *************************************************************************************************************************************************************************
  *************************************************************************************************************************************************************************
  FIM BLOCO - BUSCAS NA  API da OPENAI
  *************************************************************************************************************************************************************************
  ************************************************************************************************************************************************************************* 
  --------------------------------------------------------------------------------------





*************************************************************************************************************************************************************************
*************************************************************************************************************************************************************************
  INÍCIO BLOCO AUTOMÓVEIS E MODELOS
  *************************************************************************************************************************************************************************
  *************************************************************************************************************************************************************************
*/
/*
--------------------------------------------------------------------------------------
Chamada da função para carregamento inicial dos dados
--------------------------------------------------------------------------------------
*/
onload = function () {
getList()
};
/*
/*
  --------------------------------------------------------------------------------------
  Função para obter a lista completa de informações dos AUTOMÓVEIS existente do servidor via requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/modeloautos';
 /* nome_modelo = document.getElementById("consultaModelo").value="";*/
 document.getElementById("status_operacao").value="insercao";
  limpaList();
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
      .then((data) => {
      data.modelos_auto.forEach(item => insertList(item.regiao_busca,item.categoria_modelo, 
        item.marca_modelo, item.tipo_modelo,item.tipo_cambio_modelo, item.nome_modelo,item.ano_desde_modelo, item.ai_caracteristicas, item.ai_valor_medio,item.ai_valor_seguro, item.ai_info_regiao ))           

      })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para obter um único registro de uma busca a partir de um nome de modelo de automóvel indicado via requisição GET
  --------------------------------------------------------------------------------------
*/
const getModelo = async () => {

  nome_modelo = document.getElementById("consultaModelo").value;
  

  ///Nome do modelo deve ser passado para o endpoint
  let url = 'http://127.0.0.1:5000/modeloauto?nome_modelo=' + nome_modelo;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.json())
      .then((data) => {
        item=data;
        ///chama a função limpa lista para limpar os dados do grid e manter somente o modelo retornado via API
        limpaList();
        ////insere os dados no grid
        insertList(item.regiao_busca,item.categoria_modelo, item.marca_modelo, item.tipo_modelo,item.tipo_cambio_modelo, item.nome_modelo,
        item.ano_desde_modelo, item.ai_caracteristicas, item.ai_valor_medio,item.ai_valor_seguro, item.ai_info_regiao)    
        
      })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Chamada da função para limpar os dados da table, mantendo somente a linha do título
  --------------------------------------------------------------------------------------
*/
const limpaList = async () => {

  var table = document.getElementById('myTable');
  var linhas =  table.getElementsByTagName('tr');
  var numlinhas = linhas.length;
  while (numlinhas > 1) {
    table.deleteRow(numlinhas-1);
    numlinhas = linhas.length;
  }

}

 /*
  --------------------------------------------------------------------------------------
  Função para Atualizar Automóvel na lista do servidor via requisição PUT
  --------------------------------------------------------------------------------------
*/
const putVeiculo = async (inputRegiao, inputCategoria_modelo, inputMarca, inputTipoModelo, inputTipo_cambio_modelo, inputModelo,
  inputAno_desde_modelo, inputai_caracteristicas, inputai_valor_medio,inputai_valor_seguro,inputai_info_regiao) => {
    const formData = new FormData();
    formData.append('regiao_busca', inputRegiao);
    formData.append('categoria_modelo', inputCategoria_modelo);
    formData.append('marca_modelo', inputMarca);
    formData.append('tipo_modelo', inputTipoModelo);  
    formData.append('tipo_cambio_modelo', inputTipo_cambio_modelo);
    formData.append('nome_modelo', inputModelo);
    formData.append('ano_desde_modelo', inputAno_desde_modelo);
  
    formData.append('ai_caracteristicas', inputai_caracteristicas);  
    formData.append('ai_valor_medio', inputai_valor_medio);
    formData.append('ai_valor_seguro', inputai_valor_seguro);
    formData.append('ai_info_regiao', inputai_info_regiao);
    
    
    let url = 'http://127.0.0.1:5000/modeloauto';
    fetch(url, {
      method: 'put',
      body: formData
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });

  }
/*
 
  --------------------------------------------------------------------------------------
  Função para Inserir um Automóvel na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputRegiao, inputCategoria_modelo, inputMarca, inputTipoModelo, inputTipo_cambio_modelo, inputModelo,
  inputAno_desde_modelo, inputai_caracteristicas, inputai_valor_medio,inputai_valor_seguro,inputai_info_regiao) => {
  const formData = new FormData();
  formData.append('regiao_busca', inputRegiao);
  formData.append('categoria_modelo', inputCategoria_modelo);
  formData.append('marca_modelo', inputMarca);
  formData.append('tipo_modelo', inputTipoModelo);  
  formData.append('tipo_cambio_modelo', inputTipo_cambio_modelo);
  formData.append('nome_modelo', inputModelo);
  formData.append('ano_desde_modelo', inputAno_desde_modelo);

  formData.append('ai_caracteristicas', inputai_caracteristicas);  
  formData.append('ai_valor_medio', inputai_valor_medio);
  formData.append('ai_valor_seguro', inputai_valor_seguro);
  formData.append('ai_info_regiao', inputai_info_regiao);
  
  
  let url = 'http://127.0.0.1:5000/modeloauto';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  /* Inserir ícone de exclusão do item".*/
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);





}

/*
  --------------------------------------------------------------------------------------
  Função para criar um botão recuperacao para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertBtRecupera = (parent) => {

/* Inserir ícone de recuperação do item".*/
  let span1 = document.createElement("span");
  let txt1 = document.createTextNode("\u00BB");
  span1.className = "recupera";
  span1.appendChild(txt1);
  parent.appendChild(span1);

}


/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      ///indica o índice da coluna contendo o nome do modelo, que neste caso é zero(0).
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML;
      if (confirm("Você tem certeza que deseja excluir o modelo " +nomeItem + " ?")) {
        div.remove();
        deleteItem(nomeItem);
        alert("O modelo " + nomeItem + " foi  removido!")
      }
    }
  }
}




function modelojaExiste (nomeItem) {
  nome_modelo = nomeItem;
  let url = 'http://127.0.0.1:5000/modeloauto?nome_modelo=' + nome_modelo;
  ////////////////////////
  flag_existe = false;
  fetch(url, {
    method: 'get',  })
    .then((response) => response.json())
      .then((data) => {
        flag_existe = true;
        console.log("entrei " + item.nome_modelo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  return flag_existe;
     
}

const carregaElement = (nomeItem) => {

  nome_modelo = nomeItem;
  let url = 'http://127.0.0.1:5000/modeloauto?nome_modelo=' + nome_modelo;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.json())
      .then((data) => {
        item=data;
        ///

        document.getElementById("Regiao_Armazenar").value=item.regiao_busca;
        cep_campo = item.regiao_busca.substring(0,9);
        document.getElementById('Cep_Interessado').value = cep_campo;
        document.getElementById("categoria-select").value=item.categoria_modelo;
        document.getElementById("tipoVeiculos-select").value=item.tipo_modelo;
        document.getElementById("tipoCambio-select").value=item.tipo_cambio_modelo;
        document.getElementById("marca-select").value=item.marca_modelo;
        document.getElementById("modelo").value=item.nome_modelo;
        document.getElementById("anoDesde").value=item.ano_desde_modelo;
      
      
        document.getElementById("aiInfoDif_Auto").value=item.ai_caracteristicas;
        document.getElementById("aiValorMedioAuto").value=item.ai_valor_medio;
        document.getElementById("aiValorSeguroAutoRegiao").value=item.ai_valor_seguro;
        document.getElementById("aiInfoRegiaoCep").value=item.ai_info_regiao;
        document.getElementById("status_operacao").value="alteracao";

      })
    .catch((error) => {
      console.error('Error:', error);
    });


}




/*
  --------------------------------------------------------------------------------------
  Função para RECUPERAR um item da lista de acordo com o click no botão recuperacao
  --------------------------------------------------------------------------------------
*/
const recuperaElement = () => {
  let recuperar = document.getElementsByClassName("recupera");
  console.log("fala mané");

  let i;
  for (i = 0; i < recuperar.length; i++) {
    recuperar[i].onclick = function () {
      let div = this.parentElement.parentElement;
      ///indica o índice da coluna contendo o nome do modelo, que neste caso é zero(0).
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML;
      carregaElement(nomeItem);
       
      }
    }
  }






/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  
  let url = 'http://127.0.0.1:5000/modeloauto?&nome_modelo=' + item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}




/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/



  const getRegiaoCep = async () => {
    /*console.log('algumaCoisa');*/
    var cep_busca = document.getElementById('Cep_Interessado').value;
    console.log(cep_busca)
    let url = 'https://viacep.com.br/ws/'+ cep_busca + '/json/';
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        insertRegiao(data)
      })
      .catch((error) => {
       // console.error('Error:', error);
       alert("Cep inexistente!" + cep_busca);
       document.getElementById('Cep_Interessado').value = '';
       document.getElementById('regiao').innerHTML='';
       document.getElementById('Cep_Interessado').focus();


      });
  }


  const insertRegiao = (region) => {
    var section = document.getElementById('regiao');
   section.innerHTML='';
    let cep = document.createElement('cep');
    cep.innerHTML = 'Cep: '+ region.cep  + '<br>';

    let bairro = document.createElement('bairro');
    bairro.innerHTML = 'Bairro: ' + region.bairro + '<br>';

    let logradouro = document.createElement('logradouro');
    logradouro.innerHTML = 'Logradouro: ' + region.logradouro + '<br>';

    let estado = document.createElement('estado');
    estado.innerHTML = 'Estado: ' + region.estado + '<br>';

    let uf = document.createElement('uf');
    uf.innerHTML = 'Uf:'+ region.uf + '<br>';

    let regiao = document.createElement('regiao');
    regiao.innerHTML = 'Regiao: ' + region.regiao;

    document.getElementById("Regiao_Armazenar").value= region.cep +  ", " + region.uf+", "+region.estado + ", "+ region.bairro + ", " + region.logradouro;
    
    section.appendChild(cep);
    section.append(bairro);
    section.appendChild(logradouro);
    section.append(estado);
    section.append(uf);
    section.append(regiao);
    console.log(section);
  }

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item ........
  --------------------------------------------------------------------------------------
*/

const newItem = () => {


  status_oper = document.getElementById("status_operacao").value;
 
    console.log(status_oper);
    let inputModelo = document.getElementById("modelo").value;
    let inputRegiao = document.getElementById("Regiao_Armazenar").value;
    let inputCategoria_modelo = document.getElementById("categoria-select").value;
    let inputTipoModelo = document.getElementById("tipoVeiculos-select").value;
    let inputTipo_cambio_modelo = document.getElementById("tipoCambio-select").value;
    let inputMarca = document.getElementById("marca-select").value;
    let inputAno_desde_modelo = document.getElementById("anoDesde").value;
    let inputai_caracteristicas = document.getElementById("aiInfoDif_Auto").value;
    let inputai_valor_medio = document.getElementById("aiValorMedioAuto").value;
    let inputai_valor_seguro = document.getElementById("aiValorSeguroAutoRegiao").value;
    let inputai_info_regiao = document.getElementById("aiInfoRegiaoCep").value;
    
    /*console.log(inputRegiao);*/

    if (status_oper == "insercao"){
    insertList(inputRegiao, inputCategoria_modelo, inputMarca, inputTipoModelo, inputTipo_cambio_modelo, inputModelo,
      inputAno_desde_modelo,inputai_caracteristicas,inputai_valor_medio, inputai_valor_seguro, inputai_info_regiao)
      
    postItem (inputRegiao, inputCategoria_modelo, inputMarca, inputTipoModelo, inputTipo_cambio_modelo, inputModelo,
      inputAno_desde_modelo,inputai_caracteristicas,inputai_valor_medio, inputai_valor_seguro, inputai_info_regiao )
    
      alert("Veículo Inserido com sucesso!");
  } else if (status_oper == "alteracao"){
    console.log(status_oper);
    if (confirm("Veículo já existe. Deseja atualizar o veículo " +inputModelo+ " ?")) {
      putVeiculo (inputRegiao, inputCategoria_modelo, inputMarca, inputTipoModelo, inputTipo_cambio_modelo, inputModelo,
        inputAno_desde_modelo,inputai_caracteristicas,inputai_valor_medio, inputai_valor_seguro, inputai_info_regiao )
      getList()

      }
    }
  }


const limparInputs = () => {

  document.getElementById("regiao").value= "";
  document.getElementById("categoria-select").value= "";
  document.getElementById("tipoVeiculos-select").value= "";
  document.getElementById("tipoCambio-select").value= "";
  document.getElementById("marca-select").value= "";
  document.getElementById("modelo").value= "";
  document.getElementById("anoDesde").value= "";
  
  document.getElementById("Regiao_Armazenar").value="";
  document.getElementById('Cep_Interessado').value= "";
  document.getElementById('regiao').innerHTML="";

  document.getElementById("aiInfoDif_Auto").value="";
  document.getElementById("aiValorMedioAuto").value="";
  document.getElementById("aiValorSeguroAutoRegiao").value="";
  document.getElementById("aiInfoRegiaoCep").value="";
  document.getElementById("status_operacao").value="insercao";
}
/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (regiao_busca,categoria_modelo, marca_modelo, tipo_modelo, tipo_cambio_modelo, nome_modelo, ano_desde_modelo,ai_caracteristicas,ai_valor_medio, ai_valor_seguro, ai_info_regiao) => {
  
  /*var item = [nome_modelo, marca_modelo, categoria_modelo, tipo_modelo, tipo_cambio_modelo, regiao_busca, ano_desde_modelo, ai_caracteristicas, ai_valor_medio, ai_valor_seguro, ai_info_regiao];*/
  
  var item = [nome_modelo, marca_modelo, categoria_modelo, tipo_modelo, tipo_cambio_modelo, regiao_busca, ano_desde_modelo];
  

  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1));
  insertBtRecupera(row.insertCell(-1));
 
  document.getElementById("regiao").value= "";
  document.getElementById("categoria-select").value= "";
  document.getElementById("tipoVeiculos-select").value= "";
  document.getElementById("tipoCambio-select").value= "";
  document.getElementById("marca-select").value= "";
  document.getElementById("modelo").value= "";
  document.getElementById("anoDesde").value= "";
  
  document.getElementById("Regiao_Armazenar").value="";
  document.getElementById("Cep_Interessado").value = "";
  document.getElementById("regiao").innerHTML="";

  document.getElementById("aiInfoDif_Auto").value="";
  document.getElementById("aiValorMedioAuto").value="";
  document.getElementById("aiValorSeguroAutoRegiao").value="";
  document.getElementById("aiInfoRegiaoCep").value="";



  removeElement();
  recuperaElement();
}