let teste = "Os riscos ocupacionais são aqueles que estão ligados a atividade ocupacional sendo qualquer tipo de situação não saudável ou que não esteja de acordo com normativas de desempenho no ambiente de trabalho. Tais riscos podem desencadear problemas de saúde física ou mental nos colaboradores. Podem ser classificados como: Riscos físicos, químicos, biológicos, ergonômicos e de acidentes.\n\n- Riscos físicos: Consideram-se agentes de risco físico as diversas formas de energia a que possam estar expostos os trabalhadores, tais como: ruído, calor, frio, pressão, umidade, radiações ionizantes e não-ionizantes, vibração etc.\n\n- Riscos químicos: É o perigo a que determinado indivíduo está exposto ao manipular produtos químicos que podem causar-lhe danos físicos ou prejudicar-lhe a saúde. Estes químicos podem estar presentes em poeiras ou fumaças dispersas no ar, em resíduos líquidos, pastosos e outros que contenham agentes químicos prejudiciais à saúde.\n\n- Riscos biológicos: Considera-se os agentes biológicos como vírus, bactérias, parasitas, protozoários, fungos e bacilos que podem infectar o ser humano, causando alguma doença. Podem ser transmitidos de pessoas para pessoa, de um objeto contaminado para uma pessoa ou ainda de um animal para uma pessoa.\n\n- Risco ergonômico: São aqueles provenientes do esforço físico, levantamento de peso, postura inadequada e situações de estresse entre outros.\n\n- Risco de acidente: São muito diversificados e estão presentes no arranjo físico inadequado, pisos pouco resistentes ou irregulares, material ou matéria-prima fora de especificação, utilização de máquinas e equipamentos sem proteção, ferramentas impróprias ou defeituosas, iluminação excessiva ou insuficiente, quedas, atropelamentos e outros acidentes ocorridos durante o trabalho no no trajeto (ida ou volta para o trabalho).";


const respostas = {
    "como fazer uma pergunta?": "Digite sua pergunta, que a resposta será exibida em seguida",
    "como funciona?": "Para obter uma resposta, é necessário cadastrar préviamente a pergunta e a resposta",
    //
    "o que é a segurança no trabalho?" : "A segurança do trabalho é uma ciência que tem o objetivo de promover a proteção do trabalhador em seu local de trabalho, visando a redução de acidentes de trabalho e doenças ocupacionais. As Normas Regulamentadoras (NRs), regulamentam as atividades de segurança no trabalho.",
    "o que são as normas regulamentadoras?" : "Consistem em obrigações, direitos e deveres a serem cumpridos por empregadores e trabalhadores com o objetivo de garantir trabalho seguro e sadio, prevenindo a ocorrência de doenças e acidentes de trabalho. As Normas Regulamentadoras, conhecidas no Brasil como NRs, regulamentam e fornecem orientações sobre procedimentos obrigatórios relacionados à segurança e saúde do trabalhador. Essas normas são citadas no Capítulo V, Título II, da Consolidação das Leis do Trabalho (CLT). Foram aprovadas pela Portaria N.º 3.214, no dia 8 de junho de 1978, são de observância obrigatória por todas as empresas brasileiras regidas pela CLT e são periodicamente revisadas pelo Ministério do Trabalho e Previdência Social. São elaboradas e modificadas por comissões tripartites específicas compostas por representantes do governo, empregadores e trabalhadores. Tem como um dos principais objetivos, a padronização dos procedimentos de segurança e saúde do trabalho. Atualmente existem 38 NRs vigentes.",
    "o que são nrs?" : "Consistem em obrigações, direitos e deveres a serem cumpridos por empregadores e trabalhadores com o objetivo de garantir trabalho seguro e sadio, prevenindo a ocorrência de doenças e acidentes de trabalho. As Normas Regulamentadoras, conhecidas no Brasil como NRs, regulamentam e fornecem orientações sobre procedimentos obrigatórios relacionados à segurança e saúde do trabalhador. Essas normas são citadas no Capítulo V, Título II, da Consolidação das Leis do Trabalho (CLT). Foram aprovadas pela Portaria N.º 3.214, no dia 8 de junho de 1978, são de observância obrigatória por todas as empresas brasileiras regidas pela CLT e são periodicamente revisadas pelo Ministério do Trabalho e Previdência Social. São elaboradas e modificadas por comissões tripartites específicas compostas por representantes do governo, empregadores e trabalhadores. Tem como um dos principais objetivos, a padronização dos procedimentos de segurança e saúde do trabalho. Atualmente existem 38 NRs vigentes.",
    "o que são os riscos ocupacionais?" : teste,
    "o que são equipamentos de proteção individual?" : "Equipamento de proteção individual é qualquer meio ou dispositivo destinado a ser utilizados por uma pessoa contra possíveis riscos ameaçadores da sua saúde ou segurança durante o exercício de uma determinada atividade. São exemplos de EPIs: luvas, jalecos ou aventais, calçados de segurança, óculos de proteção, máscara facial, touca ou gorro, protetor ou abafador auditivo e outros. Devem ser utilizados de acordo com a atividade a ser realizada e estão especificados nas NR 06 EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL e NR 12 SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS.",
    "o que são epis?" : "Equipamento de proteção individual é qualquer meio ou dispositivo destinado a ser utilizados por uma pessoa contra possíveis riscos ameaçadores da sua saúde ou segurança durante o exercício de uma determinada atividade. São exemplos de EPIs: luvas, jalecos ou aventais, calçados de segurança, óculos de proteção, máscara facial, touca ou gorro, protetor ou abafador auditivo e outros. Devem ser utilizados de acordo com a atividade a ser realizada e estão especificados nas NR 06 EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL e NR 12 SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS.",
    "o que são equipamentos de proteção coletivas?" : "Se refere a todo dispositivo ou sistema de âmbito coletivo que se destina à preservação da integridade física e da saúde dos trabalhadores de uma empresa, assim como de terceiros. Os equipamentos de proteção coletiva podem ser móveis ou fixos e são de responsabilidade das empresas empregadoras. São exemplos de EPCs: Corrimão de escadas, capelas químicas, extintor de incêndio, hidrantes e mangueiras, proteções de partes móveis de máquinas e equipamentos, redes de proteção e outros.",
    "o que são epcs?" : "Se refere a todo dispositivo ou sistema de âmbito coletivo que se destina à preservação da integridade física e da saúde dos trabalhadores de uma empresa, assim como de terceiros. Os equipamentos de proteção coletiva podem ser móveis ou fixos e são de responsabilidade das empresas empregadoras. São exemplos de EPCs: Corrimão de escadas, capelas químicas, extintor de incêndio, hidrantes e mangueiras, proteções de partes móveis de máquinas e equipamentos, redes de proteção e outros.",
    "o que é a sinalização de segurança?" : "É toda sinalização utilizada para alertar o trabalhador sobre segurança no trabalho. A função da sinalização de segurança é alertar, orientar e informar sobre os riscos e perigos existentes em um ambiente de trabalho, de forma a prevenir acidentes e doenças ocupacionais. A NR 26 é a norma regulamentadora que apresenta informações relativas à Sinalização de Segurança no ambiente de trabalho. São exemplos de sinalização de segurança: Placas que avisam sobre um piso escorregadio, placas com indicativo de saída de emergência, faixas de piso que delimitam a circulação de pessoas ou veículos e outras mais.",
    //
};

