var respostas = {
    "como funciona": "Para obter uma resposta, é necessário cadastrar préviamente a pergunta e a resposta",
};

tabela();

function tabela() {
    var tableBody = document.getElementById("table-body");
    let data = respostas
    for (var key in data) {
        var value = data[key];
        var row = document.createElement("tr");
        var keyCell = document.createElement("td");
        var valueCell = document.createElement("td");
        keyCell.textContent = key + "?";
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    }
}


function sendMessage() {
    var message = document.getElementById('message').value;
    //document.getElementById('chat').innerHTML = "<p></p>"
    let este = "";

    //<p><strong>Pergunta: </strong>New Web Design</p>
    //              <a href="#" class="float-right">21 March, 2014</a>
    //              <p><strong>Resposta:</strong>
    este += '<li>'
    este += '<a><strong>Você:</strong> ' + message + '</a>';
    data = new Date();
    este += '<a class="float-right">' + data.toLocaleString() +  '</a>'
    //document.getElementById('chat').innerHTML += '<li>'
    //document.getElementById('chat').innerHTML += '<p><strong>Você:</strong> ' + message + '</p>';
    //document.getElementById('chat').innerHTML += '<span class="float-right">' + new Date() +  '</span>'

    try {
        var resposta = respostas[message.toLowerCase()];
        if (resposta) {
            //document.getElementById('chat').innerHTML += '<p><strong>Resposta:</strong> '+resposta+'</p>';
            este  += '<p><strong>Resposta:</strong> '+resposta+'</p>';
            //document.getElementById('chat').innerHTML += '<p><strong>Chatbot:</strong> ' + resposta + '</p>';
        } else {
            //document.getElementById('chat').innerHTML +='<p><strong>Chatbot:</strong> Desculpe, não entendi sua pergunta. Poderia reformulá-la?</p>'
            este  +='<p><strong>Chatbot:</strong> Desculpe, não entendi sua pergunta. Poderia reformulá-la?</p>'
            //document.getElementById('chat').innerHTML += '<p><strong>Chatbot:</strong> Desculpe, não entendi sua pergunta. Poderia reformulá-la?</p>';
        }
        este += '</li>'
        document.getElementById('chat').innerHTML += este
    } catch (error) {
        alert("ERRO AO BUSCAR RESPOSTA")
    }

    document.getElementById('message').value = ""

}