//tabela();

function tabela() {
    var tableBody = document.getElementById("table-body");
    let data = respostas
    for (var key in data) {
        var value = data[key];
        var row = document.createElement("tr");
        var keyCell = document.createElement("td");
        var valueCell = document.createElement("td");
        keyCell.textContent = key;
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    }
}

function sendMessage() {
    var message = document.getElementById('message').value;
    let este = "";
  
    este += '<li>';
    este += '<a><strong>Você:</strong> ' + message + '</a>';
    data = new Date();
    este += '<a class="float-right">' + data.toLocaleString() + '</a>';
  
    try {
      var resposta = buscarResposta(message);
      if (resposta) {
        este += '<p><strong>Resposta:</strong> ' + resposta + '</p>';
      } else {
        este += '<p><strong>Chatbot:</strong> Desculpe, não entendi sua pergunta. Poderia reformulá-la?</p>';
      }
      este += '</li>';
      document.getElementById('chat').innerHTML += este;
    } catch (error) {
      alert("ERRO AO BUSCAR RESPOSTA");
    }
  
    document.getElementById('message').value = "";
  }
  
  // Função para buscar a resposta com base na entrada do usuário
  function buscarResposta(entrada) {
    console.log("é interrogação: ", entrada.toLowerCase().trim().length);
    entrada = entrada.toLowerCase().trim();
    if ( !entrada.endsWith('?')){
      entrada = entrada + "?";
    }
    for (var pergunta in respostas) {
      if( pergunta == entrada ){
        return respostas[pergunta]
      }
      //console.log(pergunta + ":");
      //console.log(respostas[pergunta]);
    }
    /*
    var palavras = entrada.split(' ');
  
    // Mapear palavras para verificar se há uma resposta correspondente
    for (var i = 0; i < palavras.length; i++) {
      var palavra = palavras[i];
      var resposta = respostas[palavra];
  
      if (resposta) {
        return resposta;
      }
  
      // Verificar se há uma forma singular do verbo
      var formaSingular = pluralParaSingular(palavra);
      if (formaSingular && respostas[formaSingular]) {
        return respostas[formaSingular];
      }
    }  
    */
    return null;
  }
  
  // Função para converter uma palavra do plural para o singular
  function pluralParaSingular(palavra) {
    // Adicione aqui suas regras para conversão de plural para singular
    if (palavra.endsWith('s')) {
      return palavra.slice(0, -1);
    }
  
    return null;
  }
  
	
document.getElementById('message').value = "como fazer uma pergunta?";
sendMessage()
